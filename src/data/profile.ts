import { Profile } from '../types/profile';
import { shubhamProfile } from './profiles/shubham';
import { himaniProfile } from './profiles/himani';
import { rakshitaProfile } from './profiles/rakshita';

const profileMap: { [key: string]: Profile } = {
  shubham: shubhamProfile,
  himani: himaniProfile,
  rakshita: rakshitaProfile,
  // Add future profiles here:
  // new_profile: newProfile,
};

/**
 * Determines the profile key based on the provided URL.
 * Defaults to 'shubham' if no key is found or the key is invalid.
 * This function expects a URL to be explicitly provided.
 * @param url The URL string to parse for the profile key.
 * @returns The determined profile key (e.g., 'shubham', 'himani').
 */
export function getProfileKeyFromUrl(url?: string): string {
  if (url) {
    // Regex to match 'profileKey-portfolio' in the URL path
    const match = url.match(/([a-zA-Z0-9]+)-portfolio/);
    const profileKey = match?.[1] ?? '';
    if (profileMap[profileKey]) {
      return profileKey;
    }
  }

  // Default to 'shubham' if no key found or invalid
  return 'shubham';
}

/**
 * Retrieves the Profile object based on a given profile key.
 * Defaults to shubhamProfile if the key is not found.
 * @param key The profile key (e.g., 'shubham', 'himani').
 * @returns The Profile object.
 */
export function getProfile(key: string): Profile {
  return profileMap[key] || shubhamProfile;
}
