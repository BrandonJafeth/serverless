// filepath: c:\Users\JDGua\OneDrive\Escritorio\Soporte Avanzado\serverless\components\sections\MonitoringToolsSection.jsx
import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

const MonitoringToolsSection = ({ data }) => {
  if (!data || !data.tools) return null;
  
  // Función para renderizar iconos según el tipo de herramienta
  const getToolIcon = (iconName) => {
    switch (iconName) {
      case 'cloudwatch':
        return (
          <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11.5-4.5a.5.5 0 00-1 0v5.5a.5.5 0 001 0v-5.5z" clipRule="evenodd" />
          </svg>
        );
      case 'azure-monitor':
        return (
          <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" />
          </svg>
        );
    }
  };

  // Función para obtener la URL según el tipo de herramienta
  const getToolUrl = (toolIcon) => {
    switch (toolIcon) {
      case 'cloudwatch':
        return 'https://aws.amazon.com/es/cloudwatch/';
      case 'azure-monitor':
        return 'https://azure.microsoft.com/es-es/products/monitor';
      default:
        return 'https://www.datadoghq.com/'; // URL por defecto para Datadog
    }
  };
  
  return (
    <BaseContentSection data={data} bgColor="bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
          textColor="text-gray-300"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {data.tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden 
              transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl 
              hover:shadow-blue-500/10"
            >
              {/* Encabezado con color según la herramienta */}
              <div className={`
                ${tool.icon === 'cloudwatch' ? 'bg-yellow-600 hover:bg-yellow-500' : 
                  tool.icon === 'azure-monitor' ? 'bg-blue-700 hover:bg-blue-600' : 
                  'bg-purple-700 hover:bg-purple-600'} 
                p-6 flex items-center transition-colors duration-300
              `}>
                <div className="mr-4 text-white">
                  {getToolIcon(tool.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <p className="text-white opacity-80">{tool.provider}</p>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="p-6 transition-all duration-300 hover:bg-gray-800">
                <p className="text-gray-300 mb-6">{tool.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-200 mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a 
                    href={getToolUrl(tool.icon)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      ${tool.icon === 'cloudwatch' ? 'bg-yellow-600 hover:bg-yellow-500' : 
                        tool.icon === 'azure-monitor' ? 'bg-blue-700 hover:bg-blue-600' : 
                        'bg-purple-700 hover:bg-purple-600'} 
                      text-white py-2 px-4 rounded-lg transition-all duration-300 inline-block
                      hover:shadow-lg hover:scale-105
                    `}
                  >
                    Explorar herramienta
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseContentSection>
  );
};

export default MonitoringToolsSection;