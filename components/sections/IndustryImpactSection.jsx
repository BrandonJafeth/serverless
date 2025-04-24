import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, IconButton } from '../ui/SectionComponents';

const IndustryImpactSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection 
      data={data}
      bgColor="bg-blue-900"
      contrast={true}
    >
      <div className="w-full text-center text-white">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
          textColor="text-white" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data.statistics && data.statistics.map((stat, index) => (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
              <div className="text-white">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Casos de Estudio Destacados</h3>
          <ul className="space-y-3 text-left">
            {data.caseStudies && data.caseStudies.map((caseStudy, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 shadow-md">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-white">{caseStudy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BaseContentSection>
  );
};

export default IndustryImpactSection;