'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of 7yo',
    content: 'The Abacus classes have significantly improved my daughter\'s mental math speed. She loves the interactive sessions!',
    image: 'https://picsum.photos/seed/parent1/100/100',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Parent of 9yo',
    content: 'Handwriting was a big concern for us. Within 2 months, we saw a dramatic improvement in his cursive writing.',
    image: 'https://picsum.photos/seed/parent2/100/100',
  },
  {
    name: 'Anitha Reddy',
    role: 'Parent of 6yo',
    content: 'Learning Telugu online was made so easy and fun. My son can now read basic sentences fluently.',
    image: 'https://picsum.photos/seed/parent3/100/100',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What <span className="text-primary">Parents</span> Say
          </h2>
          <p className="text-foreground/60">Real stories from our happy community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 relative"
            >
              <Quote className="absolute top-6 right-8 text-primary/10" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 mb-8 italic leading-relaxed">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-foreground/50 font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
