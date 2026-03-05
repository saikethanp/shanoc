'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { login } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        router.push('/student-portal');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >

        {/* Header */}
        <div className="text-center mb-8">

          <div className="flex justify-between items-center mb-6">

            <Link
              href="/"
              className="text-sm bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              ← Home
            </Link>

          </div>

          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-xl text-white">
              <GraduationCap size={24} />
            </div>
            <span className="font-heading font-bold text-2xl text-foreground tracking-tight">
              Shanmukha <span className="text-primary">Online Classes</span>
            </span>
          </Link>

          <h1 className="text-3xl font-heading font-bold text-foreground">
            Student Login
          </h1>

          <p className="text-foreground/60 mt-2">
            Access your recorded classes and materials.
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-50">

          <form onSubmit={handleLogin} className="space-y-6">

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <AlertCircle size={18} /> {error}
              </motion.div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                <Mail size={16} /> Email Address
              </label>

              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="student@email.com"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                <Lock size={16} /> Password
              </label>

              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? 'Logging in...' : 'Login to Portal'}
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <p className="text-sm text-foreground/50 font-semibold">
              Don&apos;t have access?{' '}
              <Link href="/#enroll" className="text-primary hover:underline">
                Enroll Now
              </Link>
            </p>
          </div>

        </div>

      </motion.div>

    </div>
  );
}