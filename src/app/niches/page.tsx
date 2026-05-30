'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search, Music, Film, Gamepad2, Code, BookOpen,
  Trophy, FlaskConical, UtensilsCrossed, Star,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { QUESTIONS, CATEGORIES, SUB_CATEGORIES, type NicheIcon } from '@/lib/mockData';

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

// Build grouped sections — only categories that have subcategories
const buildSections = () => {
  const counts = new Map<string, number>();
  QUESTIONS.forEach(q => {
    const id = q.subCategoryId || q.categoryId;
    counts.set(id, (counts.get(id) || 0) + 1);
    counts.set(q.categoryId, (counts.get(q.categoryId) || 0) + 1);
  });

  return CATEGORIES
    .filter(cat => cat.id !== 'cat_mixed')
    .map(cat => ({
      category: cat,
      totalCount: counts.get(cat.id) || 0,
      niches: SUB_CATEGORIES
        .filter(sc => sc.categoryId === cat.id)
        .map(sc => ({ ...sc, count: counts.get(sc.id) || 0 })),
    }))
    .filter(s => s.niches.length > 0);
};

const ultimateMix = CATEGORIES.find(c => c.id === 'cat_mixed')!;

export default function NichesDirectory() {
  const [inputValue, setInputValue]   = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = useMemo(() => buildSections(), []);

  // Flat list for search results
  const allNiches = useMemo(() =>
    SUB_CATEGORIES.map(sc => ({
      ...sc,
      categoryName: CATEGORIES.find(c => c.id === sc.categoryId)?.name ?? '',
    })),
  []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allNiches.filter(n =>
      n.name.toLowerCase().includes(q) ||
      n.categoryName.toLowerCase().includes(q) ||
      n.slug.toLowerCase().includes(q)
    );
  }, [allNiches, searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  const handleSearch  = () => setSearchQuery(inputValue);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };
  const handleClear = () => { setInputValue(''); setSearchQuery(''); };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto w-full space-y-10">

        {/* Header */}
        <div className="text-center space-y-4 pt-8 pb-2">
          <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-100 uppercase tracking-widest text-xs font-bold border-slate-200">
            Directory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tight">
            Explore All Niches
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Browse by category or search for a specific niche.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto pt-4 flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search artist, category, genre..."
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

        {/* ── SEARCH RESULTS ── */}
        {isSearching ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              <button onClick={handleClear} className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">
                Clear
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-16 text-center bg-white border border-slate-100 rounded-3xl shadow-sm">
                <Search className="w-10 h-10 text-slate-200 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">No results</h3>
                <p className="text-slate-400 text-sm">Nothing matched "{searchQuery}".</p>
                <Button variant="outline" className="mt-5 rounded-xl font-bold border-slate-200" onClick={handleClear}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map(niche => {
                  const Icon = ICON_MAP[niche.icon];
                  return (
                    <NicheCard key={niche.id} niche={niche} Icon={Icon} categoryLabel={niche.categoryName} />
                  );
                })}
              </div>
            )}
          </div>

        ) : (
          /* ── GROUPED SECTIONS ── */
          <div className="space-y-12">

            {sections.map(({ category, niches, totalCount }) => {
              const CatIcon = ICON_MAP[category.icon];
              return (
                <section key={category.id} id={category.slug} className="space-y-4 scroll-mt-24">
                  {/* Category header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-xl">
                        <CatIcon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-heading font-bold text-slate-900">{category.name}</h2>
                        <p className="text-xs text-slate-400">{niches.length} niche{niches.length !== 1 ? 's' : ''} · {totalCount.toLocaleString()} questions</p>
                      </div>
                    </div>
                    <Link href={`/quiz/${category.slug}`}>
                      <Button
                        variant="outline"
                        className="rounded-xl text-sm font-bold border-slate-200 hover:bg-slate-900 hover:text-white transition-colors"
                      >
                        Play All <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Niche cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {niches.map(niche => {
                      const Icon = ICON_MAP[niche.icon];
                      return <NicheCard key={niche.id} niche={niche} Icon={Icon} />;
                    })}
                  </div>
                </section>
              );
            })}

            {/* Ultimate Mix — always at the bottom */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-xl">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-heading font-bold text-slate-900">{ultimateMix.name}</h2>
                  <p className="text-xs text-slate-400">{QUESTIONS.length.toLocaleString()} questions across all niches</p>
                </div>
              </div>
              <Link href={`/quiz/${ultimateMix.slug}`}>
                <div className="bg-slate-900 text-white rounded-2xl p-6 flex items-center justify-between group hover:bg-slate-800 transition-colors cursor-pointer">
                  <div>
                    <p className="font-heading font-bold text-lg">{ultimateMix.description}</p>
                    <p className="text-slate-400 text-sm mt-1">All categories · All niches · Randomised</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0 ml-4" />
                </div>
              </Link>
            </section>

          </div>
        )}
      </div>
    </div>
  );
}

function NicheCard({
  niche,
  Icon,
  categoryLabel,
}: {
  niche: { slug: string; name: string; description: string };
  Icon: LucideIcon;
  categoryLabel?: string;
}) {
  return (
    <Card className="bg-white border border-slate-100 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md rounded-2xl flex flex-col group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-slate-100 rounded-xl">
            <Icon className="w-5 h-5 text-slate-600" />
          </div>
          {categoryLabel && (
            <Badge variant="secondary" className="bg-slate-100 text-slate-400 text-xs border-none font-medium">
              {categoryLabel}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg font-heading text-slate-900 leading-tight">
          {niche.name}
        </CardTitle>
        <p className="text-xs text-slate-400 mt-1">{niche.description}</p>
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
}
