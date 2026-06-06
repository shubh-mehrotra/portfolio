"use client";

import React, { useState } from 'react';
import { useProfile } from '@/context/ProfileContext';
import { SkillCategory } from '../types/profile';

export default function Skills() {
  const { profile } = useProfile();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  if (!profile || !profile.skills || profile.skills.categories.length === 0) return null;

  const { heading, description, categories } = profile.skills;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-400">{heading}</h2>
      {description && (
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">{description}</p>
      )}

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
            ${activeCategory === null
              ? 'bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30'
              : 'bg-white/10 border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-white'}`}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(activeCategory === i ? null : i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2
              ${activeCategory === i
                ? 'bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-white'}`}
          >
            {cat.icon && <span>{cat.icon}</span>}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories
          .filter((_, i) => activeCategory === null || activeCategory === i)
          .map((category: SkillCategory, index: number) => (
            <div
              key={index}
              className="relative p-[1px] rounded-xl overflow-hidden group
                         transition-all duration-300 ease-in-out hover:scale-[1.02]
                         focus-within:ring-2 focus-within:ring-purple-500"
              tabIndex={0}
              role="listitem"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-white/20 group-hover:border-transparent h-full flex flex-col gap-4">

                {/* Header */}
                <div className="flex items-center gap-3">
                  {category.icon && (
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      {category.icon}
                    </span>
                  )}
                  <h3 className="font-bold text-xl text-purple-300">{category.name}</h3>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />

                {/* Skill count */}
                <p className="text-xs text-gray-500">
                  {category.skills.length} skill{category.skills.length !== 1 ? 's' : ''}
                </p>

                {/* Skills */}
                {category.skills && category.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-purple-600/30 text-purple-200 text-sm px-3 py-1.5 rounded-full
                                   border border-purple-500/20 transition-all duration-200
                                   hover:scale-105 hover:bg-purple-500/50 hover:border-purple-400/50 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}