'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, query, where, getDocs, updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { Sword, Trophy, Clock, AlertCircle, ShieldAlert, RotateCcw, Share2, Copy, Check, X, ArrowRight, Star, Zap } from 'lucide-react';
import { toPng } from 'html-to-image';

interface BattleQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  timeLimitSeconds: number;
}

interface BattleRoom {
  id: string;
  roomId: string;
  status: 'waiting' | 'starting' | 'active' | 'completed';
  nicheId: string;
  nicheName: string;
  hostId: string;
  hostName: string;
  hostPhoto: string;
  guestId: string | null;
  guestName: string | null;
  guestPhoto: string | null;
  questions: BattleQuestion[];
  hostScore: number;
  guestScore: number;
  hostProgress: number;
  guestProgress: number;
  hostFinished: boolean;
  guestFinished: boolean;
}

export default function BattleRoomPage() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.roomId as string;

  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Battle room state
  const [battle, setBattle] = useState<BattleRoom | null>(null);
  const [battleDocId, setBattleDocId] = useState<string | null>(null);
  const [loadingBattle, setLoadingBattle] = useState(true);
  const [battleError, setBattleError] = useState('');

  // Local game playing states
  const [gameState, setGameState] = useState<'lobby' | 'countdown' | 'playing' | 'waiting_opponent' | 'results'>('lobby');
  const [countdown, setCountdown] = useState(3);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  // Question timer states
  const [timeLeft, setTimeLeft] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);

  // UI status states
  const [copied, setCopied] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 1. Monitor auth status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Listen to Firestore battle room changes
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setLoadingBattle(false);
      return;
    }

    const q = query(collection(db, 'battles'), where('roomId', '==', roomId));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        setBattleError("Battle room not found.");
        setLoadingBattle(false);
        return;
      }

      const docObj = snapshot.docs[0];
      const data = docObj.data() as BattleRoom;
      setBattle(data);
      setBattleDocId(docObj.id);
      setLoadingBattle(false);

      // Handle transitions based on Firestore room status
      if (data.status === 'starting' && gameState === 'lobby') {
        setGameState('countdown');
      } else if (data.status === 'completed') {
        setGameState('results');
      }

      // Auto-transition to completed when both players finish
      if (data.status !== 'completed' && data.hostFinished && data.guestFinished) {
        updateDoc(docObj.ref, { status: 'completed' });
      }
    }, (error) => {
      console.error("Error subscribing to battle room", error);
      setBattleError("Failed to connect to the battle room.");
      setLoadingBattle(false);
    });

    return () => unsubscribe();
  }, [roomId, authLoading, user, gameState]);

  // 3. Invite Link copy function
  const copyInviteLink = () => {
    if (typeof window === 'undefined') return;
    const link = `${window.location.origin}/battle`;
    navigator.clipboard.writeText(`Hey, join my AnswerIn5 trivia battle! Use code: ${roomId} at ${link}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 4. Countdown Timer logic
  useEffect(() => {
    if (gameState !== 'countdown') return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Transition room status to active if user is the host
      if (battle && user && battle.hostId === user.uid && battleDocId) {
        updateDoc(doc(db, 'battles', battleDocId), { status: 'active' });
      }
      setGameState('playing');
      setTimeLeft(5);
    }
  }, [gameState, countdown, battle, user, battleDocId]);

  // 5. Active Question Timer Logic (ticks every 2 seconds to give 10 seconds total, but visually counts down from 5)
  useEffect(() => {
    if (gameState !== 'playing' || isAnswering) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 2000);
      return () => clearTimeout(timer);
    } else {
      // Time expired: auto submit wrong answer
      handleAnswerSubmit(-1);
    }
  }, [gameState, timeLeft, isAnswering]);

  // 6. Handle answer submission & syncing
  const handleAnswerSubmit = useCallback(async (optionIndex: number) => {
    if (!battle || !battleDocId || !user || isAnswering) return;

    setIsAnswering(true);
    setSelectedAnswer(optionIndex);

    const currentQuestion = battle.questions[currentIdx];
    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    
    let newScore = score;
    let newCorrect = correctCount;

    if (isCorrect) {
      // Add speed bonus to base points (e.g. 100 base + 20 per second left)
      const points = 100 + (timeLeft * 20);
      newScore += points;
      newCorrect += 1;
      setScore(newScore);
      setCorrectCount(newCorrect);
    }

    const isHost = user.uid === battle.hostId;
    const isFinished = currentIdx >= battle.questions.length - 1;

    // Show the explanation screen for 2.5 seconds, then move forward
    setTimeout(async () => {
      try {
        if (isFinished) {
          // Player completed the quiz
          if (isHost) {
            await updateDoc(doc(db, 'battles', battleDocId), {
              hostScore: newScore,
              hostProgress: currentIdx + 1,
              hostFinished: true,
            });
          } else {
            await updateDoc(doc(db, 'battles', battleDocId), {
              guestScore: newScore,
              guestProgress: currentIdx + 1,
              guestFinished: true,
            });
          }



          setGameState('waiting_opponent');
        } else {
          // Go to next question
          const nextIdx = currentIdx + 1;
          
          if (isHost) {
            await updateDoc(doc(db, 'battles', battleDocId), {
              hostScore: newScore,
              hostProgress: nextIdx,
            });
          } else {
            await updateDoc(doc(db, 'battles', battleDocId), {
              guestScore: newScore,
              guestProgress: nextIdx,
            });
          }

          setCurrentIdx(nextIdx);
          setSelectedAnswer(null);
          setIsAnswering(false);
          setTimeLeft(5);
        }
      } catch (err) {
        console.error("Error updating player progress", err);
      }
    }, 2500);

  }, [battle, battleDocId, user, currentIdx, score, correctCount, timeLeft, isAnswering, roomId]);

  // Host starts the game
  const startBattle = async () => {
    if (!battleDocId) return;
    try {
      await updateDoc(doc(db, 'battles', battleDocId), { status: 'starting' });
    } catch (err) {
      console.error("Error starting battle", err);
    }
  };

  // Loading indicator
  if (authLoading || loadingBattle) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        <p className="mt-4 text-slate-500 text-sm font-medium">Entering arena...</p>
      </div>
    );
  }

  // Not signed in
  if (!user) {
    return (
      <div className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center">
        <Card className="border border-red-100 shadow-sm rounded-2xl text-center p-6 space-y-4">
          <ShieldAlert className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-xl font-bold font-heading text-slate-900">Authentication Required</h2>
          <p className="text-sm text-slate-500 font-sans">
            Please sign in on the lobby page before joining this trivia battle.
          </p>
          <Button onClick={() => router.push('/battle')} className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800">
            Go to Battle Lobby
          </Button>
        </Card>
      </div>
    );
  }

  // Error state
  if (battleError || !battle) {
    return (
      <div className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center">
        <Card className="border border-slate-100 shadow-sm rounded-2xl text-center p-6 space-y-4">
          <AlertCircle className="w-12 h-12 text-slate-400 mx-auto" />
          <h2 className="text-xl font-bold font-heading text-slate-900">Battle Room Error</h2>
          <p className="text-sm text-slate-500 font-sans">
            {battleError || "The battle room could not be loaded."}
          </p>
          <Button onClick={() => router.push('/battle')} className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800">
            Return to Lobby
          </Button>
        </Card>
      </div>
    );
  }

  const isHost = user.uid === battle.hostId;
  const isGuest = user.uid === battle.guestId;

  // Protect room against third-party users
  if (!isHost && !isGuest && battle.guestId !== null) {
    return (
      <div className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center">
        <Card className="border border-slate-100 shadow-sm rounded-2xl text-center p-6 space-y-4">
          <ShieldAlert className="w-12 h-12 text-amber-500 mx-auto" />
          <h2 className="text-xl font-bold font-heading text-slate-900">Room Is Full</h2>
          <p className="text-sm text-slate-500 font-sans">
            This battle already has two players connected.
          </p>
          <Button onClick={() => router.push('/battle')} className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800">
            Return to Lobby
          </Button>
        </Card>
      </div>
    );
  }

  // ──── SCREEN RENDER ────

  // LOBBY (WAITING FOR GUEST)
  if (gameState === 'lobby') {
    return (
      <div className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <Badge className="bg-indigo-50 border-indigo-100 text-indigo-700 px-3 py-1 font-semibold text-xs rounded-full">
            Battle Lobby
          </Badge>
          <h1 className="text-2xl font-bold font-heading text-slate-900">
            Room Code: <span className="font-mono text-indigo-600 tracking-wider bg-slate-50 border border-slate-100 px-3 py-1 rounded-xl text-3xl select-all font-black">{roomId}</span>
          </h1>
          <p className="text-xs text-slate-400 font-sans">
            Niche: <span className="font-bold text-slate-700">{battle.nicheName}</span>
          </p>
        </div>

        {/* Players visual */}
        <div className="grid grid-cols-2 gap-4">
          {/* Host Card */}
          <Card className="border border-slate-100 bg-slate-50/50 shadow-sm rounded-2xl p-4 text-center space-y-3">
            <img
              src={battle.hostPhoto || `https://ui-avatars.com/api/?name=${battle.hostName}&background=4f46e5&color=fff&bold=true`}
              alt={battle.hostName}
              className="w-16 h-16 rounded-full border border-slate-200 shadow-sm mx-auto object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider font-sans">Host</p>
              <h3 className="font-heading font-bold text-sm text-slate-800 truncate">{battle.hostName}</h3>
            </div>
            <Badge className="bg-green-50 border-green-100 text-green-700 rounded-full font-bold">Ready</Badge>
          </Card>

          {/* Guest Card */}
          <Card className="border border-dashed border-slate-200 shadow-sm rounded-2xl p-4 text-center flex flex-col justify-center items-center space-y-3 min-h-[170px]">
            {battle.guestId ? (
              <>
                <img
                  src={battle.guestPhoto || `https://ui-avatars.com/api/?name=${battle.guestName}&background=64748b&color=fff&bold=true`}
                  alt={battle.guestName || 'Guest'}
                  className="w-16 h-16 rounded-full border border-slate-200 shadow-sm object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-sans">Opponent</p>
                  <h3 className="font-heading font-bold text-sm text-slate-800 truncate">{battle.guestName}</h3>
                </div>
                <Badge className="bg-green-50 border-green-100 text-green-700 rounded-full font-bold">Ready</Badge>
              </>
            ) : (
              <div className="space-y-2.5 py-4">
                <div className="animate-pulse w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 font-bold">?</div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">Waiting...</p>
              </div>
            )}
          </Card>
        </div>

        {/* Lobby Actions */}
        <div className="space-y-3">
          <Button
            onClick={copyInviteLink}
            variant="outline"
            className="w-full rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 h-11 shadow-sm font-sans"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" /> Link Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Invite Code
              </>
            )}
          </Button>

          {isHost && (
            <Button
              onClick={startBattle}
              disabled={!battle.guestId}
              className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 h-11 shadow-sm font-sans"
            >
              Start Battle
            </Button>
          )}

          {!isHost && (
            <div className="text-center p-3.5 bg-slate-50 border border-slate-100 text-xs font-medium text-slate-500 rounded-xl font-sans">
              Waiting for Host to start the battle...
            </div>
          )}
        </div>
      </div>
    );
  }

  // COUNTDOWN
  if (gameState === 'countdown') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] bg-white text-slate-900">
        <div className="text-center space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 font-sans">Battle Commencing In</p>
          <div className="text-8xl font-heading font-black text-indigo-600 animate-ping">
            {countdown === 0 ? "GO!" : countdown}
          </div>
        </div>
      </div>
    );
  }

  // WAITING FOR OPPONENT TO FINISH
  if (gameState === 'waiting_opponent') {
    const oppName = isHost ? battle.guestName : battle.hostName;
    const oppPhoto = isHost ? battle.guestPhoto : battle.hostPhoto;
    const oppProgress = isHost ? battle.guestProgress : battle.hostProgress;
    const oppFinished = isHost ? battle.guestFinished : battle.hostFinished;

    return (
      <div className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center space-y-6">
        <Card className="border border-slate-100 shadow-sm rounded-2xl p-6 text-center space-y-4">
          <Clock className="w-14 h-14 text-indigo-500 animate-pulse mx-auto" />
          <h2 className="text-xl font-bold font-heading text-slate-900">Waiting for Opponent</h2>
          <p className="text-sm text-slate-500 font-sans">
            You finished! Let's see how {oppName} finishes.
          </p>

          <div className="flex items-center justify-center gap-4 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
            <img
              src={oppPhoto || `https://ui-avatars.com/api/?name=${oppName}&background=64748b&color=fff&bold=true`}
              alt={oppName || ''}
              className="w-10 h-10 rounded-full border border-slate-200"
            />
            <div className="text-left">
              <h4 className="font-heading font-bold text-sm text-slate-800">{oppName}</h4>
              <p className="text-xs text-slate-400 font-sans">
                Progress: <span className="font-bold text-slate-700">{oppFinished ? "Finished!" : `Question ${oppProgress} / ${battle.questions.length}`}</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ACTIVE PLAYING
  if (gameState === 'playing') {
    const currentQuestion = battle.questions[currentIdx];
    const totalQuestions = battle.questions.length;
    const progressPercent = ((currentIdx) / totalQuestions) * 100;
    const timerPercent = (timeLeft / 5) * 100;

    // Opponent sync stats
    const oppName = isHost ? battle.guestName : battle.hostName;
    const oppScore = isHost ? battle.guestScore : battle.hostScore;
    const oppProgress = isHost ? battle.guestProgress : battle.hostProgress;

    return (
      <div className="flex-1 max-w-xl w-full mx-auto p-4 md:p-6 space-y-6 bg-white text-slate-900">
        
        {/* Synchronized Scoreboard Header */}
        <div className="grid grid-cols-2 gap-3">
          {/* Host Card */}
          <div className={`p-3 border rounded-2xl shadow-sm flex items-center gap-3 ${isHost ? 'bg-slate-50 border-slate-200' : 'border-slate-100 bg-white'}`}>
            <img
              src={battle.hostPhoto || `https://ui-avatars.com/api/?name=${battle.hostName}&background=4f46e5&color=fff&bold=true`}
              alt={battle.hostName}
              className="w-9 h-9 rounded-full border border-slate-200 shrink-0"
            />
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider font-sans">Host</p>
              <h4 className="font-heading font-bold text-xs text-slate-800 truncate">{battle.hostName}</h4>
              <p className="text-sm font-black font-sans text-slate-900">{battle.hostScore} pts</p>
            </div>
            <Badge className="ml-auto text-[10px] rounded-full px-2 py-0.5 bg-slate-100 text-slate-500 font-sans border-0 shrink-0">
              Q{battle.hostProgress + 1}
            </Badge>
          </div>

          {/* Guest Card */}
          <div className={`p-3 border rounded-2xl shadow-sm flex items-center gap-3 ${isGuest ? 'bg-slate-50 border-slate-200' : 'border-slate-100 bg-white'}`}>
            <img
              src={battle.guestPhoto || `https://ui-avatars.com/api/?name=${battle.guestName}&background=64748b&color=fff&bold=true`}
              alt={battle.guestName || 'Guest'}
              className="w-9 h-9 rounded-full border border-slate-200 shrink-0"
            />
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">Guest</p>
              <h4 className="font-heading font-bold text-xs text-slate-800 truncate">{battle.guestName}</h4>
              <p className="text-sm font-black font-sans text-slate-900">{battle.guestScore} pts</p>
            </div>
            <Badge className="ml-auto text-[10px] rounded-full px-2 py-0.5 bg-slate-100 text-slate-500 font-sans border-0 shrink-0">
              Q{battle.guestProgress + 1}
            </Badge>
          </div>
        </div>

        {/* Question Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">
              Question {currentIdx + 1} of {totalQuestions}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 font-sans">
              <Clock className="w-3.5 h-3.5" />
              <span>{timeLeft}s</span>
            </div>
          </div>
          {/* Timed progress bar */}
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-linear ${timeLeft > 2 ? 'bg-indigo-600' : 'bg-red-500 animate-pulse'}`}
              style={{ width: `${timerPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="border border-slate-100 shadow-md rounded-2xl overflow-hidden">
          <CardContent className="p-6 md:p-8 space-y-6">
            <h2 className="text-lg md:text-xl font-heading font-bold text-slate-900 text-center leading-relaxed">
              {currentQuestion.questionText}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQuestion.correctAnswerIndex;
                
                let btnStyle = "border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-800";
                
                if (isAnswering) {
                  if (isCorrect) {
                    btnStyle = "bg-green-50 border-green-300 text-green-700 font-bold ring-1 ring-green-300";
                  } else if (isSelected) {
                    btnStyle = "bg-red-50 border-red-300 text-red-700 ring-1 ring-red-300";
                  } else {
                    btnStyle = "opacity-40 border-slate-100 text-slate-300";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswering}
                    onClick={() => handleAnswerSubmit(idx)}
                    className={`w-full text-left p-4 border rounded-xl font-medium font-sans text-sm md:text-base flex items-center justify-between transition-all duration-200 outline-none ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswering && isCorrect && <Check className="w-5 h-5 text-green-600 shrink-0" />}
                    {isAnswering && isSelected && !isCorrect && <X className="w-5 h-5 text-red-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </CardContent>

          {/* Explanation panel */}
          {isAnswering && (
            <div className="bg-indigo-50/50 border-t border-indigo-50 p-4 md:p-6 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Badge className="bg-indigo-100 text-indigo-700 border-0 rounded-full font-bold mb-2 text-[10px] font-sans">
                Explanation
              </Badge>
              <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </Card>
      </div>
    );
  }

  // RESULTS
  const shareAsImage = async () => {
    if (!cardRef.current) return;
    setShareLoading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'answer-in-5-battle.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Answer in 5 — Battle Result',
          text: 'Check out my battle result!',
          files: [file],
        });
      } else {
        const link = document.createElement('a');
        link.download = 'answer-in-5-battle.png';
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.error('Share failed:', err);
    } finally {
      setShareLoading(false);
    }
  };

  if (gameState === 'results') {
    const hostScore = battle.hostScore;
    const guestScore = battle.guestScore;

    let resultTitle = "";
    let resultColor = "";
    let ResultIcon = Trophy;
    let resultIconColor = "text-amber-500";
    let resultSubtitle = "";

    if (hostScore === guestScore) {
      resultTitle = "It's a Tie!";
      resultColor = "text-indigo-600";
      ResultIcon = Star;
      resultIconColor = "text-indigo-500";
      resultSubtitle = "Neck and neck!";
    } else if ((isHost && hostScore > guestScore) || (isGuest && guestScore > hostScore)) {
      resultTitle = "Victory!";
      resultColor = "text-green-600";
      ResultIcon = Trophy;
      resultIconColor = "text-amber-500";
      resultSubtitle = "You crushed it!";
    } else {
      resultTitle = "Defeat!";
      resultColor = "text-red-500";
      ResultIcon = ShieldAlert;
      resultIconColor = "text-red-500";
      resultSubtitle = "Better luck next time!";
    }

    return (
      <div className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center space-y-6">
        <div ref={cardRef}>
          <Card className="border border-slate-100 shadow-md rounded-2xl text-center p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <ResultIcon className={`w-16 h-16 ${resultIconColor} mx-auto`} />
              <h1 className={`text-4xl font-heading font-black tracking-tight ${resultColor}`}>
                {resultTitle}
              </h1>
              <p className="text-xs text-slate-400 font-sans">
                {resultSubtitle}
              </p>
            </div>

            {/* Final scores layout */}
            <div className="grid grid-cols-2 gap-0 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
              {/* Host Stats */}
              <div className={`space-y-2 border-r border-slate-200 p-4 ${hostScore > guestScore ? 'bg-green-50' : hostScore < guestScore ? 'opacity-60' : ''}`}>
                <img
                  src={battle.hostPhoto || `https://ui-avatars.com/api/?name=${battle.hostName}&background=4f46e5&color=fff&bold=true`}
                  alt={battle.hostName}
                  className="w-12 h-12 rounded-full border border-slate-200 mx-auto object-cover"
                />
                <h4 className="font-heading font-bold text-xs text-slate-800 truncate px-1">{battle.hostName}</h4>
                <p className="text-xl font-black font-sans text-slate-900">{battle.hostScore} pts</p>
                {hostScore > guestScore && <Badge className="bg-green-50 border-green-100 text-green-700 rounded-full font-bold text-[9px]">Winner</Badge>}
              </div>

              {/* Guest Stats */}
              <div className={`space-y-2 p-4 ${guestScore > hostScore ? 'bg-green-50' : guestScore < hostScore ? 'opacity-60' : ''}`}>
                <img
                  src={battle.guestPhoto || `https://ui-avatars.com/api/?name=${battle.guestName}&background=64748b&color=fff&bold=true`}
                  alt={battle.guestName || 'Guest'}
                  className="w-12 h-12 rounded-full border border-slate-200 mx-auto object-cover"
                />
                <h4 className="font-heading font-bold text-xs text-slate-800 truncate px-1">{battle.guestName}</h4>
                <p className="text-xl font-black font-sans text-slate-900">{battle.guestScore} pts</p>
                {guestScore > hostScore && <Badge className="bg-green-50 border-green-100 text-green-700 rounded-full font-bold text-[9px]">Winner</Badge>}
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={shareAsImage}
                disabled={shareLoading}
                variant="outline"
                className="w-full rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 h-11 font-sans flex items-center justify-center gap-2"
              >
                {shareLoading ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Share2 className="w-4 h-4" />}
                {shareLoading ? 'Generating...' : 'Share Result'}
              </Button>
              <Button onClick={() => router.push('/battle')} className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 h-11 font-sans">
                Play Again <RotateCcw className="w-4 h-4" />
              </Button>
              <Button onClick={() => router.push('/')} variant="outline" className="w-full rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 h-11 font-sans">
                Go Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}
