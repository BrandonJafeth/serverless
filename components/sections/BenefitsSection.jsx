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
      <div className="w-full text-center mb-12">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </BaseContentSection>
  );
};

export default BenefitsSection;