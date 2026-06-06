import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import the functions to get profile data dynamically
import { getProfileKeyFromUrl, getProfile } from "@/data/profile";
import { headers } from 'next/headers'; // Import headers for server-side URL access

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Make metadata an async function to use await with headers()
export async function generateMetadata(): Promise<Metadata> {
  // --- Dynamic SEO Data Extraction ---
  // Get the full URL from the request headers on the server
  const headersList = await headers();
  const protocol = headersList.get('x-forwarded-proto') 
    || (process.env.NODE_ENV === 'production' ? 'https' : 'http');
  const host = headersList.get('x-forwarded-host') 
    || headersList.get('host');

  // ✅ Use 'next-url' — this is the actual requested URL path in App Router
  const path = headersList.get('next-url') || '/';
  const fullUrl = `${protocol}://${host}${path}`;

  const currentProfileKey = getProfileKeyFromUrl(fullUrl);
  const currentProfile = getProfile(currentProfileKey);

  const personalName = currentProfile.personalInfo.name;
  const personalTitle = currentProfile.personalInfo.title;
  const personalDescription = currentProfile.personalInfo.description;

  // Base URL for the portfolio (e.g., https://yourportfolio.com)
  const baseUrl = `${protocol}://${host}`;
  // Add the specific image from public/dp/himani.png
  const currentProfileDpPath = `${baseUrl}/dp/${currentProfileKey}.png`;

  // Combine all images for Open Graph and Twitter
  const allMetaImages = [
    {
      url: currentProfileDpPath,
      width: 1200, // Standard OG image width
      height: 630, // Standard OG image height
      alt: `${personalName} Portfolio`,
    },
  ];

  // Construct keywords
  const baseKeywords = [
    personalName,
    personalTitle,
    "Portfolio",
    "Developer",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Full-stack",
    "Frontend",
    "Backend",
  ];
  // Add skills from profile if available
  const skillKeywords = currentProfile.skills?.categories.flatMap(cat => cat.skills.map(skill => skill.name)) || [];
  const allKeywords = [...new Set([...baseKeywords, ...skillKeywords])]; // Use Set to remove duplicates

  // Attempt to find a Twitter handle from social links
  const twitterSocialLink = currentProfile.contact?.socialLinks?.find(link => link.name.toLowerCase() === 'twitter');
  const twitterHandle = twitterSocialLink?.url.split('/').pop() ? `@${twitterSocialLink.url.split('/').pop()}` : "@yourtwitterhandle";
  // --- End Dynamic SEO Data Extraction ---

  return {
    title: {
      default: `${personalName} - ${personalTitle} Portfolio`,
      template: `%s | ${personalName} Portfolio`,
    },
    description: personalDescription,
    keywords: allKeywords,
    authors: [{ name: personalName, url: baseUrl }],
    creator: personalName,
    openGraph: {
      title: `${personalName} - ${personalTitle} Portfolio`,
      description: personalDescription,
      url: fullUrl, // Use the full URL for the specific page
      siteName: `${personalName} Portfolio`,
      images: allMetaImages, // Use the combined array of images
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${personalName} - ${personalTitle} Portfolio`,
      description: personalDescription,
      creator: twitterHandle,
      images: allMetaImages.map(img => img.url), // Twitter images can be an array of URLs
    },
    // Optional: Add favicon links if not already handled by Next.js default
    // icons: {
    //   icon: "/favicon.ico",
    //   shortcut: "/favicon-16x16.png",
    //   apple: "/apple-touch-icon.png",
    // },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
