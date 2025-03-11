// Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode; // This can be used for additional content like game lists or images
}

const Section: React.FC<SectionProps> = ({ title, description, children }) => {
  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <p className="text-center">{description}</p>
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
