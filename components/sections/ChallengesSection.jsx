import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, ContentImage, Card } from '../ui/SectionComponents';

const ChallengesSection = ({ data }) => {
  if (!data || !data.challenges) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-white" reverse={true}>
      <ContentImage 
        src="/images/serverless-flow.svg" 
        alt="Serverless Challenges" 
      />
      <div className="w-full md:w-1/2">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content}
          titleColor="text-blue-700" 
        />
        <div className="space-y-6">
          {data.challenges.map((challenge, index) => (
            <Card key={index}>
              <h3 className="font-semibold text-xl mb-2 text-blue-600">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </BaseContentSection>
  );
};

export default ChallengesSection;