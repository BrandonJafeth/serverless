import React, { useRef } from 'react';
import { useAnimateOnScroll } from '../../hooks/useAnimations';

const AnimatedCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  className = ''
}) => {
  const cardRef = useRef(null);
  
  useAnimateOnScroll(cardRef, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 700,
    delay: delay
  });

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 flex flex-col items-center text-center h-full ${className}`}
    >
      {icon && (
        <div className="text-blue-600 mb-4 flex justify-center">
          <div className="h-16 w-16 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AnimatedCard;