import React from 'react';

const IconButton = ({ icon, className = '', children }) => {
  return (
    <span className={`flex-shrink-0 h-7 w-7 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 shadow-md ${className}`}>
      {icon || (
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>
  );
};

const SectionTitle = ({ title, subtitle, centered = false, textColor = "text-gray-300", titleColor = "text-blue-400" }) => {
  return (
    <div className={`w-full ${centered ? 'text-center' : ''} mb-6`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`text-lg ${textColor} ${centered ? 'max-w-3xl mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
};

const ContentImage = ({ src, alt, maxHeight = '400px' }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full h-auto"
        style={{maxHeight}}
      />
    </div>
  );
};

const PointsList = ({ points }) => {
  if (!points || points.length === 0) return null;
  
  return (
    <ul className="space-y-4">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <IconButton />
          <span className="text-lg font-medium text-gray-300">{point}</span>
        </li>
      ))}
    </ul>
  );
};

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-900 p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export { IconButton, SectionTitle, ContentImage, PointsList, Card };