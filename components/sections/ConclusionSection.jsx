import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

const ConclusionSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-800">
      <div className="w-full max-w-6xl mx-auto">
        {/* Encabezado con efecto de subrayado animado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-blue-400 inline-block relative">
            {data.title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></span>
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">{data.subtitle || "Nuestro análisis sobre el paradigma Serverless"}</p>
        </div>
        
        {/* Tarjetas de conclusiones clave con efectos hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {data.keyPoints && data.keyPoints.map((point, index) => (
            <div 
              key={index}
              className="relative bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500 shadow-xl
                transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-300 ml-4 mt-2">{point.title}</h3>
              <p className="text-gray-300">{point.content}</p>
            </div>
          ))}
        </div>
        
        {/* Contenido principal con estilo de terminal/código */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden mb-12">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">conclusion.md</span>
          </div>
          <div className="p-6 font-mono text-base leading-relaxed">
            <div className="text-gray-300 whitespace-pre-line">
              {data.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 border-l-2 border-blue-500 pl-4 hover:border-blue-400 transition-colors text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        

      </div>
    </BaseContentSection>
  );
};

export default ConclusionSection;