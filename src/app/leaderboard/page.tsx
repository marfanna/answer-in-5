'use client';

import { useEffect, useState, useMemo } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Trophy, Award, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type ScoreEntry = {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  nicheId: string;
  score: number;
  correctCount: number;
  timestamp: any;
};

export default function LeaderboardPage() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNiche, setSelectedNiche] = useState<string>('All Niches');

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scoresRef = collection(db, 'scores');
        const q = query(scoresRef, orderBy('score', 'desc'), limit(100));
        const querySnapshot = await getDocs(q);

        const fetchedScores: ScoreEntry[] = [];
        querySnapshot.forEach((doc) => {
          fetchedScores.push({ id: doc.id, ...doc.data() } as ScoreEntry);
        });

        if (fetchedScores.length === 0) {
          const mockData: ScoreEntry[] = [
            { id: '1',  userId: 'u1', userName: 'Sarah Jenkins', userPhoto: '', nicheId: 'Pop Culture Mix', score: 1450, correctCount: 10, timestamp: null },
            { id: '2',  userId: 'u2', userName: 'Alex Chen',     userPhoto: '', nicheId: 'BTS',             score: 1420, correctCount: 10, timestamp: null },
            { id: '3',  userId: 'u3', userName: 'Maria Garcia',  userPhoto: '', nicheId: 'Taylor Swift',    score: 1380, correctCount: 9,  timestamp: null },
            { id: '4',  userId: 'u1', userName: 'Sarah Jenkins', userPhoto: '', nicheId: 'Taylor Swift',    score: 1250, correctCount: 9,  timestamp: null },
            { id: '10', userId: 'u1', userName: 'Sarah Jenkins', userPhoto: '', nicheId: 'Drake',           score: 1200, correctCount: 8,  timestamp: null },
            { id: '11', userId: 'u1', userName: 'Sarah Jenkins', userPhoto: '', nicheId: 'Lady Gaga',       score: 1100, correctCount: 8,  timestamp: null },
            { id: '12', userId: 'u1', userName: 'Sarah Jenkins', userPhoto: '', nicheId: 'Dua Lipa',        score: 1300, correctCount: 9,  timestamp: null },
            { id: '13', userId: 'u1', userName: 'Sarah Jenkins', userPhoto: '', nicheId: 'Akon',            score: 1400, correctCount: 10, timestamp: null },
            { id: '5',  userId: 'u4', userName: 'David Kim',     userPhoto: '', nicheId: 'Pop Culture Mix', score: 1100, correctCount: 8,  timestamp: null },
            { id: '6',  userId: 'u2', userName: 'Alex Chen',     userPhoto: '', nicheId: 'BTS',             score: 1400, correctCount: 10, timestamp: null },
          ];
          setScores(mockData);
        } else {
          setScores(fetchedScores);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, []);

  const processedScores = useMemo(() => {
    if (selectedNiche !== 'All Niches') {
      const filtered = scores.filter(s => s.nicheId === selectedNiche);
      const seenUsers = new Set<string>();
      return filtered.filter(s => {
        if (seenUsers.has(s.userId)) return false;
        seenUsers.add(s.userId);
        return true;
      }).map(s => ({ ...s, niches: [s.nicheId] }));
    }

    const userMaxScores = new Map<string, Map<string, ScoreEntry>>();
    scores.forEach(s => {
      if (!userMaxScores.has(s.userId)) userMaxScores.set(s.userId, new Map());
      const userNiches = userMaxScores.get(s.userId)!;
      const currentMax = userNiches.get(s.nicheId);
      if (!currentMax || s.score > currentMax.score) userNiches.set(s.nicheId, s);
    });

    const aggregated: (ScoreEntry & { niches: string[] })[] = [];
    userMaxScores.forEach((nicheMap, userId) => {
      let totalScore = 0;
      let totalCorrect = 0;
      const nichesPlayed: string[] = [];
      let userName = '';
      let userPhoto = '';

      nicheMap.forEach((entry, nicheId) => {
        totalScore += entry.score;
        totalCorrect += entry.correctCount;
        nichesPlayed.push(nicheId);
        userName = entry.userName;
        userPhoto = entry.userPhoto;
      });

      aggregated.push({
        id: userId,
        userId,
        userName,
        userPhoto,
        nicheId: 'Multiple',
        score: totalScore,
        correctCount: totalCorrect,
        timestamp: null,
        niches: nichesPlayed,
      });
    });

    return aggregated.sort((a, b) => b.score - a.score);
  }, [scores, selectedNiche]);

  const uniqueNiches = useMemo(() => {
    const niches = new Set(scores.map(s => s.nicheId));
    return ['All Niches', ...Array.from(niches)];
  }, [scores]);

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (index === 1) return <Award className="w-5 h-5 text-slate-400" />;
    if (index === 2) return <Award className="w-5 h-5 text-amber-700" />;
    return <span className="text-sm font-bold text-slate-400 w-5 text-center">{index + 1}</span>;
  };

  const getRowClass = (index: number) => {
    if (index === 0) return 'bg-amber-50 hover:bg-amber-50';
    return 'hover:bg-slate-50 transition-colors';
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">

        {/* Header */}
        <div className="text-center space-y-3 pt-8 pb-4">
          <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-100 uppercase tracking-widest text-xs font-bold border-slate-200">
            Global Rankings
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tight">
            Hall of Fame
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            See the best players. Global board combines your top scores across all niches.
          </p>
        </div>

        {/* Filter row — anchored above the table with player count context */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400 font-medium">
            {isLoading ? '' : `${processedScores.length} player${processedScores.length !== 1 ? 's' : ''}`}
          </p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="w-4 h-4 text-slate-400" />
            </div>
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="pl-9 pr-8 py-2 w-full md:w-56 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 appearance-none"
            >
              {uniqueNiches.map(niche => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <Card className="shadow-lg border-slate-200 overflow-hidden bg-white">
          <CardHeader className="bg-slate-900 text-white p-4 py-3">
            <div className="grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[56px_1fr_auto_100px] gap-4 items-center text-xs font-bold tracking-widest uppercase opacity-60 px-2">
              <div className="text-center">Rank</div>
              <div>Player</div>
              <div className="text-right md:text-left">Niches</div>
              <div className="text-right hidden md:block">Score</div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center p-12 text-slate-400">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mb-4"></div>
                Loading scores...
              </div>
            ) : processedScores.length === 0 ? (
              <div className="text-center p-12 text-slate-500">
                No scores yet for this niche. Be the first!
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {processedScores.map((entry, index) => (
                  <div
                    key={entry.id}
                    className={`grid grid-cols-[40px_1fr_auto] md:grid-cols-[56px_1fr_auto_100px] gap-4 items-center p-4 px-6 ${getRowClass(index)}`}
                  >
                    {/* Rank */}
                    <div className="flex justify-center">
                      {getRankIcon(index)}
                    </div>

                    {/* Player */}
                    <div className="flex items-center gap-3">
                      <img
                        src={entry.userPhoto || `https://ui-avatars.com/api/?name=${entry.userName}&background=e2e8f0&color=475569&bold=true`}
                        alt={entry.userName}
                        className="w-10 h-10 rounded-full shadow-sm border border-slate-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className={`font-bold truncate ${index === 0 ? 'text-slate-900' : 'text-slate-800'}`}>
                          {entry.userName}
                        </p>
                        <p className="text-xs text-slate-400 md:hidden">{entry.score.toLocaleString()} pts</p>
                      </div>
                    </div>

                    {/* Niches */}
                    <div
                      className="flex flex-nowrap items-center justify-end md:justify-start gap-1"
                      title={entry.niches.join(', ')}
                    >
                      {entry.niches.slice(0, 2).map(niche => (
                        <Badge
                          key={niche}
                          variant="secondary"
                          className="bg-slate-100 text-slate-500 font-medium text-[10px] sm:text-xs truncate max-w-[80px] sm:max-w-[120px] whitespace-nowrap"
                        >
                          {niche}
                        </Badge>
                      ))}
                      {entry.niches.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="bg-slate-200 text-slate-500 font-medium text-[10px] sm:text-xs shrink-0 whitespace-nowrap cursor-help"
                          title={entry.niches.slice(2).join(', ')}
                        >
                          +{entry.niches.length - 2}
                        </Badge>
                      )}
                    </div>

                    {/* Score */}
                    <div className="text-right hidden md:block">
                      <span className={`font-heading font-black text-xl ${index === 0 ? 'text-amber-600' : 'text-slate-900'}`}>
                        {entry.score.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
