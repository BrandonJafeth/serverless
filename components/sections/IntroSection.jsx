import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, ContentImage } from '../ui/SectionComponents';

export const IntroSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection data={data}>
      <div className="w-full md:w-1/2">
        <SectionTitle title={data.title} subtitle={data.content} />
      </div>
      <ContentImage 
        src="/images/serverless-diagram.svg" 
        alt="Serverless Concept" 
      />
    </BaseContentSection>
  );
};

export default IntroSection;