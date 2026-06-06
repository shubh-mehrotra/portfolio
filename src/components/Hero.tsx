"use client";

import { useProfile } from '@/context/ProfileContext';
import React from 'react';

export default function Hero() {
  const { profile } = useProfile();

  if (!profile || !profile.personalInfo || !profile.hero) return null;

  const personalInfo = profile.personalInfo;
  const heroSection = profile.hero;
  const socialLinks = profile.socialLinks || [];

  const { name, title, description, resumeLink } = personalInfo;
  // ✅ Safe optional access — won't crash if field doesn't exist on type
  const profilePicture = (personalInfo as any).profilePicture as string | undefined;
  const { callToAction, techStackBadges, resumeButtonText } = heroSection;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* Profile picture — only renders if field exists */}
          {profilePicture && (
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-lg shadow-purple-500/30">
                  <img
                    src={profilePicture}
                    alt={`${name} profile picture`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" aria-hidden="true" />
              </div>
            </div>
          )}

          {/* Tech stack badges */}
          {techStackBadges && techStackBadges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Key Technologies">
              {techStackBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium text-white/80 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-4 tracking-tight">
            {name}
          </h1>

          {/* Title */}
          <div className="flex justify-center mb-6">
            <p className="text-xl md:text-2xl text-center text-purple-300 font-medium">
              {title}
            </p>
          </div>

          {/* Description */}
          {description && (
            <p className="text-center text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          )}

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-10" aria-hidden="true" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {callToAction && (
              <a
                href={callToAction.url}
                target={callToAction.external ? "_blank" : "_self"}
                rel={callToAction.external ? "noopener noreferrer" : ""}
                className="group relative px-8 py-3 bg-white text-slate-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
                aria-label={callToAction.text}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {callToAction.text}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </a>
            )}
            {resumeLink && (
              <a
                href={resumeLink}
                download
                className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
                aria-label={`Download ${name}'s Resume`}
              >
                {resumeButtonText || "Download Resume"}
              </a>
            )}
          </div>

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-purple-500/30 hover:text-white hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  aria-label={`${link.name} Profile`}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}