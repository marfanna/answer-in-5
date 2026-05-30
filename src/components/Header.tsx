'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { LogOut, Menu, X, ChevronDown } from 'lucide-react';
import { CATEGORIES, SUB_CATEGORIES } from '@/lib/mockData';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nichesOpen, setNichesOpen] = useState(false);
  const [mobileNichesOpen, setMobileNichesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setNichesOpen(false);
      }
    }
    if (nichesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nichesOpen]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setNichesOpen(false);
    setMobileNichesOpen(false);
  }, [pathname]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setMenuOpen(false);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const navLinkClass = (href: string) =>
    `text-sm font-bold transition-colors ${pathname === href ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'}`;

  return (
    <header className="w-full border-b border-slate-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-slate-900">
          <span>Answer<span className="text-slate-400">In5</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={navLinkClass('/')}>Home</Link>
          {/* Desktop Niches Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setNichesOpen(!nichesOpen)}
              className={`flex items-center gap-1 text-sm font-bold transition-colors outline-none ${
                nichesOpen || pathname.startsWith('/quiz/') ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Niches <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${nichesOpen ? 'rotate-180' : ''}`} />
            </button>

            {nichesOpen && (
              <div className="absolute left-0 mt-3 w-[560px] -translate-x-[25%] bg-white border border-slate-100 shadow-xl rounded-2xl p-5 grid grid-cols-3 gap-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {CATEGORIES.filter(cat => cat.id !== 'cat_mixed').map((cat) => {
                    const catNiches = SUB_CATEGORIES.filter(sub => sub.categoryId === cat.id);
                    if (catNiches.length === 0) return null;
                    return (
                      <div key={cat.id} className="space-y-1.5">
                        <Link
                          href={`/niches#${cat.slug}`}
                          onClick={() => setNichesOpen(false)}
                          className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 hover:text-indigo-600 transition-colors font-sans"
                        >
                          {cat.name}
                        </Link>
                        <div className="space-y-1">
                          {catNiches.map((niche) => (
                            <Link
                              key={niche.id}
                              href={`/quiz/${niche.slug}`}
                              onClick={() => setNichesOpen(false)}
                              className="block text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors py-0.5"
                            >
                              {niche.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  {/* Ultimate Mix section at the bottom */}
                  <div className="col-span-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-sans font-bold">Ready for a mixed challenge?</span>
                    <Link
                      href="/quiz/mixed"
                      onClick={() => setNichesOpen(false)}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1"
                    >
                      Play Ultimate Mix &rarr;
                    </Link>
                  </div>
                </div>
            )}
          </div>

          <Link href="/leaderboard" className={navLinkClass('/leaderboard')}>Leaderboard</Link>
          <Link href="/battle" className={navLinkClass('/battle')}>Live Battle</Link>

          {!isLoading && (
            user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/profile"
                  className={`flex items-center gap-2 transition-opacity ${pathname === '/profile' ? 'opacity-100' : 'hover:opacity-80'}`}
                >
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=e2e8f0&color=475569&bold=true`}
                    alt="Profile"
                    className={`w-8 h-8 rounded-full border shadow-sm transition-all ${pathname === '/profile' ? 'border-slate-900 ring-2 ring-slate-900 ring-offset-1' : 'border-slate-200'}`}
                  />
                  <span className="text-sm font-bold text-slate-700">
                    {user.displayName?.split(' ')[0]}
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  title="Sign out"
                  className="text-slate-400 hover:text-red-500 hover:bg-red-50 px-2"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin} className="bg-slate-900 text-white hover:bg-slate-800 rounded-full shadow-sm">
                Sign in
              </Button>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${pathname === '/' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            Home
          </Link>
          {/* Mobile Niches Section */}
          <div>
            <button
              onClick={() => setMobileNichesOpen(!mobileNichesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors outline-none"
            >
              <span>Niches</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileNichesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileNichesOpen && (
              <div className="mx-3 my-1 p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-3 max-h-[250px] overflow-y-auto">
                {CATEGORIES.filter(cat => cat.id !== 'cat_mixed').map((cat) => {
                  const catNiches = SUB_CATEGORIES.filter(sub => sub.categoryId === cat.id);
                  if (catNiches.length === 0) return null;
                  return (
                    <div key={cat.id} className="space-y-1">
                      <Link
                        href={`/niches#${cat.slug}`}
                        onClick={() => setMobileNichesOpen(false)}
                        className="text-[9px] font-black uppercase tracking-wider text-slate-400 hover:text-indigo-600 transition-colors font-sans block"
                      >
                        {cat.name}
                      </Link>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 pl-1">
                        {catNiches.map((niche) => (
                          <Link
                            key={niche.id}
                            href={`/quiz/${niche.slug}`}
                            className="block text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors py-0.5 truncate"
                          >
                            {niche.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center">
                  <Link
                    href="/quiz/mixed"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Play Ultimate Mix &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/leaderboard"
            className={`block px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${pathname === '/leaderboard' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            Leaderboard
          </Link>
          <Link
            href="/battle"
            className={`block px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${pathname === '/battle' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            Live Battle
          </Link>

          {!isLoading && (
            user ? (
              <>
                <Link
                  href="/profile"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${pathname === '/profile' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=e2e8f0&color=475569&bold=true`}
                    alt="Profile"
                    className="w-7 h-7 rounded-full border border-slate-200"
                  />
                  {user.displayName?.split(' ')[0]}
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Sign in
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
