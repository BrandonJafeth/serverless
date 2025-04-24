import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, IconButton } from '../ui/SectionComponents';

const IndustryImpactSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection 
      data={data}
      bgColor="bg-gray-900"
      contrast={true}
    >
      <div className="w-full text-center text-white">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
          textColor="text-gray-300" 
          titleColor="text-blue-400"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data.statistics && data.statistics.map((stat, index) => (
            <div key={index} className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
      </div>
    </BaseContentSection>
  );
};

export default IndustryImpactSection;