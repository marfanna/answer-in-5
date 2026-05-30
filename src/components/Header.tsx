'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { LogOut, Menu, X } from 'lucide-react';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

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
