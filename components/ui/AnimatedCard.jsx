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
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 ${className}`}
    >
      {icon && (
        <div className="text-blue-600 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AnimatedCard;