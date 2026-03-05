'use client';

import { useState } from "react";
import { Play, Calendar, BookOpen, Maximize, ExternalLink } from "lucide-react";

export default function ClassCard({ session }: { session: any }) {

  const [showVideo, setShowVideo] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    if (url.includes("youtube.com/watch")) {
      return url.replace("watch?v=", "embed/");
    }

    if (url.includes("youtu.be")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }

    if (url.includes("drive.google.com")) {
      return url.replace("/view", "/preview");
    }

    return url;
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
          <Calendar size={14} /> {session.date}
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
          <BookOpen size={14} /> {session.subject}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-6">
        {session.title}
      </h3>

      {!showVideo ? (

        <button
          onClick={() => setShowVideo(true)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 text-foreground/70 font-bold hover:bg-primary hover:text-white transition-all"
        >
          <Play size={18} fill="currentColor" />
          Watch Recording
        </button>

      ) : (

        <div className="space-y-3">

          <div className="w-full aspect-video">
            <iframe
              src={getEmbedUrl(session.videoUrl)}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>

          <div className="flex gap-3">

            <a
              href={session.videoUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <ExternalLink size={16} />
              Open in new tab
            </a>

            <button
              onClick={() => {
                const iframe = document.querySelector("iframe");
                if (iframe?.requestFullscreen) iframe.requestFullscreen();
              }}
              className="flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Maximize size={16} />
              Fullscreen
            </button>

          </div>

        </div>

      )}

    </div>
  );
}