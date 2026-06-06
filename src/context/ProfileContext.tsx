"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getProfileKeyFromUrl, getProfile } from '@/data/profile';
import { Profile } from '@/types/profile';

// Define the shape of the context value
interface ProfileContextType {
  profile: Profile | null;
  isLoading: boolean;
}

// Create the context with a default null value
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This code runs only on the client side after hydration
    if (typeof window !== 'undefined') {
      const profileKey = getProfileKeyFromUrl(window.location.href);
      const loadedProfile = getProfile(profileKey);
      setProfile(loadedProfile);
    }

    // Simulate a loading delay if needed, then set loading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
}

// Custom hook to consume the profile context
export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
