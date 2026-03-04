'use client';

import { motion } from 'motion/react';
import CountdownTimer from './CountdownTimer';
import { Calendar, Sparkles } from 'lucide-react';

export default function SummerCamp() {
  return (
    <section id="summer-camp" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent-blue opacity-90 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-8"
        >
          <Sparkles size={18} className="text-yellow-300" />
          Limited Seats Available
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          45 Days Summer Camp Special
        </motion.h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Make this summer unforgettable with fun-filled learning activities.
          <br />
          <span className="font-bold text-white flex items-center justify-center gap-2 mt-4">
            <Calendar size={24} /> April 22 – June 10
          </span>
        </p>

        <CountdownTimer />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="#enroll"
            className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Register for Summer Camp
          </a>
        </motion.div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-white/20 rounded-full animate-bounce" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-white/10 rounded-3xl rotate-45 animate-pulse" />
    </section>
  );
}
