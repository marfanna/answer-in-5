'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, AlertCircle, ArrowRight, ShieldAlert, Share2, Download, RotateCcw, ChevronDown, ChevronUp, Star, ThumbsUp, Target, Zap } from 'lucide-react';
import { Question } from '@/lib/mockData';
import { toPng } from 'html-to-image';

type QuizState = 'rules' | 'playing' | 'finished';

// Fisher-Yates Shuffle
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function QuizClient({ questions, title }: { questions: Question[], title: string }) {
  const router = useRouter();
  
  // Game State
  const [quizState, setQuizState] = useState<QuizState>('rules');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [questionResults, setQuestionResults] = useState<boolean[]>([]);
  const [missedQuestions, setMissedQuestions] = useState<Question[]>([]);
  const [showReview, setShowReview] = useState(false);
  
  // Question State
  const [timeLeft, setTimeLeft] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState(false); 
  
  // DOM Ref for Image Export
  const resultCardRef = useRef<HTMLDivElement>(null);

  // Initialization: Randomize and filter seen questions
  useEffect(() => {
    // 1. Get seen questions from localStorage
    const seenIds: string[] = JSON.parse(localStorage.getItem('seenQuestions') || '[]');
    
    // 2. Filter out seen questions
    let availableQuestions = questions.filter(q => !seenIds.includes(q.id));
    
    // 3. Fallback: If they've seen almost everything, reset their history for this niche
    if (availableQuestions.length < 10) {
      console.log("Resetting history for this niche due to low question pool");
      // Keep only IDs that don't belong to the current questions pool
      const currentIds = questions.map(q => q.id);
      const newSeenIds = seenIds.filter(id => !currentIds.includes(id));
      localStorage.setItem('seenQuestions', JSON.stringify(newSeenIds));
      availableQuestions = [...questions]; // Reset to full pool
    }

    // 4. Shuffle and take 10
    const shuffled = shuffleArray(availableQuestions);
    setActiveQuestions(shuffled.slice(0, 10));
  }, [questions]);

  const startQuiz = () => {
    setQuizState('playing');
    setTimeLeft(5);
  };

  const handleNextQuestion = useCallback(async () => {
    setSelectedAnswer(null);
    setIsAnswering(false);
    
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(5);
    } else {
      // Save seen questions
      const seenIds: string[] = JSON.parse(localStorage.getItem('seenQuestions') || '[]');
      const newSeenIds = [...new Set([...seenIds, ...activeQuestions.map(q => q.id)])];
      localStorage.setItem('seenQuestions', JSON.stringify(newSeenIds));
      
      // Save score to Firebase if user is logged in
      try {
        const { auth, db } = await import('@/lib/firebase');
        const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
        
        if (auth.currentUser) {
          await addDoc(collection(db, 'scores'), {
            userId: auth.currentUser.uid,
            userName: auth.currentUser.displayName || 'Anonymous Player',
            userPhoto: auth.currentUser.photoURL || '',
            nicheId: title,
            score: score,
            correctCount: correctCount,
            timestamp: serverTimestamp()
          });
        }
      } catch (e) {
        console.error("Failed to save score to database", e);
      }
      
      setQuizState('finished');
    }
  }, [currentIndex, activeQuestions, score, correctCount, title]);

  const handleAnswer = useCallback((index: number) => {
    if (isAnswering) return;

    setSelectedAnswer(index);
    setIsAnswering(true);

    const currentQuestion = activeQuestions[currentIndex];
    const isCorrect = index === currentQuestion.correctAnswerIndex;
    setQuestionResults(prev => [...prev, isCorrect]);
    if (isCorrect) {
      // Base points + time bonus. (Max 150 per question)
      setScore(prev => prev + 100 + (timeLeft * 10));
      setCorrectCount(prev => prev + 1);
    } else {
      setMissedQuestions(prev => [...prev, currentQuestion]);
    }
  }, [activeQuestions, currentIndex, isAnswering, timeLeft]);

  // Timer logic with HIDDEN GRACE PERIOD
  // UI shows 5 seconds, but it ticks every 1.5 seconds instead of 1.0. 
  // This gives them 7.5 seconds of real time to read.
  useEffect(() => {
    if (quizState !== 'playing' || isAnswering) return;

    if (timeLeft <= 0) {
      handleAnswer(-1); // Timeout
      return;
    }

    // Hidden Grace Period: 1500ms instead of 1000ms
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1500);

    return () => clearInterval(timer);
  }, [timeLeft, quizState, isAnswering, handleAnswer]);

  const handleDownloadImage = async () => {
    if (resultCardRef.current) {
      try {
        const dataUrl = await toPng(resultCardRef.current, { backgroundColor: '#f8fafc', pixelRatio: 2 });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `AnswerIn5-${title.replace(/\\s+/g, '-')}-Score.png`;
        link.click();
      } catch (error) {
        console.error("Error generating image", error);
      }
    }
  };

  const handleShare = async () => {
    const text = `I just scored ${score} points on the ${title} quiz in Answer in 5! Can you beat me? 🏆`;
    const url = window.location.href;
    
    try {
      if (navigator.share && resultCardRef.current) {
        const blob = await toPng(resultCardRef.current, { backgroundColor: '#f8fafc', pixelRatio: 2 })
          .then(dataUrl => fetch(dataUrl).then(res => res.blob()));
          
        if (!blob) return;
        const file = new File([blob], 'AnswerIn5-Score.png', { type: 'image/png' });
        
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Answer in 5 Score',
            text: text,
            files: [file],
          });
        } else {
          await navigator.share({
            title: 'Answer in 5 Score',
            text: text,
            url: url,
          });
        }
      } else {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
      }
    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  // --------------------------------------------------------------------------
  // RENDER: RULES SCREEN
  // --------------------------------------------------------------------------
  if (quizState === 'rules') {
    return (
      <div className="flex-1 flex items-center justify-center p-6 w-full max-w-2xl mx-auto">
        <Card className="w-full shadow-xl border-slate-200">
          <CardHeader className="text-center space-y-4 pt-10">
            <ShieldAlert className="w-16 h-16 mx-auto text-blue-500" />
            <CardTitle className="text-3xl font-heading text-slate-900">Quiz Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-slate-900">10 Random Questions</h3>
                  <p className="text-slate-500 text-sm">Every quiz session is unique. We track what you've seen so you rarely get repeats.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-slate-900">5 Seconds to Answer</h3>
                  <p className="text-slate-500 text-sm">You have to be fast. No time to Google the answers. Use your gut.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-slate-900">Speed Bonus</h3>
                  <p className="text-slate-500 text-sm">Answering correctly is good, but answering quickly gets you a massive multiplier.</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full h-14 text-lg font-bold bg-slate-900 text-white rounded-xl mt-4" 
              onClick={startQuiz}
              disabled={activeQuestions.length === 0}
            >
              {activeQuestions.length === 0 ? 'Loading Questions...' : 'I am ready. Start Quiz!'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: RESULTS SCREEN
  // --------------------------------------------------------------------------
  if (quizState === 'finished') {
    const accuracy = Math.round((correctCount / 10) * 100);
    const performance =
      correctCount === 10 ? { icon: Trophy,   label: 'Perfect Score' } :
      correctCount >= 8   ? { icon: Zap,       label: 'Excellent'     } :
      correctCount >= 6   ? { icon: ThumbsUp,  label: 'Good Job'      } :
      correctCount >= 4   ? { icon: Star,      label: 'Not Bad'       } :
                            { icon: Target,    label: 'Keep Practicing' };
    const PerformanceIcon = performance.icon;

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-xl mx-auto">
        <div ref={resultCardRef} className="w-full bg-slate-50 p-4 rounded-3xl">
          <Card className="w-full shadow-2xl border-0 overflow-hidden bg-white rounded-2xl relative">
            <CardHeader className="text-center pt-10 pb-4 border-b border-slate-100">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-5">
                <Trophy className="w-8 h-8 text-slate-700" />
              </div>
              <CardTitle className="text-2xl font-heading text-slate-900">Quiz Complete</CardTitle>
              <p className="text-slate-400 text-sm mt-1">{title}</p>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <PerformanceIcon className="w-3.5 h-3.5 text-slate-400" />
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{performance.label}</p>
              </div>
            </CardHeader>

            <CardContent className="text-center space-y-5 px-8 pb-6">
              {/* Score */}
              <div className="py-5 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mb-1">FINAL SCORE</p>
                <p className="text-7xl font-black text-slate-900 font-heading tracking-tighter">{score}</p>
              </div>

              {/* Stats row */}
              <div className="flex justify-center gap-8 py-1">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Correct</p>
                  <p className="text-2xl font-bold text-slate-900">{correctCount}/10</p>
                </div>
                <div className="w-px bg-slate-200" />
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Accuracy</p>
                  <p className="text-2xl font-bold text-slate-900">{accuracy}%</p>
                </div>
              </div>

              {/* Question dots */}
              <div className="flex justify-center gap-2 pt-1">
                {questionResults.map((correct, i) => (
                  <div
                    key={i}
                    title={`Q${i + 1}: ${correct ? 'Correct' : 'Wrong'}`}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${correct ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400'}`}
                  >
                    {correct ? '✓' : '✗'}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex gap-3 mt-6 px-4">
          <Button
            className="flex-1 h-12 rounded-xl text-sm font-bold shadow-md bg-slate-900 text-white"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-12 rounded-xl text-sm font-bold shadow-sm border-slate-200"
            onClick={handleDownloadImage}
          >
            <Download className="w-4 h-4 mr-2" /> Save
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-12 rounded-xl text-sm font-bold shadow-sm border-slate-200"
            onClick={() => window.location.reload()}
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Again
          </Button>
        </div>

        {/* Review Mistakes */}
        {missedQuestions.length > 0 && (
          <div className="w-full mt-6 px-4">
            <button
              className="w-full flex items-center justify-between text-sm font-bold text-slate-600 py-3 px-4 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
              onClick={() => setShowReview(v => !v)}
            >
              <span>Review {missedQuestions.length} Missed Question{missedQuestions.length > 1 ? 's' : ''}</span>
              {showReview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {showReview && (
              <div className="mt-3 space-y-4">
                {missedQuestions.map((q, i) => (
                  <div key={q.id} className="bg-white border border-slate-200 rounded-xl p-4 text-left shadow-sm">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Missed #{i + 1}</p>
                    <p className="text-sm font-semibold text-slate-800 mb-2">{q.questionText}</p>
                    <p className="text-sm text-green-700 font-medium mb-1">
                      ✓ {q.options[q.correctAnswerIndex]}
                    </p>
                    {q.explanation && (
                      <p className="text-xs text-slate-500 mt-2 border-t border-slate-100 pt-2">{q.explanation}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: PLAYING SCREEN
  // --------------------------------------------------------------------------
  const currentQuestion = activeQuestions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-2xl mx-auto font-sans">
      {/* Header Stats */}
      <div className="w-full flex justify-between items-center mb-8">
        <Badge variant="outline" className="text-sm px-3 py-1 bg-white shadow-sm border-slate-200 text-slate-700">
          Question {currentIndex + 1} / 10
        </Badge>
        <div className="flex items-center gap-2 font-bold text-lg font-heading text-slate-900">
          <Trophy className="w-5 h-5 text-yellow-500" /> {score}
        </div>
      </div>

      {/* Main Question Card */}
      <Card className="w-full shadow-xl border-slate-200 relative overflow-hidden bg-white rounded-2xl">
        {/* Timer Bar */}
        <Progress 
          value={(timeLeft / 5) * 100} 
          className={`h-2 rounded-none absolute top-0 left-0 right-0 ${timeLeft <= 2 ? 'bg-red-100 [&>div]:bg-red-500' : 'bg-slate-100 [&>div]:bg-slate-900'}`} 
        />
        
        <CardHeader className="pt-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold text-slate-400 tracking-wider uppercase font-sans">{title}</h2>
            <div className={`flex items-center gap-1 font-bold ${timeLeft <= 2 ? 'text-red-500 animate-pulse' : 'text-slate-500'}`}>
              <Clock className="w-4 h-4" /> {timeLeft}s
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-heading leading-tight text-slate-900">
            {currentQuestion.questionText}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3 mt-4">
          {currentQuestion.options.map((option, index) => {
            let buttonStateClass = "bg-white hover:bg-slate-50 border-slate-200 text-slate-700";
            
            if (isAnswering) {
              if (index === currentQuestion.correctAnswerIndex) {
                buttonStateClass = "bg-green-50 border-green-500 text-green-900 hover:bg-green-50";
              } else if (index === selectedAnswer) {
                buttonStateClass = "bg-red-50 border-red-500 text-red-900 hover:bg-red-50";
              } else {
                buttonStateClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50"; // Dim others
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={`w-full justify-start h-auto min-h-14 py-4 md:py-5 text-left px-6 text-base whitespace-normal shadow-sm transition-all font-sans rounded-xl ${buttonStateClass}`}
                onClick={() => handleAnswer(index)}
                disabled={isAnswering}
              >
                {option}
              </Button>
            );
          })}
        </CardContent>

        {/* Explanation Toast and Next Button */}
        {isAnswering && (
          <div className="px-6 pb-6 pt-2 animate-in fade-in slide-in-from-bottom-2 space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 font-sans leading-relaxed">{currentQuestion.explanation}</p>
            </div>
            
            <Button 
              className="w-full h-14 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-sans font-bold text-lg shadow-md flex items-center justify-center gap-2"
              onClick={handleNextQuestion}
            >
              {currentIndex === activeQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
