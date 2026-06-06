import React from 'react';

/**
 * Reusable interface for navigation links.
 */
export interface NavLink {
  id: string;
  name: string;
  url: string;
}

/**
 * Reusable interface for social media links.
 */
export interface SocialLink {
  name: string; // e.g., "LinkedIn", "GitHub"
  url: string;
  icon: React.ReactNode; // For SVG components or similar
  ariaLabel?: string; // For accessibility, e.g., "Link to my LinkedIn profile"
}

/**
 * Interface for personal information.
 */
export interface PersonalInfo {
  name: string;
  title: string; // e.g., "Software Engineer"
  tagline: string; // A short, catchy phrase
  description: string; // A brief bio or introduction
  resumeLink?: string; // Optional link to a resume/CV
  profilePicture?: string; // URL to a profile picture
}

/**
 * Interface for the Hero section content.
 */
export interface HeroSection {
  heading: string; // Main title for the hero section
  subheading: string; // Secondary text or a brief intro
  callToAction?: {
    text: string;
    url: string;
    external?: boolean; // True if the link opens in a new tab
  };
  image?: string; // URL for a hero image or illustration
  techStackBadges?: string[]; // New: List of tech stack names for badges
  resumeButtonText?: string; // New: Text for the resume download button
}

/**
 * Interface for a highlight item within the About section.
 */
export interface AboutHighlight {
  icon: React.ReactNode; // Icon for the highlight
  title: string;
  description: string;
}

/**
 * Interface for the About section content.
 */
export interface AboutSection {
  heading: string;
  intro: string;
  expertise?: string; // Detailed description of expertise
  trackRecord?: string; // Summary of track record or achievements
  certificationSummary?: string; // Summary of certifications
  highlights?: AboutHighlight[]; // Key highlights or facts
}

/**
 * Interface for a single skill.
 */
export interface Skill {
  name: string;
  icon?: string | React.ReactNode; // Emoji, path to SVG, or component
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert"; // Optional skill level
}

/**
 * Interface for a category of skills.
 */
export interface SkillCategory {
  name: string; // e.g., "Frontend", "Backend", "Tools"
  icon?: string | React.ReactNode; // Icon for the category
  skills: Skill[];
}

/**
 * Interface for the Skills section content.
 */
export interface SkillsSection {
  heading: string;
  description?: string; // Optional description for the skills section
  categories: SkillCategory[];
}

/**
 * Interface for a single experience item (e.g., a job role).
 */
export interface ExperienceItem {
  company: string;
  role: string;
  duration: string; // e.g., "Jan 2020 - Present", "2018 - 2022"
  achievements?: string[]; // Key achievements or responsibilities in bullet points
  location?: string;
  description?: string; // Overall description of the role
  responsibilities?: string[]; // Key responsibilities or achievements in bullet points
  techStack?: string[]; // Technologies used in this role
  logo?: string; // Company logo URL
}

/**
 * Interface for the Experience section content.
 */
export interface ExperienceSection {
  heading: string;
  items: ExperienceItem[];
}

/**
 * Interface for a single project item.
 */
export interface ProjectItem {
  title: string;
  description: string;
  techStack?: string[]; // Re-added: Technologies used in this project
  imageUrl?: string; // Made optional
  liveLink?: string; // Link to the live demo or deployed project
  githubLink?: string; // Link to the GitHub repository
  category?: string; // e.g., "Web Development", "Mobile App", "Open Source"
  features?: string[]; // Made optional (List of key features or functionalities)
}

/**
 * Interface for the Projects section content.
 */
export interface ProjectsSection {
  heading: string;
  items: ProjectItem[];
}

/**
 * Interface for a single achievement item (e.g., award, publication, speaking engagement).
 */
export interface AchievementItem {
  title: string;
  description: string | string[]; // Can be a single string or an array of points
  date?: string; // Date of achievement, e.g., "May 2023"
  icon?: string | React.ReactNode; // Icon for the achievement
  link?: string; // Optional link to more details or evidence
}

/**
 * Interface for the Achievements section content.
 */
export interface AchievementsSection {
  heading: string;
  items: AchievementItem[];
}

/**
 * Interface for a single certification item.
 */
export interface CertificationItem {
  name: string; // Name of the certification
  issuer: string; // Issuing organization
  dateIssued: string; // Date the certification was obtained, e.g., "May 2023"
  credentialUrl?: string; // Link to verify the credential
  icon?: string; // Issuer logo or certification icon URL
}

/**
 * Interface for the Certifications section content.
 */
export interface CertificationsSection {
  heading: string;
  items: CertificationItem[];
}

/**
 * Interface for a single education item.
 */
export interface EducationItem {
  institution: string;
  degree: string; // e.g., "Bachelor of Science"
  fieldOfStudy?: string; // e.g., "Computer Science"
  duration: string; // e.g., "2016 - 2020"
  location?: string;
  gpa?: string; // Grade Point Average
  honors?: string[]; // e.g., "Magna Cum Laude", "Dean's List"
  logo?: string; // Institution logo URL
}

/**
 * Interface for the Education section content.
 */
export interface EducationSection {
  heading: string;
  items: EducationItem[];
}

/**
 * Interface for the Contact section content.
 */
export interface ContactSection {
  heading: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  socialLinks?: SocialLink[]; // Specific social links for the contact section
  formEndpoint?: string; // URL for a contact form submission
}

/**
 * The main Profile interface, combining all sections of a portfolio.
 */
export interface Profile {
  personalInfo: PersonalInfo;
  navLinks?: NavLink[]; // Global navigation links
  socialLinks?: SocialLink[]; // Global social links (if not part of contact)
  hero?: HeroSection;
  about?: AboutSection;
  skills?: SkillsSection;
  experience?: ExperienceSection;
  projects?: ProjectsSection;
  achievements?: AchievementsSection;
  certifications?: CertificationsSection;
  education?: EducationSection;
  contact?: ContactSection;
  // Allows for additional, custom sections without breaking the type
  [key: string]: any;
}
