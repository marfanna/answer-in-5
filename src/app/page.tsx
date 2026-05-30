import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Music, Film, Gamepad2, Code, BookOpen,
  Trophy, FlaskConical, UtensilsCrossed, Star, Zap, type LucideIcon,
} from 'lucide-react';
import { SUB_CATEGORIES, type NicheIcon } from '@/lib/mockData';
import TrendingNiches from '@/components/TrendingNiches';

const ICON_MAP: Record<NicheIcon, LucideIcon> = {
  music:    Music,
  film:     Film,
  gaming:   Gamepad2,
  code:     Code,
  religion: BookOpen,
  sport:    Trophy,
  science:  FlaskConical,
  food:     UtensilsCrossed,
  general:  Star,
  book:     BookOpen,
};

// First 3 niches in SUB_CATEGORIES appear on homepage.
// Reorder SUB_CATEGORIES in mockData.ts to control which show here.
const FEATURED = SUB_CATEGORIES.slice(0, 3);

export default function Home() {
  return (
    <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10 space-y-12 bg-white text-slate-900">

      {/* Hero */}
      <section className="text-center space-y-6 py-12 md:py-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <Badge variant="outline" className="px-4 py-1 text-sm bg-slate-50 border-slate-200 text-slate-600 rounded-full shadow-sm">
          The ultimate test of fandom
        </Badge>
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-slate-900">
          Prove you belong.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-sans">
          Choose your niche. Answer 5-second rapid-fire questions. Earn badges and climb the global leaderboards.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full max-w-md mx-auto sm:max-w-none">
          <Link href="/niches" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-12 shadow-md bg-slate-900 text-white hover:bg-slate-800 font-sans">
              Start a Quiz
            </Button>
          </Link>
          <Link href="/battle" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-12 shadow-md bg-indigo-600 hover:bg-indigo-700 text-white font-sans flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" /> 1v1 Battle
            </Button>
          </Link>
          <Link href="/leaderboard" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-12 border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm font-sans">
              View Leaderboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Trending Niches */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-bold text-slate-900">
            Trending Niches
          </h2>
          <Link href="/niches" className="hidden sm:block text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors">
            View all &rarr;
          </Link>
        </div>

        <TrendingNiches fallback={FEATURED} />

        <div className="sm:hidden text-center pt-2">
          <Link href="/niches" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            View all niches &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}
