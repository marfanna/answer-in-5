'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Film, Gamepad2, Code, BookOpen, Trophy, FlaskConical, UtensilsCrossed, Star, Zap, type LucideIcon } from 'lucide-react';
import { SUB_CATEGORIES, type NicheIcon, type SubCategory } from '@/lib/mockData';

const ICON_MAP: Record<NicheIcon, LucideIcon> = {
  music: Music,
  film: Film,
  gaming: Gamepad2,
  code: Code,
  religion: BookOpen,
  sport: Trophy,
  science: FlaskConical,
  food: UtensilsCrossed,
  general: Star,
  book: BookOpen,
};

export default function TrendingNiches({ fallback }: { fallback: SubCategory[] }) {
  const [trending, setTrending] = useState<SubCategory[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const { db } = await import('@/lib/firebase');
        const { collection, query, orderBy, limit, getDocs } = await import('firebase/firestore');
        
        const q = query(collection(db, 'niche_stats'), orderBy('playCount', 'desc'), limit(50));
        const querySnapshot = await getDocs(q);
        
        const topSlugs: string[] = [];
        querySnapshot.forEach((doc) => {
          topSlugs.push(doc.id); // doc.id is the slug
        });

        if (topSlugs.length > 0) {
          // Map slugs back to SUB_CATEGORIES
          const matchedCategories = topSlugs
            .map(slug => SUB_CATEGORIES.find(s => s.slug === slug))
            .filter((c): c is SubCategory => c !== undefined);

          let finalTrending: SubCategory[] = [];
          const usedCategories = new Set<string>();
          
          // First pass: try to get diverse categories (1 per category)
          for (const niche of matchedCategories) {
             if (finalTrending.length >= 9) break;
             if (!usedCategories.has(niche.categoryId)) {
               finalTrending.push(niche);
               usedCategories.add(niche.categoryId);
             }
          }
          
          // Second pass: fill up to 9 with the remaining trending niches
          for (const niche of matchedCategories) {
             if (finalTrending.length >= 9) break;
             if (!finalTrending.find(f => f.id === niche.id)) {
               finalTrending.push(niche);
             }
          }

          // If we still didn't reach 9, pad with fallback
          if (finalTrending.length < 9) {
            const needed = 9 - finalTrending.length;
            const extra = fallback.filter(f => !finalTrending.some(t => t.id === f.id)).slice(0, needed);
            finalTrending = [...finalTrending, ...extra];
          }
          
          setTrending(finalTrending);
        }
      } catch (error) {
        console.error("Failed to fetch trending niches:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTrending();
  }, [fallback]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {trending.map((niche) => {
        const Icon = ICON_MAP[niche.icon] || Star;
        return (
          <Card
            key={niche.id}
            className={`bg-white border border-slate-100 hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md rounded-2xl flex flex-col group ${loading ? 'animate-pulse' : ''}`}
          >
            <CardHeader className="pb-3">
              <div className="mb-4 flex items-center justify-between">
                <div className="p-2 bg-slate-100 rounded-xl w-fit">
                  <Icon className="w-5 h-5 text-slate-600" />
                </div>
                {!loading && (
                   <div className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-full animate-in fade-in zoom-in duration-500">
                     <Zap className="w-3 h-3" /> Trending
                   </div>
                )}
              </div>
              <CardTitle className="text-xl font-heading text-slate-900">
                {niche.name}
              </CardTitle>
              <CardDescription className="text-sm text-slate-400">
                {niche.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <Link href={`/quiz/${niche.slug}`} className="w-full block">
                <Button
                  className="w-full rounded-xl font-bold bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-900 hover:text-white transition-colors"
                  variant="outline"
                >
                  Take the Quiz
                </Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
