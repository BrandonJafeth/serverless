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
          textColor="text-gray-900" 
        />
      </div>
      
      {/* Aplicaciones - ahora con grid de 2x4 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {data.applications.map((app, index) => (
          <AnimatedCard
            key={index}
            icon={getIcon(app.icon)}
            title={app.title}
            description={app.description}
            delay={index * 100}
            className="h-full text-gray-900"
          />
        ))}
      </div>
      
      {/* Casos de uso si existen */}
      {data.useCases && data.useCases.length > 0 && (
        <div className="w-full mt-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">Casos de uso reales</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900">{useCase.title}</h4>
                <p className="text-gray-900 mb-6">{useCase.description}</p>
                <div className="bg-blue-50 p-3 rounded">
                  <span className="font-medium text-blue-800">Impacto: </span>
                  <span className="text-blue-700">{useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </BaseContentSection>
  );
};

export default TechSupportSection;