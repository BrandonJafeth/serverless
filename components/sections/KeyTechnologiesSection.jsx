// filepath: c:\Users\JDGua\OneDrive\Escritorio\Soporte Avanzado\serverless\components\sections\KeyTechnologiesSection.jsx
import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

const KeyTechnologiesSection = ({ data }) => {
  if (!data || !data.technologies) return null;
  
  return (
    <BaseContentSection data={data} bgColor="bg-gray-800">
      <div className="w-full">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          centered={true}
          textColor="text-gray-300"
          titleColor="text-blue-400" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {data.technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-gray-700"
            >
              <div className={`h-2 ${
                tech.icon === 'aws' ? 'bg-yellow-500' : 
                tech.icon === 'azure' ? 'bg-blue-600' : 
                'bg-green-500'
              }`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    tech.icon === 'aws' ? 'bg-yellow-900 text-yellow-400' : 
                    tech.icon === 'azure' ? 'bg-blue-900 text-blue-400' : 
                    'bg-green-900 text-green-400'
                  }`}>
                    {tech.icon === 'aws' ? (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.75 13.5C18.75 14.5994 18.3811 15.6633 17.6956 16.5H20.25C21.0784 16.5 21.75 15.8284 21.75 15V12C21.75 11.1716 21.0784 10.5 20.25 10.5H17.6956C18.3811 11.3367 18.75 12.4006 18.75 13.5Z" />
                        <path d="M5.25 10.5H3.75C2.92157 10.5 2.25 11.1716 2.25 12V15C2.25 15.8284 2.92157 16.5 3.75 16.5H6.30435C5.6189 15.6633 5.25 14.5994 5.25 13.5C5.25 12.4006 5.6189 11.3367 6.30435 10.5H5.25Z" />
                        <path d="M10.125 16.5C10.125 17.743 11.132 18.75 12.375 18.75C13.618 18.75 14.625 17.743 14.625 16.5V10.5C14.625 9.25736 13.618 8.25 12.375 8.25C11.132 8.25 10.125 9.25736 10.125 10.5V16.5Z" />
                        <path d="M16.5 10.5H15.4456C16.1311 11.3367 16.5 12.4006 16.5 13.5C16.5 14.5994 16.1311 15.6633 15.4456 16.5H16.5C17.3284 16.5 18 15.8284 18 15V12C18 11.1716 17.3284 10.5 16.5 10.5Z" />
                        <path d="M7.5 15V12C7.5 11.1716 8.17157 10.5 9 10.5H9.30435C8.6189 11.3367 8.25 12.4006 8.25 13.5C8.25 14.5994 8.6189 15.6633 9.30435 16.5H9C8.17157 16.5 7.5 15.8284 7.5 15Z" />
                      </svg>
                    ) : tech.icon === 'azure' ? (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.25 21.75L21.75 15H15.75L14.25 21.75Z" />
                        <path d="M11.25 10.5L9 15.75H16.5L21 10.5H11.25Z" />
                        <path d="M6.75 21.75L4.5 15L2.25 9.75L9.75 10.5L6.75 21.75Z" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25Z" />
                        <path fill="white" d="M15.75 12C15.75 9.93 14.07 8.25 12 8.25C9.93 8.25 8.25 9.93 8.25 12C8.25 14.07 9.93 15.75 12 15.75C14.07 15.75 15.75 14.07 15.75 12Z" />
                        <path fill="currentColor" d="M15.75 6H8.25V8.25H15.75V6Z" />
                        <path fill="currentColor" d="M15.75 15.75H8.25V18H15.75V15.75Z" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-300">{tech.name}</h3>
                    <p className="text-gray-300 text-sm">{tech.provider}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{tech.description}</p>
                
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold text-gray-200 mb-2">Características clave:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseContentSection>
  );
};

export default KeyTechnologiesSection;