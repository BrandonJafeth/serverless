import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle, IconButton } from '../ui/SectionComponents';

const FutureSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection 
      data={data}
      bgColor="bg-gradient-to-br from-gray-900 to-gray-800"
      contrast={true}
    >
      <div className="w-full text-white">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          textColor="text-gray-300"
          titleColor="text-blue-400" 
        />
        
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Tendencias Emergentes</h3>
          <ul className="space-y-4">
            {data.trends && data.trends.map((trend, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-7 w-7 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 shadow-md">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-gray-300">{trend}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BaseContentSection>
  );
};

export default FutureSection;