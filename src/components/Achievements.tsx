"use client";

import React from 'react';
import { useProfile } from '@/context/ProfileContext';
import { AchievementItem } from '../types/profile';

export default function Achievements() {
  const { profile } = useProfile();

  if (!profile || !profile.achievements || profile.achievements.items.length === 0) return null;

  const { heading, items } = profile.achievements;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">{heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item: AchievementItem, index: number) => (
          <div
            key={index}
            className="relative p-[1px] rounded-xl overflow-hidden group
                       transition-all duration-300 ease-in-out hover:scale-[1.02]
                       focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75"
            tabIndex={0}
            role="listitem"
            aria-labelledby={`achievement-title-${index}`}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-white/20 group-hover:border-transparent h-full flex flex-col gap-4">

              {/* Icon + Title */}
              <div className="flex items-start gap-4">
                {item.icon && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  </div>
                )}
                <h3
                  id={`achievement-title-${index}`}
                  className="font-bold text-lg text-purple-300 leading-snug pt-1"
                >
                  {item.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />

              {/* Description */}
              {item.description && (
                <ul className="list-disc list-inside text-gray-300 space-y-1.5 flex-grow text-sm leading-relaxed">
                  {Array.isArray(item.description)
                    ? item.description.map((desc, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                      ))
                    : <li dangerouslySetInnerHTML={{ __html: item.description }} />
                  }
                </ul>
              )}

              {/* Footer: date + link */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-auto">
                {item.date
                  ? <span className="text-xs text-gray-400 italic flex items-center gap-1">🗓 {item.date}</span>
                  : <span />
                }
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors duration-300 flex items-center gap-1"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}