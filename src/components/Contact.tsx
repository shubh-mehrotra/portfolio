"use client";

import React, { useState } from 'react';
import { useProfile } from '@/context/ProfileContext';

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.175 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.645 1.65.24 2.87.12 3.175.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.923-2.063-2.065 0-1.145.92-2.066 2.063-2.066 1.145 0 2.064.922 2.064 2.066 0 1.142-.92 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.209 24 24 23.227 24 22.271V1.729C24 .774 23.209 0 22.225 0z" />
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

export default function Contact() {
  const { profile } = useProfile();
  const [copied, setCopied] = useState(false);

  if (!profile || !profile.contact) return null;

  const { contact, personalInfo } = profile;
  const socialLinks = contact.socialLinks || [];

  const handleCopyEmail = () => {
    if (contact.email) {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 id="contact-heading" className="text-4xl font-bold mb-4 text-purple-400">
        {contact.heading}
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
        {contact.description}
      </p>

      <div
        className="relative p-[1px] rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.01] focus-within:ring-2 focus-within:ring-purple-500"
        role="region"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

        <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl p-10 border border-white/20 group-hover:border-transparent flex flex-col items-center gap-8">

          {/* Location */}
          {contact.location && (
            <div className="flex items-center gap-2 text-gray-300">
              <span>📍</span>
              <span className="text-lg font-medium">{contact.location}</span>
            </div>
          )}

          {/* Email copy row */}
          {contact.email && (
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <EmailIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{contact.email}</span>
              <button
                onClick={handleCopyEmail}
                className="ml-2 text-xs text-purple-400 hover:text-purple-300 border border-purple-500/40 rounded-full px-3 py-1 transition-all duration-200 hover:bg-purple-500/20"
                aria-label="Copy email address"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          )}

          {/* Social icons */}
          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name.toLowerCase()];
                if (!Icon) return null;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-purple-500/30 hover:text-white hover:border-purple-400/50 hover:scale-110 transition-all duration-300"
                    aria-label={link.ariaLabel || `${link.name} Profile`}
                    title={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {personalInfo?.resumeLink && (
              <a
                href={personalInfo.resumeLink}
                download
                className="group relative px-8 py-3 bg-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                aria-label={`Download ${personalInfo.name || 'My'} Resume`}
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="px-8 py-3 bg-transparent border-2 border-purple-500/60 text-purple-300 font-semibold rounded-full transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white hover:scale-105"
              >
                Get In Touch
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}