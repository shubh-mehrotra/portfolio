import { Profile, NavLink, SocialLink, AboutHighlight } from '../../types/profile';
import React from 'react'; // Required for React.ReactNode types

// SVG Icons for About Highlights
const ExperienceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CertifiedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const EcommerceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

// SVG Icons for Social Links
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.208.686-.468 0-.23-.009-1.05-.014-1.844-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.894 1.53 2.344 1.088 2.91.832.091-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.949 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.097-2.646 0 0 .84-.27 2.75 1.025.798-.222 1.648-.333 2.495-.337.846.004 1.696.115 2.495.337 1.908-1.296 2.747-1.025 2.747-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.592 1.028 2.682 0 3.848-2.339 4.692-4.566 4.941.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .262.214.559.695.467C21.133 20.197 24 16.44 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.395-2.535 4-2.798 4-2.798 2.759 0 5 2.209 5 4.669v7.364z" />
  </svg>
);

export const shubhamProfile: Profile = {
  personalInfo: {
    name: "Shubham Mehrotra",
    title: "Senior Full-Stack Engineer",
    tagline:
      "Building scalable web applications with React, Vue, Node.js and GraphQL.",
    description:
      "Senior Full-Stack Engineer with 8+ years of experience building high-performance applications across e-commerce, SaaS, logistics and cloud analytics domains.",
    resumeLink: "/resume/Shubham-Mehrotra-Resume.pdf",
    profilePicture: "/dp/shubham.png",
  },
  navLinks: [
    { id: "hero", name: "Home", url: "#hero" },
    { id: "about", name: "About", url: "#about" },
    { id: "experience", name: "Experience", url: "#experience" },
    { id: "skills", name: "Skills", url: "#skills" },
    { id: "projects", name: "Projects", url: "#projects" },
    { id: "achievements", name: "Achievements", url: "#achievements" },
    { id: "education", name: "Education", url: "#education" },
    { id: "contact", name: "Contact", url: "#contact" },
  ],
  socialLinks: [ // Updated with specific URLs from contact section, removed Twitter as no specific URL provided
    { name: "GitHub", url: "https://github.com/shubh-mehrotra", icon: <GitHubIcon />, ariaLabel: "GitHub profile" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shubham-mehrotra-983436139/", icon: <LinkedInIcon />, ariaLabel: "LinkedIn profile" },
  ],
  hero: {
    heading: "Senior Full-Stack Engineer",
    subheading:
      "React • Vue • Node.js • GraphQL • Cloud Analytics",
    callToAction: {
      text: "View My Work",
      url: "#projects",
    },
    image: "/images/hero_shubham.jpg",
    techStackBadges: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Node.js",
      "TypeScript",
    ],
    resumeButtonText: "Download Resume",
  },
  about: {
    heading: "About Me",
    intro: "I am a <span class='text-purple-300 font-semibold'>Senior Full-Stack Engineer</span> with 8+ years of experience in building scalable web applications and robust enterprise solutions.", // Updated to be more factual
    expertise: "My expertise lies in crafting high-performance frontend systems using <span class='text-white font-medium'>React.js</span> and <span class='text-white font-medium'>Vue.js</span>, complemented by strong backend development skills in <span class='text-white font-medium'>Node.js</span> and <span class='text-white font-medium'>GraphQL</span>.", // Kept as factual
    trackRecord: "I have a proven track record working with leading platforms like <span class='text-white font-medium'>New Relic</span>, contributing to application monitoring and <span class='text-white font-medium'>Cloud Cost Intelligence</span> solutions. I am deeply passionate about <span class='text-white font-medium'>performance optimization</span> and delivering exceptional user experiences.", // Kept as factual
    certificationSummary: "As a <span class='text-purple-300 font-semibold'>Salesforce Certified JavaScript Developer II</span>, I bring extensive experience in e-commerce, SaaS platforms, and advanced cloud analytics.", // Kept as factual
    highlights: [
      {
        icon: <ExperienceIcon />,
        title: "8+ Years Experience",
        description: "Building enterprise-grade applications",
      },
      {
        icon: <CertifiedIcon />,
        title: "Salesforce Certified",
        description: "JavaScript Developer II",
      },
      {
        icon: <CloudIcon />,
        title: "Cloud Analytics",
        description: "Cloud Cost Intelligence & Monitoring",
      },
      {
        icon: <EcommerceIcon />,
        title: "E-commerce Expertise",
        description: "Bagisto, 1-800-Flowers & Marketplace Systems",
      },
    ],
  },
  skills: {
    heading: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        icon: <span>💻</span>,
        skills: [
          { name: "React.js", icon: "⚛️", level: "Expert" },
          { name: "Next.js", icon: "▲", level: "Advanced" },
          { name: "Vue.js", icon: "💚", level: "Expert" },
          { name: "Nuxt.js", icon: "N", level: "Advanced" },
          { name: "Redux", icon: "R", level: "Advanced" },
          { name: "TypeScript", icon: "TS", level: "Advanced" },
        ],
      },
      {
        name: "Backend",
        icon: <span>⚙️</span>,
        skills: [
          { name: "Node.js", icon: "Ⓝ", level: "Advanced" },
          { name: "Laravel", icon: "L", level: "Advanced" },
          { name: "Symfony", icon: "S", level: "Intermediate" },
          { name: "REST APIs", icon: "API", level: "Expert" },
          { name: "GraphQL", icon: "QL", level: "Advanced" },
        ],
      },
      {
        name: "Databases",
        icon: <span>🗄️</span>,
        skills: [
          { name: "MySQL", icon: "MY", level: "Advanced" },
          { name: "MongoDB", icon: "MG", level: "Advanced" },
          { name: "Redis", icon: "RD", level: "Intermediate" },
        ],
      },
      {
        name: "Cloud & DevOps",
        icon: <span>☁️</span>,
        skills: [
          { name: "AWS", icon: "AWS", level: "Intermediate" },
          { name: "Docker", icon: "🐳", level: "Advanced" },
          { name: "CI/CD", icon: "CI", level: "Advanced" },
          { name: "Jest", icon: "J", level: "Advanced" },
          { name: "Lighthouse", icon: "LH", level: "Advanced" },
          { name: "Core Web Vitals", icon: "CWV", level: "Advanced" },
        ],
      },
    ],
  },
  experience: { // Updated with exact resume experience, removed invented fields
    heading: "Work Experience",
    items: [
      {
        company: "New Relic",
        role: "Senior Software Engineer",
        duration: "Sep 2025 – Present",
      },
      {
        company: "Encora Digital India Pvt Ltd",
        role: "Senior Software Engineer",
        duration: "Sep 2021 – Sep 2025",
      },
      {
        company: "Webkul Software Pvt Ltd",
        role: "Senior Full-Stack Engineer",
        duration: "Feb 2018 – Sep 2021",
      },
    ],
  },
  achievements: { // Kept as is, matching the provided list of real achievements/certifications
    heading: "Achievements & Certifications",
    items: [
      {
        icon: "🏅",
        title: "Salesforce Certified JavaScript Developer II",
        description: ["Achieved in 2025, demonstrating advanced JavaScript proficiency and platform expertise."],
      },
      {
        icon: "🌟",
        title: "Bagisto Contributor",
        description: [
          "Contributed to a <span class='font-semibold text-purple-200'>20K+ GitHub stars</span> open-source e-commerce ecosystem.",
          "Implemented significant scalability improvements for core modules, enhancing platform robustness.",
        ],
      },
      {
        icon: "⚡",
        title: "Performance Optimization Lead",
        description: [
          "Reduced Product Detail Page (PDP) load time by <span class='font-semibold text-purple-200'>30%</span>, directly improving user experience.",
          "Improved e-commerce conversions by <span class='font-semibold text-purple-200'>12%</span> through targeted frontend optimizations and Core Web Vitals improvements.",
        ],
      },
      {
        icon: "🚚",
        title: "Logistics Platform Development",
        description: [
          "Developed critical features supporting <span class='font-semibold text-purple-200'>10K+ daily shipments</span> for a major freight platform.",
          "Integrated real-time tracking systems, significantly enhancing user experience and operational transparency.",
        ],
      },
      {
        icon: "🤝",
        title: "Community & Technical Leadership",
        description: [
          "Hosted SymfonyIndia Meetup, fostering knowledge sharing and community growth.",
          "Mentored junior engineers on best practices, scalable architecture, and career development.",
          "Provided architecture guidance and conducted thorough code reviews, ensuring high code quality.",
        ],
      },
    ],
  },
  projects: {
    heading: "Featured Projects",
    items: [
      {
        title: "New Relic – Cloud Cost Intelligence",
        description:
          "Built cloud cost monitoring and optimization dashboards processing large-scale telemetry data.",
        techStack: ["React.js", "TypeScript", "GraphQL"],
      },
      {
        title: "1-800-Flowers",
        description:
          "Improved PDP load time by 30% and increased conversions by 12% through frontend optimization.",
        techStack: ["React.js", "Next.js", "TypeScript"],
      },
      {
        title: "Uber Freight",
        description:
          "Developed shipment tracking capabilities supporting 10K+ daily shipments.",
        techStack: ["React.js", "Node.js", "Microservices"],
      },
      {
        title: "Bagisto",
        description:
          "Contributed to the 20K+ GitHub stars open-source e-commerce ecosystem.",
        techStack: ["Vue.js", "Laravel", "MySQL"],
      },
      {
        title: "Diffusion Cloud",
        description:
          "Built a real-time data platform with scalable architecture and automated testing.",
        techStack: ["Vue.js", "Node.js", "Jest"],
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        institution: "Moradabad Institute of Technology",
        degree: "Bachelor of Technology",
        fieldOfStudy: "Computer Science & Engineering",
        duration: "2013 – 2017",
        location: "Moradabad, Uttar Pradesh",
      },
    ],
  },
  contact: {
    heading: "Let's Build Something Amazing",
    description:
      "Open to senior frontend, full-stack and platform engineering opportunities. Feel free to reach out for collaborations or consulting.",
    email: "mehrotrix@gmail.com",
    phone: "+91-86508-83523",
    location: "Hyderabad, India",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham-mehrotra-983436139/",
        icon: <LinkedInIcon />,
        ariaLabel: "LinkedIn profile",
      },
      {
        name: "GitHub",
        url: "https://github.com/mehrotrix",
        icon: <GitHubIcon />,
        ariaLabel: "GitHub profile",
      },
    ],
  },
};
