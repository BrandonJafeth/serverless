import React from 'react';
import BaseContentSection from './BaseSection';
import AnimatedCard from '../ui/AnimatedCard';
import { SectionTitle } from '../ui/SectionComponents';
import { TechSupportIcons, DefaultIcon } from '../ui/IconComponents';

const TechSupportSection = ({ data }) => {
  if (!data || !data.applications) return null;
  
  // Función para obtener el icono según el tipo
  const getIcon = (iconName) => {
    return TechSupportIcons[iconName] || DefaultIcon;
  };
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-50">
      <div className="w-full text-center mb-12">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.applications.map((app, index) => (
          <AnimatedCard
            key={index}
            icon={getIcon(app.icon)}
            title={app.title}
            description={app.description}
            delay={index * 100}
            className="h-full"
          />
        ))}
      </div>
    </BaseContentSection>
  );
};

export default TechSupportSection;