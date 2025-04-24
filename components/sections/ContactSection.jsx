import React from 'react';
import { SectionTitle } from '../ui/SectionComponents';

const ContactSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle 
          title={data.title} 
          subtitle={data.subtitle} 
          centered={true}
          titleColor="text-blue-400" 
          textColor="text-gray-300"
        />
        
        <div className="mt-8 text-gray-300">
          <p className="text-lg">Para más información, contáctanos directamente:</p>
          <a href={`mailto:${data.email}`} className="text-blue-400 hover:underline text-xl font-medium mt-4 inline-block">
            {data.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;