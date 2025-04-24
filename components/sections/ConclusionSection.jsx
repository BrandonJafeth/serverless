import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

const ConclusionSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-800">
      <div className="w-full text-center max-w-4xl mx-auto">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true}
          textColor="text-gray-300"
          titleColor="text-blue-400"
        />
      </div>
    </BaseContentSection>
  );
};

export default ConclusionSection;