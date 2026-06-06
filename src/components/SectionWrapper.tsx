import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={`pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white ${className}`}>
      {children}
    </section>
  );
}
