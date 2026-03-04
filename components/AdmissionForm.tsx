'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Phone, BookOpen, MessageSquare, School } from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    class: '',
    phone: '',
    course: 'Abacus',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Admission Inquiry*%0A%0A*Student Name:* ${formData.studentName}%0A*Parent Name:* ${formData.parentName}%0A*Class:* ${formData.class}%0A*Phone:* ${formData.phone}%0A*Course:* ${formData.course}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/910000000000?text=${message}`, '_blank');
  };

  return (
    <section id="enroll" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-12 bg-primary text-white flex flex-col justify-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Start Your Child&apos;s Journey Today</h2>
            <p className="text-white/80 mb-8 text-lg">
              Fill out the form and our team will get back to you within 24 hours to schedule a free demo session.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-semibold">
                <div className="bg-white/20 p-2 rounded-lg">✓</div> Free Demo Session
              </li>
              <li className="flex items-center gap-3 font-semibold">
                <div className="bg-white/20 p-2 rounded-lg">✓</div> Personalized Learning
              </li>
              <li className="flex items-center gap-3 font-semibold">
                <div className="bg-white/20 p-2 rounded-lg">✓</div> Certified Instructors
              </li>
            </ul>
          </div>

          <div className="p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                    <User size={16} /> Student Name
                  </label>
                  <input
                    required
                    suppressHydrationWarning
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                    <User size={16} /> Parent Name
                  </label>
                  <input
                    required
                    suppressHydrationWarning
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                    placeholder="Jane Doe"
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                    <School size={16} /> Class/Grade
                  </label>
                  <input
                    required
                    suppressHydrationWarning
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                    placeholder="Grade 3"
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                    <Phone size={16} /> Phone Number
                  </label>
                  <input
                    required
                    suppressHydrationWarning
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                    placeholder="+91 98765 43210"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                  <BookOpen size={16} /> Select Course
                </label>
                <select
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option>Abacus</option>
                  <option>Handwriting</option>
                  <option>Telugu Reading & Writing</option>
                  <option>Summer Camp</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 flex items-center gap-2">
                  <MessageSquare size={16} /> Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us more about your requirements..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Submit Application <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
