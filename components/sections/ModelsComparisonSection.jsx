import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

const ModelsComparisonSection = ({ data }) => {
  if (!data || !data.comparison) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-800">
      <div className="w-full">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true} 
          textColor="text-gray-300"
        />
        
        {/* Tabla comparativa */}
        <div className="mt-10 overflow-hidden shadow-lg rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="py-4 px-6 text-left">Modelo</th>
                  <th className="py-4 px-6 text-left">Descripción</th>
                  <th className="py-4 px-6 text-left">Responsabilidad</th>
                  <th className="py-4 px-6 text-left">Escalabilidad</th>
                  <th className="py-4 px-6 text-left">Costo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data.comparison.map((model, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-gray-700 transition-colors duration-200`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-300">{model.model}</td>
                    <td className="py-4 px-6 text-gray-300">{model.description}</td>
                    <td className="py-4 px-6 text-gray-300">{model.responsibility}</td>
                    <td className="py-4 px-6 text-gray-300">{model.scalability}</td>
                    <td className="py-4 px-6 text-gray-300">{model.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BaseContentSection>
  );
};

export default ModelsComparisonSection;