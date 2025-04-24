import React from 'react';
import BaseContentSection from './BaseSection';
import AnimatedCard from '../ui/AnimatedCard';
import { SectionTitle } from '../ui/SectionComponents';
import { BenefitIcons, DefaultIcon } from '../ui/IconComponents';

const BenefitsSection = ({ data }) => {
  if (!data || !data.benefits) return null;
  
  // Función para obtener el icono según el tipo
  const getIcon = (iconName) => {
    return BenefitIcons[iconName] || DefaultIcon;
  };
  
  return (
    <BaseContentSection data={data} bgColor="bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <SectionTitle 
            title={data.title} 
            subtitle={data.content} 
            centered={true}
            titleColor="text-blue-600"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data.benefits.map((benefit, index) => (
            <AnimatedCard
              key={index}
              icon={getIcon(benefit.icon)}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </BaseContentSection>
  );
};

export default BenefitsSection;