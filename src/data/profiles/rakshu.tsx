import { Profile } from "@/types/profile";

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.395-2.535 4-2.798 4-2.798 2.759 0 5 2.209 5 4.669v7.364z" />
  </svg>
);

// New Icon Components
const HospitalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const CertifiedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const PublicHealthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const SpecializedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </svg>
);


export const rakshuProfile: Profile = {
  personalInfo: {
    name: "Rakshita Mehra",
    title: "Executive Nutritionist & Dietitian",
    tagline:
      "Imparting healthy nutritional practices through clinical dietetics, sports nutrition, and gut health expertise.",
    description:
      "Clinical Nutritionist and Dietitian with comprehensive experience across multi-speciality hospitals and wellness platforms. Specialized in medical nutrition therapy, pediatric/maternal nutrition, gut health tracking, and sports dietetics.",
    resumeLink: "/resume/Rakshita-Mehra-Resume.pdf",
    profilePicture: "/dp/rakshita.png",
  },
  navLinks: [
    { id: "hero", name: "Home", url: "#hero" },
    { id: "about", name: "About", url: "#about" },
    { id: "experience", name: "Experience", url: "#experience" },
    { id: "skills", name: "Skills", url: "#skills" },
    { id: "projects", name: "Frameworks & Research", url: "#projects" },
    { id: "achievements", name: "Achievements", url: "#achievements" },
    { id: "education", name: "Education", url: "#education" },
    { id: "contact", name: "Contact", url: "#contact" },
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: <LinkedInIcon />, ariaLabel: "LinkedIn profile" },
  ],
  hero: {
    heading: "Executive Nutritionist & Dietitian",
    subheading:
      "Clinical Nutrition • Sports Dietetics • Gut Health • Medical Nutrition Therapy",
    callToAction: {
      text: "View My Experience",
      url: "#experience",
    },
    image: "/images/hero_rakshita.jpg",
    techStackBadges: [
      "Clinical Dietetics",
      "Sports Nutrition",
      "Gut Health",
      "Diabetes Management",
      "OPD Counseling",
    ],
    resumeButtonText: "Download Resume",
  },
  about: {
    heading: "About Me",
    intro: "I am an <span class='text-purple-300 font-semibold'>Executive Nutritionist</span> dedicated to enhancing public and patient health through targeted, evidence-based nutritional protocols.",
    expertise: "My clinical core focuses on executing detailed <span class='text-white font-medium'>ward rounds</span>, formulating highly customized <span class='text-white font-medium'>medical meal planning</span> formulas, and guiding outpatient interventions across complex disease tracks.",
    trackRecord: "I have successfully supported patient recovery frameworks across premier healthcare networks like <span class='text-white font-medium'>Cloudnine Group of Hospitals</span>, <span class='text-white font-medium'>Max Super Speciality</span>, and <span class='text-white font-medium'>Safdarjung Hospital</span>.",
    certificationSummary: "As a multi-certified professional holding advanced qualifications in <span class='text-purple-300 font-semibold'>Sports Nutrition and Gut Health</span>, I integrate modern functional nutrition with classic medical recovery guidelines.",
    highlights: [
      {
        icon: <HospitalIcon />,
        title: "Clinical Excellence",
        description: "Inpatient meal optimization & ICU calorie charting",
      },
      {
        icon: <CertifiedIcon />,
        title: "Multi-Certified",
        description: "Diabetes Educator & FSSAI Food Safety Supervisor",
      },
      {
        icon: <PublicHealthIcon />,
        title: "Public Health Voice",
        description: "Published health columns in top-tier national media platforms",
      },
      {
        icon: <SpecializedIcon />,
        title: "Functional Nutrition",
        description: "Specializations in Sports, Gut, and Maternal Care tracks",
      },
    ],
  },
  skills: {
    heading: "Core Expertise",
    categories: [
      {
        name: "Clinical Nutrition & Dietetics",
        icon: <span>🏥</span>,
        skills: [
          { name: "Medical Nutrition Therapy (MNT)", icon: "🩺", level: "Expert" },
          { name: "ICU Calorie Charting", icon: "📊", level: "Advanced" },
          { name: "IPD/OPD Counseling", icon: "🤝", level: "Expert" },
          { name: "Maternal & Pediatric Nutrition", icon: "👶", level: "Advanced" },
          { name: "Food & Drug Interactions", icon: "💊", level: "Advanced" },
        ],
      },
      {
        name: "Specialized Functional Tracks",
        icon: <span>🌱</span>,
        skills: [
          { name: "Sports Nutrition", icon: "🏃", level: "Advanced" },
          { name: "Gut Health Protocols", icon: "🦠", level: "Advanced" },
          { name: "Diabetes Management", icon: "🩸", level: "Expert" },
          { name: "Weight Management Systems", icon: "⚖️", level: "Expert" },
        ],
      },
      {
        name: "Operations & Compliance",
        icon: <span>📋</span>,
        skills: [
          { name: "FNB Handling & Standards", icon: "🍽️", level: "Advanced" },
          { name: "Food Safety Management (FSSAI)", icon: "🛡️", level: "Advanced" },
          { name: "Patient Progress Tracking", icon: "📝", level: "Expert" },
          { name: "Diet Census Auditing", icon: "🔢", level: "Advanced" },
        ],
      },
    ],
  },
  experience: {
    heading: "Work History",
    items: [
      {
        company: "Cloudnine Group of Hospitals, Noida",
        role: "Executive Nutritionist",
        duration: "July 2023 – June 2025",
      },
      {
        company: "Navast Institute of Nutrition and Dietetics, Ghaziabad",
        role: "Nutrition Educator",
        duration: "Feb 2023 – October 2023",
      },
      {
        company: "Pushpawati Singhania Hospital and Research Institute, Delhi",
        role: "Junior Dietician",
        duration: "June 2022 – January 2023",
      },
      {
        company: "Cooq Health and Wellness Company, India",
        role: "Clinical Nutritionist",
        duration: "July 2021 – May 2022",
      },
    ],
  },
  achievements: {
    heading: "Achievements & Columns",
    items: [
      {
        icon: "🏅",
        title: "Safdarjung Hospital Poster Competition Gold Medalist",
        description: ["Awarded 1st position in structural healthcare visual data presentation on the occasion of Doctor’s Day."],
      },
      {
        icon: "📰",
        title: "Widely Published Nutrition Columnist",
        description: [
          "Authored verified healthcare articles in <span class='font-semibold text-purple-200'>The Hindustan Times</span>, <span class='font-semibold text-purple-200'>The Times of India Online</span>, <span class='font-semibold text-purple-200'>News18 Lifestyle</span>, and other national media channels.",
        ],
      },
      {
        icon: "🏆",
        title: "Rohansh Publication Literary Gold Medal",
        description: [
          "Recognized with a Gold Medal and domain certification for actively operating as an educational writer within the Food and Nutrition domain.",
        ],
      },
      {
        icon: "🎤",
        title: "Academic & Institutional Guest Speaker Roles",
        description: [
          "Invited to speak on Nutritional Psychiatry at Delhi University (Institute of Home Economics) and Dietary Interventions in Hair and Skin care (Lady Irwin College).",
          "Conducted targeted clinical presentations on Type 1 Diabetes Mellitus and Ovarian Cancer tracks for the Navast Institute.",
        ],
      },
    ],
  },
  projects: {
    heading: "Featured Frameworks & Research",
    items: [
      {
        title: "Clinical Research: Dietary Fiber & Type 2 Diabetes Management",
        description: "Formulated a deep-dive academic research thesis charting the structural biochemical influence of optimized high-fiber dietary intakes on glycemic indices and metabolic parameters of diagnosed diabetic profiles.",
        techStack: ["Clinical Research", "Metabolic Profiling", "Data Tracking"],
        category: "Research & Dissertation",
        features: ["Glycemic load evaluation matrices", "Fiber profile indexing models", "Inpatient metabolic observation modules"],
      },
      {
        title: "Critical Intensive Care Unit Calorie Charting Systems",
        description: "Engineered strict calculation routines during clinical tenure at Max Super Speciality Hospital to track, balance, and update structural caloric targets for patients inside the Intensive Care Unit.",
        techStack: ["Caloric Mapping", "ICU Workflow Systems", "Enteral/Parenteral Auditing"],
        category: "Clinical Analytics",
        features: ["Daily ward census cross-matching", "Metabolic status logging", "Macronutrient fluid balances"],
      },
      {
        title: "Sadday Sadev NGO Community Public Health Infrastructure",
        description: "Spearheaded nutrition awareness infrastructure, fundraising drives, and public instructional webinars during emergency pandemic response phases to support families from lower socio-economic backgrounds.",
        techStack: ["Public Health Engagement", "Fundraising Operations", "Webinar Production"],
        category: "Community Welfare",
        features: ["Low-cost nutritious meal profiling", "Maternal micro-nutrient access frameworks", "Public safety educational mapping"],
      },
    ],
  },
  education: {
    heading: "Education & Specialized Training",
    items: [
      {
        institution: "Indian Institute of Skill Development Training",
        degree: "Diploma in Sports Nutrition",
        fieldOfStudy: "Sports Nutrition",
        duration: "2023",
        location: "India (80%)",
      },
      {
        institution: "Fab Academy",
        degree: "Diploma in Gut Health",
        fieldOfStudy: "Gastrointestinal Health & Nutrition",
        duration: "2022",
        location: "California, US (80%)",
      },
      {
        institution: "Amity University",
        degree: "Master of Science (M.Sc)",
        fieldOfStudy: "Foods and Nutrition",
        duration: "2020 – 2022",
        location: "Noida, Uttar Pradesh, India (8.6 CGPA)",
      }, {
        institution: "Lady Irwin College, Delhi University",
        degree: "Bachelor of Science (B.Sc)",
        fieldOfStudy: "Home Science",
        duration: "2017 – 2020",
        location: "Delhi, India (8.45 CGPA)",
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    description: "Open to senior roles across clinical care ecosystems, healthcare consultancies, and digital wellness platforms.",
    email: "rakshita.mehra@gmail.com",
    phone: "+91-8920688892",
    location: "Noida / Delhi NCR, India",
  },
};
