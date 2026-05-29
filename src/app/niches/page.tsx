'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Music, Film, Gamepad2, Book, Star } from 'lucide-react';
import { QUESTIONS } from '@/lib/mockData';

const NICHE_TITLES: Record<string, string> = {
  subcat_tswift:  'Taylor Swift',
  subcat_bts:     'BTS',
  cat_pop_culture:'Pop Culture Mix',
};

const extractNiches = () => {
  const nicheMap = new Map<string, { id: string; title: string; count: number }>();

  QUESTIONS.forEach(q => {
    const nicheId = q.subCategoryId || q.categoryId;
    const raw = nicheId.replace(/_/g, ' ').replace(/-/g, ' ');
    const title = NICHE_TITLES[nicheId] ??
      raw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    if (!nicheMap.has(nicheId)) {
      nicheMap.set(nicheId, { id: nicheId, title, count: 0 });
    }
    nicheMap.get(nicheId)!.count += 1;
  });

  return Array.from(nicheMap.values());
};

const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('music') || t.includes('swift') || t.includes('bts') || t.includes('artist')) return Music;
  if (t.includes('movie') || t.includes('film') || t.includes('tv')) return Film;
  if (t.includes('game') || t.includes('gaming')) return Gamepad2;
  if (t.includes('book') || t.includes('lore')) return Book;
  return Star;
};

export default function NichesDirectory() {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const allNiches = useMemo(() => extractNiches(), []);

  const filteredNiches = useMemo(() => {
    if (!searchQuery.trim()) return allNiches;
    const q = searchQuery.toLowerCase();
    return allNiches.filter(n =>
      n.title.toLowerCase().includes(q) || n.id.toLowerCase().includes(q)
    );
  }, [allNiches, searchQuery]);

  const handleSearch = () => setSearchQuery(inputValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleClear = () => {
    setInputValue('');
    setSearchQuery('');
  };

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

          {/* Search bar + button */}
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
            <Button
              variant="outline"
              className="mt-5 rounded-xl font-bold border-slate-200"
              onClick={handleClear}
            >
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNiches.map((niche) => {
              const Icon = getIcon(niche.title);
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
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-500 text-xs font-mono border-none"
                      >
                        {niche.count} Qs
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-heading text-slate-900 leading-tight">
                      {niche.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Link href={`/quiz/${niche.id}`} className="w-full block">
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
