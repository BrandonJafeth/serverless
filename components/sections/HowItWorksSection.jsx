import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, ContentImage, PointsList } from '../ui/SectionComponents';

const HowItWorksSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-100" reverse={true}>
      <ContentImage 
        src="/images/serverless-flow.svg" 
        alt="Serverless Workflow" 
      />
      <div className="w-full md:w-1/2">
        <SectionTitle title={data.title} subtitle={data.content} />
        <PointsList points={data.points} />
      </div>
    </BaseContentSection>
  );
};

export default HowItWorksSection;