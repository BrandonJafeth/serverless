import React from 'react';
import { SectionTitle } from '../ui/SectionComponents';

const CTASection = ({ data }) => {
  if (!data) return null;
  
  return (
    <section className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">{data.title}</h2>
        <a 
          href={data.url}
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-lg"
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;