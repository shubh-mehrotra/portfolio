import { Profile, NavLink, SocialLink, AboutHighlight } from '../../types/profile';
import React from 'react'; // Required for React.ReactNode types

// SVG Icons for Social Links (re-using from shubhamProfile for consistency, or define Himani-specific if needed)
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.395-2.535 4-2.798 4-2.798 2.759 0 5 2.209 5 4.669v7.364z" />
  </svg>
);


export const himaniProfile: Profile = {
  personalInfo: {
    name: "Himani Mehrotra",
    title: "Assistant Finance Manager",
    tagline:
      "Finance professional specializing in revenue management, MIS reporting, taxation, and financial compliance.",
    description:
      "Results-driven finance professional with 5+ years of progressive experience in Accounts Receivable, GST & TDS Compliance, Reconciliations, MIS Reporting, and month-end accounting activities. Skilled in ERP systems including Sage, Tally ERP, Tally Prime, and Chargebee.",
    resumeLink: "/resume/Himani-Mehrotra-Resume.pdf",
    profilePicture: "/dp/himani.png",
  },
  navLinks: [
    { id: "hero", name: "Home", url: "#hero" },
    { id: "about", name: "About", url: "#about" },
    { id: "experience", name: "Experience", url: "#experience" },
    { id: "skills", name: "Skills", url: "#skills" },
    { id: "projects", name: "Portfolio", url: "#projects" },
    { id: "achievements", name: "Achievements", url: "#achievements" },
    { id: "education", name: "Education", url: "#education" },
    { id: "contact", name: "Contact", url: "#contact" },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himani-mehrotra-a436a7256",
      icon: <LinkedInIcon />,
      ariaLabel: "LinkedIn profile",
    },
  ],
  hero: {
    heading: "Assistant Finance Manager",
    subheading:
      "Driving financial accuracy, compliance, and business growth through data-driven decision making.",
    callToAction: {
      text: "View Experience",
      url: "#experience",
    },
    image: "/dp/himani.png",
    techStackBadges: [
      "SAP FICO",
      "S/4HANA",
      "Tally Prime",
      "Tally ERP",
      "Sage ERP",
      "Chargebee",
      "Power BI",
      "Advanced Excel",
    ],
    resumeButtonText: "Download Resume",
  },
  about: {
    heading: "About Himani",
    intro: "Hi, I'm Himani! I am a Finance and Accounts professional with over 5 years of progressive experience handling critical financial operations, compliance framework tracking, and advanced reporting systems.",
    expertise: "My expertise lies in managing SaaS-based finance operations, executing complex revenue and payment gateway reconciliations, and overseeing robust end-to-end tax compliances. I have a strong foundation in modern ERP workflows and advanced financial analytics tools.",
    trackRecord: "I have successfully managed month-end closing activities, coordinated seamless statutory and internal audits, and streamlined accounts receivable systems for operational efficiency.",
    certificationSummary: "Certified in SAP FICO & S/4HANA by Henry Harvin Education, Advanced Excel, and hold a Diploma in Financial Accounting.",
    highlights: [
      { icon: <span>✨</span>, title: "Compliance-Driven", description: "Ensuring zero-penalty and timely GST and TDS filings across multiple financial periods." },
      { icon: <span>📊</span>, title: "Analytical Approach", description: "Utilizing Advanced Excel and Power BI for deep financial, revenue, and management MIS reporting." },
      { icon: <span>💡</span>, title: "Process Streamliner", description: "Optimizing collection follow-ups, payment gateways, and training incoming finance team members." },
    ],
  },
  skills: {
    heading: "Core Expertise",
    categories: [
      {
        name: "Finance & Compliance",
        skills: [
          { name: "GST Compliance (GSTR-1, 2B, 3B, 9)" },
          { name: "E-Invoicing" },
          { name: "TDS Compliance (Sec 194A, 192, 194C, 194H, 194I, 194J, 194Q)" },
          { name: "TCS" },
          { name: "Audit Coordination & Documentation" },
        ],
      },
      {
        name: "Reporting & Analysis",
        skills: [
          { name: "MIS Reporting" },
          { name: "Management Reporting" },
          { name: "Product P&L" },
          { name: "Aging Analysis" },
          { name: "Revenue & Expense Reports" },
        ],
      },
      {
        name: "ERP & Tools",
        skills: [
          { name: "Sage ERP" },
          { name: "Tally Prime & Tally ERP" },
          { name: "Chargebee" },
          { name: "Power BI" },
          { name: "Advanced Excel (Pivot, VLOOKUP, HLOOKUP, SUMIF)" },
        ],
      },
      {
        name: "Operations & Payment Gateways",
        skills: [
          { name: "Accounts Receivable (AR)" },
          { name: "Accounts Payable (AP)" },
          { name: "Deferred Revenue Tracking" },
          { name: "GL & Bank Reconciliation" },
          { name: "Stripe, PayPal, PayU Systems" }
        ]
      }
    ],
  },
  experience: {
    heading: "Professional Experience",
    items: [
      {
        company: "Threecolts India Private Limited",
        role: "Assistant Finance Manager",
        duration: "Sep 2024 – Apr 2026",
      },
      {
        company: "Cedcoss Technology Private Limited",
        role: "Accountant",
        duration: "Apr 2021 – Aug 2024",
      },
      {
        company: "M/s True Partner Business Consultant",
        role: "Account & Finance Trainee",
        duration: "Jan 2020 – Mar 2021",
      },
    ],
  },
  projects: {
    heading: "Key Finance Frameworks Managed",
    items: [
      {
        title: "SaaS Subscription Billing & AR Architecture",
        description: "Managed Accounts Receivable activities including billing schemas, automated invoice creation, and aging analysis for international sales streams.",
        techStack: ["Chargebee", "Sage ERP", "Advanced Excel"],
        category: "Revenue Operations",
        features: ["SaaS subscription billing tracking", "Deferred revenue management", "Revenue sheet structures", "Customer dispute handling"],
      },
      {
        title: "Cross-Border Payment Gateway Reconciliation System",
        description: "Formulated robust routines to securely process and map client collections across global clearing and transactional gateways.",
        techStack: ["PayPal", "Stripe", "PayU", "Bank Transfers"],
        category: "Financial Control",
        features: ["Payment confirmation tracking", "Multi-currency bank settlement", "Discrepancy rectification", "Month-end accounting logs"],
      },
      {
        title: "Corporate Indirect & Direct Tax Compliance Matrix",
        description: "Directed processing modules for multi-tiered direct and indirect statutory tax laws to ensure timely institutional submissions.",
        techStack: ["GST Portals", "Tally Prime", "Sage ERP", "Government Utilities"],
        category: "Taxation & Compliance",
        features: ["GSTR-1, 2B, 3B, and annual GSTR-9 filings", "E-invoicing validation", "TDS calculations across 7+ chapters", "TCS structural calculations"],
      },
    ],
  },
  achievements: {
    heading: "Key Achievements",
    items: [
      {
        icon: "🏆",
        title: "Zero-Penalty Statutory Compliance",
        description: [
          "Ensured 100% accurate GST and TDS compliance within strict reporting timelines across consecutive filing periods."
        ],
      },
      {
        icon: "⚡",
        title: "Optimized Accounts Receivable",
        description: [
          "Significantly improved Accounts Receivable tracking, aging visibility, and payment follow-up processes."
        ],
      },
      {
        icon: "✅",
        title: "Audit Excellence & Training Leadership",
        description: [
          "Coordinated seamlessly with statutory and internal auditors to rectify ledger discrepancies, while leading process training for new team members."
        ],
      },
    ],
  },
  certifications: {
    heading: "Certifications",
    items: [
      {
        name: "SAP FICO & S/4HANA",
        issuer: "Henry Harvin Education",
        dateIssued: "",
      },
      {
        name: "Advanced Excel Training",
        issuer: "Professional Certification",
        dateIssued: "",
      },
      {
        name: "Diploma in Financial Accounting – Tally ERP",
        issuer: "National Development Foundation",
        dateIssued: "",
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        institution: "University of Lucknow",
        degree: "Bachelor of Commerce (B.Com)",
        duration: "2013 – 2016",
        location: "Lucknow, Uttar Pradesh, India",
      },
      {
        institution: "University of Lucknow",
        degree: "Master of Commerce (M.Com)",
        duration: "2016 – 2018",
        location: "Lucknow, Uttar Pradesh, India",
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    description:
      "Open to finance, accounting, reporting, taxation, and compliance opportunities.",
    email: "himanimehrotra959@gmail.com",
    phone: "7843979800",
    location: "Lucknow, Uttar Pradesh",
  },
};
