import { Play, Calendar, BookOpen } from 'lucide-react';

export default function ClassCard({ session }: { session: any }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
          <Calendar size={14} /> {session.date}
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
          <BookOpen size={14} /> {session.subject}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
        {session.title}
      </h3>

      <a
        href={session.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 text-foreground/70 font-bold hover:bg-primary hover:text-white transition-all"
      >
        <Play size={18} fill="currentColor" /> Watch Recording
      </a>

    </div>
  );
}