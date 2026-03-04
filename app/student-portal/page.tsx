'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { GraduationCap, LogOut, Search, Play, Calendar, BookOpen, User } from 'lucide-react';
import { isAuthenticated, logout } from '@/lib/auth';
import { mockClasses } from '@/lib/mockClasses';
import ClassCard from '@/components/ClassCard';

export default function StudentPortal() {
  const [isReady, setIsReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push('/login');
      } else {
        setIsReady(true);
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const filteredClasses = mockClasses.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isReady) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Portal Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl text-white">
              <GraduationCap size={24} />
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight hidden md:block">
              Shanmukha <span className="text-primary">Portal</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-bold text-foreground/70">
              <User size={16} className="text-primary" /> student@example.com
            </div>
            <button
              onClick={handleLogout}
              suppressHydrationWarning
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Recorded Classes</h1>
            <p className="text-foreground/60 font-semibold">Welcome back! Catch up on your missed sessions.</p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
            <input
              type="text"
              suppressHydrationWarning
              placeholder="Search by title or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        {filteredClasses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((session, i) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ClassCard session={session} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-foreground/20">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No classes found</h3>
            <p className="text-foreground/50">Try searching with a different keyword.</p>
          </div>
        )}
      </main>
    </div>
  );
}
