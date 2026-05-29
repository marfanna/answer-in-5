'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Trophy, Star, TrendingUp, Music, Film, Gamepad2, Book } from 'lucide-react';
import { QUESTIONS } from '@/lib/mockData';

// We extract unique subcategories/categories from our database to build the directory dynamically.
// In a real production app with millions of questions, this would come from a 'niches' Firestore collection.
const extractNiches = () => {
  const nicheMap = new Map<string, { id: string, title: string, count: number }>();
  
  QUESTIONS.forEach(q => {
    // Prefer subCategoryId for specific niches, fallback to categoryId
    const nicheId = q.subCategoryId || q.categoryId; 
    
    // Format the ID into a readable title (e.g., 'subcat_tswift' -> 'Subcat Tswift', 'bts' -> 'Bts')
    let title = nicheId.replace(/_/g, ' ').replace(/-/g, ' ');
    // Quick cleanup for our specific mock data formatting
    if (nicheId === 'subcat_tswift') title = 'Taylor Swift';
    if (nicheId === 'cat_pop_culture') title = 'Pop Culture Mix';
    if (nicheId === 'bts') title = 'BTS Army Exam';
    
    // Title Case
    title = title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    if (!nicheMap.has(nicheId)) {
      nicheMap.set(nicheId, { id: nicheId, title, count: 0 });
    }
    nicheMap.get(nicheId)!.count += 1;
  });

  return Array.from(nicheMap.values());
};

const getIconForNiche = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('music') || lower.includes('swift') || lower.includes('bts')) return <Music className="w-5 h-5 text-purple-600" />;
  if (lower.includes('movie') || lower.includes('film') || lower.includes('tv')) return <Film className="w-5 h-5 text-blue-600" />;
  if (lower.includes('game')) return <Gamepad2 className="w-5 h-5 text-green-600" />;
  if (lower.includes('book') || lower.includes('lore')) return <Book className="w-5 h-5 text-amber-600" />;
  return <Star className="w-5 h-5 text-yellow-600" />;
};

export default function NichesDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const allNiches = useMemo(() => extractNiches(), []);

  const filteredNiches = useMemo(() => {
    if (!searchQuery.trim()) return allNiches;
    const query = searchQuery.toLowerCase();
    return allNiches.filter(niche => 
      niche.title.toLowerCase().includes(query) || 
      niche.id.toLowerCase().includes(query)
    );
  }, [allNiches, searchQuery]);

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        
        {/* Header & Search */}
        <div className="text-center space-y-6 pt-8 pb-4">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 uppercase tracking-widest text-xs font-bold border-blue-200">
            Directory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tight">
            Explore All Niches
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Search through our massive database of niche trivia categories. Find your obsession and prove you're the ultimate fan.
          </p>
          
          <div className="max-w-2xl mx-auto pt-4 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search for an artist, movie, game, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-base font-medium text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-sm font-bold text-slate-500 uppercase tracking-wider px-2">
          <span>{filteredNiches.length} {filteredNiches.length === 1 ? 'Category' : 'Categories'} Found</span>
        </div>

        {/* Niches Grid */}
        {filteredNiches.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 text-center bg-white border border-slate-100 rounded-3xl shadow-sm">
            <Search className="w-12 h-12 text-slate-200 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No niches found</h3>
            <p className="text-slate-500 max-w-md">
              We couldn't find any categories matching "{searchQuery}". Try a different search term!
            </p>
            <Button 
              variant="outline" 
              className="mt-6 rounded-xl font-bold"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNiches.map((niche) => (
              <Card key={niche.id} className="bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl overflow-hidden group rounded-2xl flex flex-col h-full">
                <CardHeader className="space-y-1 relative flex-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-slate-100 transition-colors" />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
                      {getIconForNiche(niche.title)}
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs font-mono border-none">
                      {niche.count} Questions
                    </Badge>
                  </div>
                  <CardTitle className="text-xl pt-4 font-heading text-slate-900 relative z-10 leading-tight">
                    {niche.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 mt-auto pt-4">
                  <Link href={`/quiz/${niche.id}`} className="w-full block">
                    <Button className="w-full rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 font-bold" variant="outline">
                      Play Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
