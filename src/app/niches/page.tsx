'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search, Music, Film, Gamepad2, Code, BookOpen,
  Trophy, FlaskConical, UtensilsCrossed, Star, type LucideIcon,
} from 'lucide-react';
import { QUESTIONS, SUB_CATEGORIES, type NicheIcon } from '@/lib/mockData';

// ─── Icon map — one entry per NicheIcon value ─────────────────────────────────
// To add a new icon type: add it to NicheIcon in mockData.ts, then add it here.
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
};

// Build niche list from SUB_CATEGORIES (source of truth) + question counts
const buildNiches = () => {
  const counts = new Map<string, number>();
  QUESTIONS.forEach(q => {
    const id = q.subCategoryId || q.categoryId;
    counts.set(id, (counts.get(id) || 0) + 1);
  });

  return SUB_CATEGORIES.map(sc => ({
    id:    sc.id,
    slug:  sc.slug,
    title: sc.name,
    icon:  sc.icon,
    count: counts.get(sc.id) || 0,
  }));
};

export default function NichesDirectory() {
  const [inputValue, setInputValue]   = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const allNiches = useMemo(() => buildNiches(), []);

  const filteredNiches = useMemo(() => {
    if (!searchQuery.trim()) return allNiches;
    const q = searchQuery.toLowerCase();
    return allNiches.filter(n =>
      n.title.toLowerCase().includes(q) || n.slug.toLowerCase().includes(q)
    );
  }, [allNiches, searchQuery]);

  const handleSearch  = () => setSearchQuery(inputValue);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };
  const handleClear = () => { setInputValue(''); setSearchQuery(''); };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4 pt-8 pb-4">
          <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-100 uppercase tracking-widest text-xs font-bold border-slate-200">
            Directory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tight">
            Explore All Niches
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Find your niche and prove you're the ultimate fan.
          </p>

          <div className="max-w-2xl mx-auto pt-4 flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search artist, movie, game, or category..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-base font-medium text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="h-auto px-6 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 font-bold shadow-sm"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between px-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {searchQuery
              ? `${filteredNiches.length} result${filteredNiches.length !== 1 ? 's' : ''} for "${searchQuery}"`
              : `${filteredNiches.length} niche${filteredNiches.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Grid */}
        {filteredNiches.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 text-center bg-white border border-slate-100 rounded-3xl shadow-sm">
            <Search className="w-10 h-10 text-slate-200 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No results</h3>
            <p className="text-slate-400 text-sm max-w-sm">
              Nothing matched "{searchQuery}". Try a different term.
            </p>
            <Button variant="outline" className="mt-5 rounded-xl font-bold border-slate-200" onClick={handleClear}>
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNiches.map((niche) => {
              const Icon = ICON_MAP[niche.icon];
              return (
                <Card
                  key={niche.id}
                  className="bg-white border border-slate-100 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md overflow-hidden group rounded-2xl flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-slate-100 rounded-xl">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading text-slate-900 leading-tight">
                      {niche.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Link href={`/quiz/${niche.slug}`} className="w-full block">
                      <Button
                        className="w-full rounded-xl font-bold bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-900 hover:text-white transition-colors"
                        variant="outline"
                      >
                        Play Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
