'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { LogOut } from 'lucide-react';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const navLink = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`text-sm font-bold transition-colors ${active ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full border-b border-slate-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-slate-900">
          Answer<span className="text-slate-400">In5</span>
        </Link>

        <div className="flex items-center gap-6">
          {navLink('/leaderboard', 'Leaderboard')}

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
                  <span className="text-sm font-bold text-slate-700 hidden sm:block">
                    {user.displayName?.split(' ')[0]}
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  title="Sign out"
                  className="text-slate-400 hover:text-red-500 hover:bg-red-50 font-bold px-2"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin} className="bg-slate-900 text-white hover:bg-slate-800 rounded-full shadow-sm">
                Sign in with Google
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
}
