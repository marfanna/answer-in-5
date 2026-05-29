'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { collection, query, where, getDocs, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { SUB_CATEGORIES, QUESTIONS, Question } from '@/lib/mockData';
import { Sword, Users, ShieldAlert, LogIn, ArrowRight, Zap, Target } from 'lucide-react';

// Short code generator (e.g. B8A3)
function generateRoomCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function BattleLobby() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [selectedNiche, setSelectedNiche] = useState(SUB_CATEGORIES[0]?.id || '');
  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in", error);
      setErrorMsg("Failed to sign in. Please try again.");
    }
  };

  const handleCreateRoom = async () => {
    if (!user) return;
    setIsCreating(true);
    setErrorMsg('');

    try {
      const roomCode = generateRoomCode();
      
      // Get all questions matching selected subcategory
      const pool = QUESTIONS.filter(q => q.subCategoryId === selectedNiche);
      
      if (pool.length < 5) {
        setErrorMsg("Not enough questions in this category to start a battle.");
        setIsCreating(false);
        return;
      }

      // Shuffled set of 10 questions for this battle
      const selectedQuestions = shuffleArray(pool).slice(0, 10).map((q, idx) => ({
        questionText: q.questionText,
        options: q.options,
        correctAnswerIndex: q.correctAnswerIndex,
        explanation: q.explanation,
        timeLimitSeconds: q.timeLimitSeconds || 5,
      }));

      const nicheObj = SUB_CATEGORIES.find(s => s.id === selectedNiche);

      const battleData = {
        roomId: roomCode,
        status: 'waiting',
        nicheId: nicheObj?.slug || 'unknown',
        nicheName: nicheObj?.name || 'Pop Culture',
        hostId: user.uid,
        hostName: user.displayName || 'Player 1',
        hostPhoto: user.photoURL || '',
        guestId: null,
        guestName: null,
        guestPhoto: null,
        questions: selectedQuestions,
        hostScore: 0,
        guestScore: 0,
        hostProgress: 0,
        guestProgress: 0,
        hostFinished: false,
        guestFinished: false,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, 'battles'), battleData);
      router.push(`/battle/${roomCode}`);
    } catch (err) {
      console.error("Error creating battle room", err);
      setErrorMsg("Failed to create battle room. Try again.");
      setIsCreating(false);
    }
  };

  const handleJoinRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !roomCodeInput.trim()) return;
    setIsJoining(true);
    setErrorMsg('');

    try {
      const uppercaseCode = roomCodeInput.trim().toUpperCase();
      
      // Query battles collection for this room code
      const q = query(
        collection(db, 'battles'), 
        where('roomId', '==', uppercaseCode),
        where('status', '==', 'waiting')
      );
      
      const snap = await getDocs(q);
      
      if (snap.empty) {
        setErrorMsg("Room not found or already in progress.");
        setIsJoining(false);
        return;
      }

      const roomDoc = snap.docs[0];
      const roomData = roomDoc.data();

      if (roomData.hostId === user.uid) {
        // Host is joining their own room, just redirect
        router.push(`/battle/${uppercaseCode}`);
        return;
      }

      // Join the room as guest and update status
      await updateDoc(doc(db, 'battles', roomDoc.id), {
        guestId: user.uid,
        guestName: user.displayName || 'Guest Player',
        guestPhoto: user.photoURL || '',
        status: 'starting' // Auto-start the battle when guest joins
      });

      router.push(`/battle/${uppercaseCode}`);
    } catch (err) {
      console.error("Error joining battle room", err);
      setErrorMsg("Failed to join battle room. Please try again.");
      setIsJoining(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        <p className="mt-4 text-slate-500 text-sm font-medium">Loading battle arena...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 max-w-md w-full mx-auto p-6 flex flex-col justify-center space-y-8 bg-white text-slate-900">
      
      <div className="text-center space-y-3">
        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl w-fit mx-auto shadow-sm">
          <Sword className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-heading font-bold tracking-tight text-slate-900">
          Live 1v1 Battle
        </h1>
        <p className="text-sm text-slate-500 font-sans max-w-xs mx-auto">
          Challenge your friend in a synchronized, real-time rapid-fire trivia showdown.
        </p>
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <p className="font-medium font-sans">{errorMsg}</p>
        </div>
      )}

      {!user ? (
        <Card className="border border-slate-100 shadow-sm rounded-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg font-heading text-slate-900">Sign In Required</CardTitle>
            <CardDescription className="text-xs text-slate-400">
              You must sign in to create or join multiplayer battles.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Button
              onClick={handleLogin}
              className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 h-11 shadow-sm font-sans"
            >
              <LogIn className="w-4 h-4" /> Sign in with Google
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Join Room Card */}
          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-heading flex items-center gap-2 text-slate-900">
                <Users className="w-4.5 h-4.5 text-indigo-500" /> Join Battle Room
              </CardTitle>
              <CardDescription className="text-xs text-slate-400">
                Enter your friend's 4-character room code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJoinRoom} className="flex gap-2">
                <input
                  type="text"
                  maxLength={4}
                  placeholder="CODE"
                  value={roomCodeInput}
                  onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                  className="w-full rounded-xl border border-slate-200 uppercase tracking-widest text-center text-lg font-bold h-11 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans text-slate-800"
                  disabled={isJoining || isCreating}
                />
                <Button
                  type="submit"
                  disabled={isJoining || isCreating || !roomCodeInput.trim()}
                  className="rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 font-sans h-11 px-5"
                >
                  {isJoining ? "Joining..." : "Join"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink mx-4 text-xs font-semibold text-slate-300 uppercase tracking-wider font-sans">Or Create A New Room</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          {/* Create Room Card */}
          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-heading flex items-center gap-2 text-slate-900">
                <Zap className="w-4.5 h-4.5 text-amber-500" /> Host a Battle
              </CardTitle>
              <CardDescription className="text-xs text-slate-400">
                Select a niche and create a room code for your friend.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-sans">
                  Choose Niche
                </label>
                <select
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium font-sans text-slate-800 shadow-sm"
                  disabled={isCreating || isJoining}
                >
                  {SUB_CATEGORIES.map((niche) => (
                    <option key={niche.id} value={niche.id}>
                      {niche.name}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                onClick={handleCreateRoom}
                disabled={isCreating || isJoining}
                className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 h-11 shadow-sm font-sans"
              >
                {isCreating ? "Creating Room..." : "Create Battle Room"}
                {!isCreating && <ArrowRight className="w-4 h-4" />}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
