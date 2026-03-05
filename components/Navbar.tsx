'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Summer Camp', href: '#summer-camp' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl text-white group-hover:rotate-12 transition-transform">
            <GraduationCap size={24} />
          </div>
          <span className="font-heading font-bold text-xl text-foreground tracking-tight">
            Shanmukha <span className="text-primary">Online Classes</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">

            <Link
              href="/admin-login"
              className="bg-gray-200 text-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-300 transition-all"
            >
              Admin
            </Link>

            <Link
              href="/student-portal"
              className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Student Portal
            </Link>

            <Link
              href="#enroll"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Enroll Now
            </Link>

          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          suppressHydrationWarning
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-2">

              <Link
                href="/admin-login"
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 text-center px-6 py-3 rounded-xl font-bold"
              >
                Admin
              </Link>

              <Link
                href="/student-portal"
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-white text-center px-6 py-3 rounded-xl font-bold shadow-lg shadow-secondary/20"
              >
                Student Portal
              </Link>

              <Link
                href="#enroll"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white text-center px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
              >
                Enroll Now
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}