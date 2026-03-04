import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-xl text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-foreground tracking-tight">
                Shanmukha <span className="text-primary">Online Classes</span>
              </span>
            </Link>
            <p className="text-foreground/60 max-w-sm leading-relaxed mb-8">
              Empowering the next generation with essential skills through interactive and engaging online sessions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-foreground/60 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#courses" className="text-foreground/60 hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="#summer-camp" className="text-foreground/60 hover:text-primary transition-colors">Summer Camp</Link></li>
              <li><Link href="/student-portal" className="text-foreground/60 hover:text-primary transition-colors">Student Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-foreground/60">
              <li>Email: shanmukhaoc@gmail.com</li>
              <li>Phone: +91 9963980472</li>
              <li>Hours: Mon-Sat, 9AM - 7PM</li>S
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50 font-semibold">
            © 2026 Shanmukha Online Classes. All rights reserved.
          </p>
          <p className="text-sm text-foreground/40 italic">
            Designed & Developed by <span className="text-primary font-bold">Kethan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
