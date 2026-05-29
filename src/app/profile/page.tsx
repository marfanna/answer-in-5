'use client';

import { useEffect, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Activity, Target, Trophy, Clock, Star, Edit2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ScoreEntry = {
  id: string;
  nicheId: string;
  score: number;
  correctCount: number;
  timestamp: any;
};

export default function ProfilePage() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  // Edit Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editPhoto, setEditPhoto] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setEditName(user.displayName || '');
        setEditPhoto(user.photoURL || '');
        fetchUserScores(user.uid);
      } else {
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserScores = async (uid: string) => {
    try {
      const scoresRef = collection(db, 'scores');
      const q = query(scoresRef, where('userId', '==', uid));
      const querySnapshot = await getDocs(q);

      const fetchedScores: ScoreEntry[] = [];
      querySnapshot.forEach((doc) => {
        fetchedScores.push({ id: doc.id, ...doc.data() } as ScoreEntry);
      });

      fetchedScores.sort((a, b) => {
        const timeA = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
        const timeB = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
        return timeB - timeA;
      });

      setScores(fetchedScores);
    } catch (error) {
      console.error("Error fetching user scores:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!currentUser) return;
    setIsSaving(true);
    try {
      await updateProfile(currentUser, {
        displayName: editName,
        photoURL: editPhoto
      });
      // Force a refresh of the user state
      setCurrentUser({ ...currentUser }); 
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Use FileReader and Canvas to resize and compress the image to a small Base64 string
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 200; // Small size for avatars
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions keeping aspect ratio
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        // Compress to JPEG to keep the string size very small (good for Firebase Auth)
        const base64String = canvas.toDataURL('image/jpeg', 0.8);
        setEditPhoto(base64String);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mb-4"></div>
        Loading Profile...
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <User className="w-16 h-16 text-slate-200 mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">You are not logged in</h1>
        <p className="text-slate-500 mb-6 text-center">Log in with Google in the top right corner to view your profile and stats.</p>
        <Link href="/">
          <Button variant="outline" className="font-bold border-slate-200 rounded-xl h-12 px-6">
            Go Home
          </Button>
        </Link>
      </div>
    );
  }

  // --- CALCULATE LIFETIME STATS ---
  const totalXP = scores.reduce((sum, s) => sum + s.score, 0);
  const totalCorrect = scores.reduce((sum, s) => sum + s.correctCount, 0);
  const quizzesPlayed = scores.length;
  const accuracy = quizzesPlayed > 0 ? Math.round((totalCorrect / (quizzesPlayed * 10)) * 100) : 0;
  const hasData = quizzesPlayed > 0;
  
  // Calculate best niche
  const nicheScores = new Map<string, number>();
  scores.forEach(s => {
    nicheScores.set(s.nicheId, (nicheScores.get(s.nicheId) || 0) + s.score);
  });
  let bestNiche = 'None yet';
  let bestNicheScore = -1;
  nicheScores.forEach((score, nicheId) => {
    if (score > bestNicheScore) {
      bestNicheScore = score;
      bestNiche = nicheId;
    }
  });

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pt-8 pb-4">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative group">
              <img 
                src={isEditing ? editPhoto : (currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}&background=e2e8f0&color=475569&bold=true`)} 
                alt="Profile Avatar" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl bg-white object-cover"
              />
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="absolute bottom-0 right-0 bg-slate-900 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="flex-1 w-full max-w-sm">
              {isEditing ? (
                <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Display Name</label>
                    <input 
                      value={editName} 
                      onChange={(e) => setEditName(e.target.value)}
                      className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 mt-1 font-bold text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Profile Picture</label>
                    <div className="mt-1 relative">
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="flex w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-900 hover:file:bg-slate-100 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" onClick={handleSaveProfile} disabled={isSaving} className="bg-slate-900 text-white">
                      {isSaving ? 'Saving...' : <><Check className="w-4 h-4 mr-1" /> Save</>}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setIsEditing(false)} disabled={isSaving}>
                      <X className="w-4 h-4 mr-1" /> Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight">
                      {currentUser.displayName}
                    </h1>
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="text-slate-400 hover:text-slate-900 transition-colors hidden md:block"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-slate-500 mt-1 font-medium flex items-center gap-2">
                    Member since {currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).getFullYear() : '2026'}
                  </p>
                </>
              )}
            </div>
          </div>
          
          {!isEditing && (
            <Link href="/">
              <Button variant="outline" className="font-bold rounded-xl bg-white shadow-sm border-slate-200">
                Play More Quizzes
              </Button>
            </Link>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Trophy,   label: 'Total XP',       value: hasData ? totalXP.toLocaleString() : '—' },
            { icon: Activity, label: 'Quizzes Played',  value: hasData ? quizzesPlayed.toString()  : '—' },
            { icon: Target,   label: 'Avg Accuracy',    value: hasData ? `${accuracy}%`            : '—' },
            { icon: Star,     label: 'Best Niche',      value: bestNiche, small: true },
          ].map(({ icon: Icon, label, value, small }) => (
            <Card key={label} className="shadow-sm border-slate-100 bg-white">
              <CardContent className="p-5">
                <Icon className="w-5 h-5 text-slate-400 mb-3" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                <p
                  className={`font-black font-heading text-slate-900 mt-1 truncate ${small ? 'text-xl' : 'text-3xl'} ${!hasData ? 'text-slate-300' : ''}`}
                  title={value}
                >
                  {value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Games */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-base font-bold text-slate-500 uppercase tracking-wider">Recent Games</h2>
          </div>

          <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
            <CardContent className="p-0">
              {scores.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 gap-4 text-center">
                  <p className="text-slate-400 text-sm">No games yet. Play a quiz to see your history.</p>
                  <Link href="/">
                    <Button className="bg-slate-900 text-white rounded-xl h-10 px-6 font-bold hover:bg-slate-800">
                      Play a Quiz
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {scores.map((entry) => {
                    const date = entry.timestamp?.toMillis ? new Date(entry.timestamp.toMillis()) : new Date();
                    return (
                      <div
                        key={entry.id}
                        className="grid grid-cols-[1fr_auto] md:grid-cols-[200px_1fr_auto] gap-4 items-center p-4 px-6 hover:bg-slate-50 transition-colors"
                      >
                        <div className="hidden md:flex items-center gap-2 text-slate-400 text-sm font-medium">
                          <Clock className="w-4 h-4" />
                          {date.toLocaleDateString()} at {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>

                        <div>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-medium">
                            {entry.nicheId}
                          </Badge>
                          <div className="md:hidden mt-1 text-xs text-slate-400">
                            {date.toLocaleDateString()}
                          </div>
                        </div>

                        <div className="text-right flex items-center gap-3 justify-end">
                          <span className="text-sm font-medium text-slate-400">{entry.correctCount}/10 correct</span>
                          <span className="font-heading font-black text-xl text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                            {entry.score} pts
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
