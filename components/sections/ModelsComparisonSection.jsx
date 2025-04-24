// filepath: c:\Users\JDGua\OneDrive\Escritorio\Soporte Avanzado\serverless\components\sections\ModelsComparisonSection.jsx
import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

const ModelsComparisonSection = ({ data }) => {
  if (!data || !data.comparison) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-white">
      <div className="w-full">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
          textColor="text-gray-900"
        />
        
        {/* Tabla comparativa */}
        <div className="mt-10 overflow-hidden shadow-lg rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-4 px-6 text-left">Modelo</th>
                  <th className="py-4 px-6 text-left">Descripción</th>
                  <th className="py-4 px-6 text-left">Responsabilidad</th>
                  <th className="py-4 px-6 text-left">Escalabilidad</th>
                  <th className="py-4 px-6 text-left">Costo</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.comparison.map((model, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">{model.model}</td>
                    <td className="py-4 px-6 text-gray-900">{model.description}</td>
                    <td className="py-4 px-6 text-gray-900">{model.responsibility}</td>
                    <td className="py-4 px-6 text-gray-900">{model.scalability}</td>
                    <td className="py-4 px-6 text-gray-900">{model.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Visualización gráfica */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Comparación visual de responsabilidades</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {data.comparison.map((model, index) => (
              <div key={index} className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{model.model}</h4>
                </div>
                
                <div className="relative h-64">
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-200 rounded-lg w-full">
                    <div 
                      className={`
                        ${index === 0 ? 'bg-blue-700' : index === 1 ? 'bg-blue-500' : 'bg-blue-300'} 
                        rounded-lg text-white text-center py-2
                      `}
                      style={{ 
                        height: index === 0 ? '85%' : index === 1 ? '60%' : '30%'
                      }}
                    >
                      <span className="absolute bottom-2 left-0 right-0 text-center font-medium">
                        {index === 0 ? 'Alta' : index === 1 ? 'Media' : 'Baja'}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 text-center -mt-8">
                    <span className="font-semibold text-gray-900">Responsabilidad</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseContentSection>
  );
};

export default ModelsComparisonSection;