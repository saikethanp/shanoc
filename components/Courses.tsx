'use client';

import { motion } from 'motion/react';
import { Calculator, PenTool, BookOpen, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    title: 'Abacus',
    description: 'Master mental math and improve concentration through our structured Abacus levels.',
    icon: Calculator,
    color: 'bg-pink-100 text-pink-600',
    features: ['Mental Arithmetic', 'Speed & Accuracy', 'Brain Development'],
  },
  {
    title: 'Handwriting',
    description: 'Transform messy writing into beautiful, legible script with our expert techniques.',
    icon: PenTool,
    color: 'bg-violet-100 text-violet-600',
    features: ['Cursive Writing', 'Print Style', 'Posture & Grip'],
  },
  {
    title: 'Telugu Reading & Writing',
    description: 'Connect with your roots. Learn to read, write and speak Telugu fluently.',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600',
    features: ['Varnamala', 'Guninthalu', 'Basic Conversation'],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our Popular <span className="text-primary">Courses</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            We offer specialized programs designed to enhance your child&apos;s cognitive abilities and creative skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] border border-gray-100 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <course.icon size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{course.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-3">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                    <CheckCircle2 size={18} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                suppressHydrationWarning
                className="mt-8 w-full py-4 rounded-xl border-2 border-gray-100 font-bold text-foreground/60 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
