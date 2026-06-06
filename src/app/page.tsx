"use client"; // This component uses client-side features like useState and useEffect

import { useState, useEffect } from "react";
import { NavLink } from "@/types/profile"; // Import NavLink type
import { ProfileProvider, useProfile } from "@/context/ProfileContext"; // Import ProfileProvider and useProfile hook
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen"; // Import the new LoadingScreen component
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Import the new ScrollToTopButton
import SectionWrapper from "@/components/SectionWrapper"; // Import the new SectionWrapper
import Education from "@/components/Education"; // Import the new Education component

// HomeContent is a client component that consumes the ProfileContext
function HomeContent() {
  const { profile: currentProfile, isLoading } = useProfile(); // Use the custom hook
  const [activeSection, setActiveSection] = useState("hero"); // State for active section

  useEffect(() => {
    if (!currentProfile) return; // Don't set up observer if profile isn't loaded yet

    // Intersection Observer for active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is roughly in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections dynamically based on navLinks
    const sections = currentProfile.navLinks?.map(link => document.getElementById(link.id)).filter(Boolean) as Element[];
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [currentProfile]); // Re-run observer setup if currentProfile changes

  if (isLoading || !currentProfile) {
    return <LoadingScreen />;
  }

  const navLinks: NavLink[] = currentProfile.navLinks || [];

  return (
    <main className="relative">
      <Navbar navLinks={navLinks} activeSection={activeSection} setActiveSection={setActiveSection} /> {/* Pass navLinks and setActiveSection */}
      {/* Render sections dynamically based on navLinks or explicitly if content is complex */}
      <SectionWrapper id="hero" className="pt-16 min-h-screen flex items-center justify-center">
        <Hero /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <SectionWrapper id="about">
        <About /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <SectionWrapper id="achievements">
        <Achievements /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <SectionWrapper id="education"> {/* Added Education Section */}
        <Education />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact /> {/* No need to pass profile prop */}
      </SectionWrapper>
      <Footer /> {/* No need to pass profile prop */}
      <ScrollToTopButton />
    </main>
  );
}

// The main Home component wraps HomeContent with ProfileProvider
export default function Home() {
  return (
    <ProfileProvider>
      <HomeContent />
    </ProfileProvider>
  );
}
