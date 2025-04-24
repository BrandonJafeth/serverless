import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';
import { TechSupportIcons, DefaultIcon } from '../ui/IconComponents';

const TechSupportSection = ({ data }) => {
  if (!data || !data.applications) return null;
  
  // Función para obtener el icono según el tipo
  const getIcon = (iconName) => {
    return TechSupportIcons[iconName] || DefaultIcon;
  };

  // Función para obtener el color según el tipo de aplicación
  const getCardStyle = (iconName) => {
    switch(iconName) {
      case 'chatbot':
        return {
          icon: 'bg-blue-500 text-white',
          border: 'border-blue-400'
        };
      case 'monitoring':
        return {
          icon: 'bg-blue-600 text-white',
          border: 'border-blue-500'
        };
      case 'diagnostic':
        return {
          icon: 'bg-blue-700 text-white',
          border: 'border-blue-600'
        };
      case 'ticket':
        return {
          icon: 'bg-blue-800 text-white',
          border: 'border-blue-700'
        };
      default:
        return {
          icon: 'bg-blue-600 text-white',
          border: 'border-blue-500'
        };
    }
  };
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-800">
      <div className="w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Aplicaciones en Soporte Técnico Avanzado</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">La tecnología Serverless ofrece nuevas posibilidades para mejorar y transformar los servicios de soporte técnico avanzado:</p>
        </div>
        
        {/* Aplicaciones con nuevo diseño */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-6xl mx-auto">
          {data.applications.map((app, index) => {
            const style = getCardStyle(app.icon);
            return (
              <div 
                key={index} 
                className={`w-64 bg-gray-900 rounded-lg shadow-md border-t-4 ${style.border} p-5 text-center flex flex-col items-center`}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${style.icon}`}>
                  {getIcon(app.icon)}
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">{app.title}</h3>
                <p className="text-gray-300 text-sm">{app.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Casos de uso si existen - nuevo diseño */}
        {data.useCases && data.useCases.length > 0 && (
          <div className="w-full mt-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-200">Casos de uso reales</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.useCases.map((useCase, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-lg shadow-md border border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-blue-300">{useCase.title}</h4>
                    <p className="text-gray-300 mb-6 text-sm">{useCase.description}</p>
                    
                    <div className="mt-auto">
                      <p className="text-sm font-semibold text-blue-300">
                        Impacto: <span className="text-blue-400">{useCase.impact}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseContentSection>
  );
};

export default TechSupportSection;