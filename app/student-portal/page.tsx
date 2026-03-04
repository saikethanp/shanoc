'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, LogOut, Search, User } from 'lucide-react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import ClassCard from '@/components/ClassCard';

export default function StudentPortal() {
  const [isReady, setIsReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [classes, setClasses] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsReady(true);
      } else {
        router.push("/login");
      }
    });

    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzMVwp7tOPuuL3ZjYtY2LvIXdXveGEYMSjj5gUepj-DDK1ChfOK16C1-zMGh1B9tzN5U7fssx1AyNQ/pub?output=csv"
    )
      .then((res) => res.text())
      .then((data) => {
        const rows = data.split("\n").slice(1);

        const parsed = rows.map((row, index) => {
          const cols = row.split(",");

          return {
            id: index + 1,
            date: cols[0],
            subject: cols[1],
            title: cols[2],
            videoUrl: cols[3],
          };
        });

        setClasses(parsed);
      });

    return () => unsubscribe();

  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const filteredClasses = classes.filter(
    (c) =>
      c.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subject?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isReady) return null;

  return (
    <div className="min-h-screen bg-background">

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
              <User size={16} className="text-primary" /> Parent
            </div>

            <button
              onClick={handleLogout}
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
            <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
              Recorded Classes
            </h1>
            <p className="text-foreground/60 font-semibold">
              Welcome back! Catch up on your missed sessions.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />

            <input
              type="text"
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

            <h3 className="text-xl font-bold text-foreground mb-2">
              No classes found
            </h3>

            <p className="text-foreground/50">
              Try searching with a different keyword.
            </p>
          </div>

        )}

      </main>

    </div>
  );
}