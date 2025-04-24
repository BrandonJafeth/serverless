import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, ContentImage, PointsList } from '../ui/SectionComponents';

const HowItWorksSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-900" reverse={true}>
      <ContentImage 
        src="/images/Serverless.jpg" 
        alt="Serverless Workflow" 
      />
      <div className="w-full md:w-1/2">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          titleColor="text-blue-400"
          textColor="text-gray-300"
        />
        <PointsList points={data.points} />
      </div>
    </BaseContentSection>
  );
};

export default HowItWorksSection;