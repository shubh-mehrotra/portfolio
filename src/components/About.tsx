"use client";

import { useProfile } from '@/context/ProfileContext';
import React from 'react';

export default function About() {
  const { profile } = useProfile();

  if (!profile || !profile.about) return null;

  const { heading, intro, expertise, trackRecord, certificationSummary, highlights } = profile.about;

  return (
    <div className="min-h-screen px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{heading}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — prose blocks */}
          <div className="space-y-4">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:border-purple-400/30 transition-all duration-300 space-y-4">
              {intro && (
                <p className="text-white/90 text-lg leading-relaxed font-medium border-l-2 border-purple-400 pl-4"
                  dangerouslySetInnerHTML={{ __html: intro }} />
              )}
              {expertise && (
                <p className="text-white/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: expertise }} />
              )}
              {trackRecord && (
                <p className="text-white/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: trackRecord }} />
              )}
              {certificationSummary && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-purple-300/80 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: certificationSummary }} />
                </div>
              )}
            </div>
          </div>

          {/* Right — highlight cards */}
          {highlights && highlights.length > 0 && (
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 hover:border-purple-400/40 hover:scale-[1.02] hover:shadow-purple-500/20 transition-all duration-300 cursor-default"
                  role="listitem"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 group-hover:bg-purple-500/40 group-hover:border-purple-400/60 group-hover:scale-110 transition-all duration-300 flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}