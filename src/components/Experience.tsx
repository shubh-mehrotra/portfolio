"use client";

import React, { useState } from 'react';
import { useProfile } from '@/context/ProfileContext';
import { ExperienceItem } from '../types/profile';

export default function Experience() {
  const { profile } = useProfile();
  const [expanded, setExpanded] = useState<number | null>(null);

  if (!profile || !profile.experience || profile.experience.items.length === 0) return null;

  const { heading, items } = profile.experience;

  const Card = ({ item, index }: { item: ExperienceItem; index: number }) => {
    const isExpanded = expanded === index;
    const isLeft = index % 2 === 0;

    return (
      <div
        className={`p-6 rounded-xl shadow-xl transition-all duration-300 ease-in-out cursor-pointer
          bg-white/10 backdrop-blur-md border border-white/20
          hover:border-purple-400/60 hover:shadow-purple-500/30 hover:shadow-lg
          ${isLeft ? 'md:text-right' : 'md:text-left'}
          ${isExpanded ? 'border-purple-400/60 shadow-purple-500/30 shadow-lg' : ''}`}
        tabIndex={0}
        role="article"
        onClick={() => setExpanded(isExpanded ? null : index)}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(isExpanded ? null : index)}
        aria-expanded={isExpanded}
      >
        {/* Company + role */}
        <div className={`flex items-start gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-sm">
            {item.company.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-xl text-purple-300">{item.company}</h3>
            <p className="text-base font-semibold text-white">{item.role}</p>
            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
              🗓 {item.duration}
            </p>
          </div>
        </div>

        {/* Responsibilities — expand/collapse */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <ul className={`list-disc list-inside text-gray-200 space-y-1.5 text-sm ${isLeft ? 'md:list-outside md:text-right' : ''}`}>
              {item.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        {item.techStack && item.techStack.length > 0 && (
          <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {item.techStack.map((tech, i) => (
              <span key={i} className="bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Expand hint */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <p className="text-xs text-purple-400/60 mt-3">
            {isExpanded ? '▲ collapse' : '▼ click to see responsibilities'}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">{heading}</h2>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
          style={{ boxShadow: '0 0 15px rgba(168,85,247,0.7), 0 0 30px rgba(236,72,153,0.5)' }}
          aria-hidden="true"
        />

        {items.map((item: ExperienceItem, index: number) => (
          <div key={index} className="mb-8 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full">

            {/* Left card */}
            {index % 2 === 0
              ? <Card item={item} index={index} />
              : <div />
            }

            {/* Timeline dot */}
            <div className="z-20 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl w-9 h-9 rounded-full flex-shrink-0 my-4 md:my-0 font-bold text-white text-sm">
              {index + 1}
            </div>

            {/* Right card */}
            {index % 2 !== 0
              ? <Card item={item} index={index} />
              : <div />
            }
          </div>
        ))}
      </div>
    </div>
  );
}