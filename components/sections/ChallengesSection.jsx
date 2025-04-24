import React from 'react';
import BaseContentSection from './BaseSection';

const ChallengeItem = ({ title, description }) => (
  <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg mb-4 hover:shadow-lg transition-shadow">
    <h3 className="text-blue-400 font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const ContentColumn = ({ title, items }) => (
  <div className="flex-1">
    <h2 className="text-blue-400 text-2xl font-bold mb-6">{title}</h2>
    <p className="text-gray-300 mb-8">
      Aunque Serverless ofrece numerosas ventajas, también presenta algunos desafíos 
      que deben considerarse:
    </p>
    
    <div className="space-y-4">
      {items.map((item, index) => (
        <ChallengeItem 
          key={index} 
          title={item.title} 
          description={item.description}
        />
      ))}
    </div>
  </div>
);

const ChallengesSection = ({ data }) => {
  if (!data || !data.challenges) return null;
  
  // Dividimos los desafíos en dos grupos para las columnas
  const halfLength = Math.ceil(data.challenges.length / 2);
  const firstHalf = data.challenges.slice(0, halfLength);
  const secondHalf = data.challenges.slice(halfLength);
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row w-full justify-between gap-16 md:gap-20">
          {/* Columna de Desafíos */}
          <ContentColumn title="Desafíos" items={firstHalf} />
          
          {/* Columna de Consideraciones */}
          <ContentColumn title="Consideraciones" items={secondHalf} />
        </div>
      </div>
    </BaseContentSection>
  );
};

export default ChallengesSection;