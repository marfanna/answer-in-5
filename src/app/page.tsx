import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, Star, TrendingUp } from 'lucide-react';

const FEATURED_NICHES = [
  { id: 'taylor-swift', title: 'Taylor Swift Lore', description: 'Are you the ultimate Swiftie?', difficulty: 'Hard', icon: <Star className="w-5 h-5 text-yellow-600" /> },
  { id: 'bts', title: 'BTS Army Exam', description: 'Can you score 100 on BTS trivia?', difficulty: 'Expert', icon: <Trophy className="w-5 h-5 text-purple-600" /> },
  { id: 'pop-culture', title: 'Pop Culture Mix', description: 'A massive mix of all music artists.', difficulty: 'Medium', icon: <TrendingUp className="w-5 h-5 text-green-600" /> },
];

export default function Home() {
  return (
    <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10 space-y-12 bg-white text-slate-900">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 md:py-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <Badge variant="outline" className="px-4 py-1 text-sm bg-slate-50 border-slate-200 text-slate-600 rounded-full shadow-sm">
          The ultimate test of fandom
        </Badge>
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-slate-900">
          Prove you belong.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-sans">
          Choose your niche. Answer the 5-second rapid-fire questions. Earn badges and climb the global leaderboards.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-md bg-slate-900 text-white hover:bg-slate-800 transition-all font-sans">
            Start a Quiz
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12 border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm font-sans">
            View Leaderboards
          </Button>
        </div>
      </section>

      {/* Niches Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-heading font-semibold flex items-center gap-2 text-slate-800">
            <Trophy className="w-6 h-6 text-slate-900" />
            Trending Niches
          </h2>
          <Link href="/niches" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            View all &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_NICHES.map((niche, i) => (
            <Card key={niche.id} className="bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl overflow-hidden group rounded-2xl">
              <CardHeader className="space-y-1 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-slate-100 transition-colors" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
                    {niche.icon}
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs font-mono border-none">{niche.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl pt-4 font-heading text-slate-900 relative z-10">{niche.title}</CardTitle>
                <CardDescription className="text-base text-slate-500 relative z-10">{niche.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Link href={`/quiz/${niche.id}`} className="w-full mt-2 block">
                  <Button className="w-full rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50" variant="outline">
                    Take the Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
