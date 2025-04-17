import React, { useRef } from 'react';
import { useAnimateOnScroll } from '../../hooks/useAnimations';

const AnimatedSection = ({ 
  id, 
  imageUrl, 
  children, 
  reverse = false,
  animation = 'fadeInUp',
  bgColor = 'bg-gray-50',
  height = 'py-24', // Padding vertical
  imgHeight = 'h-full', 
  contrast = false
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  // Configurar la animación al entrar en viewport
  const animationProps = {};
  
  switch (animation) {
    case 'fadeInUp':
      animationProps.opacity = [0, 1];
      animationProps.translateY = [50, 0];
      break;
    case 'fadeInLeft':
      animationProps.opacity = [0, 1];
      animationProps.translateX = [-100, 0];
      break;
    case 'fadeInRight':
      animationProps.opacity = [0, 1];
      animationProps.translateX = [100, 0];
      break;
    case 'zoomIn':
      animationProps.opacity = [0, 1];
      animationProps.scale = [0.9, 1];
      break;
    default:
      animationProps.opacity = [0, 1];
  }
  
  // Usar el hook para animar al hacer scroll
  useAnimateOnScroll(contentRef, animationProps);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`${bgColor} ${height} flex items-center justify-center w-full overflow-hidden relative`}
    >
      <div
        ref={contentRef}
        className={`container mx-auto px-4 md:px-8 z-10 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;