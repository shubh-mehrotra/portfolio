"use client";

import React from "react";
import { useProfile } from "@/context/ProfileContext";
import { EducationItem } from "@/types/profile";

export default function Education() {
  const { profile } = useProfile();

  if (!profile || !profile.education || !profile.education.items.length) return null;

  const { heading, items } = profile.education;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">{heading}</h2>

      <div className={`grid grid-cols-1 gap-8 ${
        items.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {items.map((item: EducationItem, index: number) => (
          <div
            key={index}
            className="relative p-[1px] rounded-xl overflow-hidden group
                       transition-all duration-300 ease-in-out hover:scale-[1.02]
                       focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-75"
            tabIndex={0}
            role="listitem"
            aria-labelledby={`education-title-${index}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-white/10 group-hover:border-transparent h-full flex flex-col gap-4">

              {/* Logo + Degree */}
              <div className="flex items-start gap-4">
                {item.logo ? (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    <img src={item.logo} alt={`${item.institution} logo`} className="w-9 h-9 object-contain" />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl">🎓</span>
                  </div>
                )}
                <div>
                  <h3 id={`education-title-${index}`} className="font-bold text-lg text-purple-300 leading-snug">
                    {item.degree}
                  </h3>
                  {item.fieldOfStudy && (
                    <span className="text-sm text-purple-400/80 font-medium">{item.fieldOfStudy}</span>
                  )}
                </div>
              </div>

              <div className="h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />

              {/* Details */}
              <div className="flex flex-col gap-2 flex-grow">
                <p className="text-gray-200 font-semibold text-base">{item.institution}</p>
                {item.location && (
                  <p className="text-gray-400 text-sm flex items-center gap-1.5">
                    <span>📍</span>{item.location}
                  </p>
                )}
                {item.gpa && (
                  <p className="text-sm flex items-center gap-1.5">
                    <span>⭐</span>
                    <span className="text-gray-400">GPA:</span>
                    <span className="text-purple-300 font-semibold">{item.gpa}</span>
                  </p>
                )}
              </div>

              {/* Honors badges */}
              {item.honors && item.honors.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.honors.map((honor, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {honor}
                    </span>
                  ))}
                </div>
              )}

              {/* Duration */}
              {item.duration && (
                <div className="flex items-center justify-end gap-1.5 pt-2 border-t border-white/10">
                  <span className="text-gray-500 text-xs">🗓</span>
                  <span className="text-xs text-gray-400 italic">{item.duration}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}