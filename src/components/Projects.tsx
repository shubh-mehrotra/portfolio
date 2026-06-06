"use client";

import React, { useState } from "react";
import { useProfile } from '@/context/ProfileContext';
import { ProjectItem } from '../types/profile';

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Projects() {
  const { profile } = useProfile();
  const [filter, setFilter] = useState<string>('All');

  if (!profile || !profile.projects || profile.projects.items.length === 0) return null;

  const { heading, items } = profile.projects;

  // Collect unique tech tags for filter
  const allTech = ['All', ...Array.from(new Set(items.flatMap(p => p.techStack || [])))];
  const filtered = filter === 'All' ? items : items.filter(p => p.techStack?.includes(filter));

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-400">{heading}</h2>

      {/* Tech filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allTech.slice(0, 10).map((tech) => ( // cap at 10 to avoid overflow
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border
              ${filter === tech
                ? 'bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-white'}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project: ProjectItem, index: number) => (
          <div
            key={index}
            className="relative p-[1px] rounded-xl overflow-hidden group
                       transition-all duration-300 ease-in-out hover:scale-[1.02]
                       focus-within:ring-2 focus-within:ring-purple-500"
            tabIndex={0}
            role="article"
            aria-labelledby={`project-title-${index}`}
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl border border-white/20 group-hover:border-transparent h-full flex flex-col overflow-hidden">

              {/* Project image */}
              {project.imageUrl ? (
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
              ) : (
                <></>
              )}

              <div className="flex flex-col flex-grow p-6">
                {/* Title */}
                <h3
                  id={`project-title-${index}`}
                  className="text-xl font-bold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors duration-300"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5 flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-600/30 text-purple-200 text-xs px-2.5 py-1 rounded-full border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-white/10 text-gray-200 text-sm rounded-full border border-white/20 hover:bg-purple-500/30 hover:border-purple-400/50 hover:text-white transition-all duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-purple-600/40 text-purple-200 text-sm rounded-full border border-purple-500/30 hover:bg-purple-500/60 hover:text-white transition-all duration-300"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLinkIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state when filter has no results */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg">No projects found for <span className="text-purple-400">{filter}</span></p>
          <button onClick={() => setFilter('All')} className="mt-4 text-sm text-purple-400 hover:text-purple-300 underline">
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}