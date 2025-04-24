import React from 'react';
import AnimatedSection from '../ui/ParallaxSection';

const BaseContentSection = ({ 
  data, 
  children, 
  bgColor = "bg-gray-50", 
  reverse = false,
  contrast = false
}) => {
  if (!data) return null;
  
  return (
    <AnimatedSection 
      id={data.id} 
      animation={data.animation}
      bgColor={bgColor}
      reverse={reverse}
      contrast={contrast}
    >
      {children}
    </AnimatedSection>
  );
};

export default BaseContentSection;