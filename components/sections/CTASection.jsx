import React from 'react';
import { SectionTitle } from '../ui/SectionComponents';

const CTASection = ({ data }) => {
  if (!data) return null;
  
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.title}</h2>
        <a 
          href={data.url}
          className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors text-lg"
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;