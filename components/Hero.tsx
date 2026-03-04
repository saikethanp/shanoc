'use client';

import { motion } from 'motion/react';
import { Phone, ArrowRight, Star, Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-secondary/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
          >
            Admissions Open Now 🚀
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-6">
            Shanmukha <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Online Classes
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed">
            Building Strong Foundations for Little Champs. We provide specialized training in Abacus, Handwriting, and Telugu.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#enroll"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              Enroll Now <ArrowRight size={20} />
            </a>
            <a
              href="tel:+910000000000"
              className="bg-white text-foreground px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2 border border-gray-100"
            >
              <Phone size={20} className="text-primary" /> Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="teacher.png"
              alt="Kids learning online"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20 blur-xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-2xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
