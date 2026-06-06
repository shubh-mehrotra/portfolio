"use client"; // Ensure this is a client component if it uses hooks

import React from 'react';
import { useProfile } from '@/context/ProfileContext'; // Import useProfile hook

export default function Footer() {
  const { profile } = useProfile(); // Get profile from context
  const currentYear = new Date().getFullYear();

  if (!profile) {
    return null; // Don't render footer if profile is not loaded
  }

  const personalInfo = profile.personalInfo; // Get personal info from profile

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtle top border glow */}
        <div className="border-t border-purple-500/30 pt-8 mb-4" aria-hidden="true"></div>
        <p className="text-sm mb-2">
          &copy; {currentYear} {personalInfo.name || 'Portfolio'}. All rights reserved.
        </p>
        <p className="text-xs">
          Built with <span className="text-purple-400">Next.js</span> &amp; <span className="text-purple-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
