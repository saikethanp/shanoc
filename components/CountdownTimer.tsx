'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-22T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <motion.div
            key={unit.value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 md:w-24 md:h-24 glass-card rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold text-primary mb-2"
          >
            {unit.value.toString().padStart(2, '0')}
          </motion.div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/80">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
