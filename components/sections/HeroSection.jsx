import React, { useRef } from 'react';
import { useAnimateOnMount, useTextBounceAnimation, splitTextIntoSpans } from '../../hooks/useAnimations';

const HeroSection = ({ data }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  // Aplicamos animación de rebote al título
  useTextBounceAnimation(titleRef);

  // Animaciones simples para el subtítulo y descripción
  useAnimateOnMount(subtitleRef, {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    delay: 600
  });

  useAnimateOnMount(descriptionRef, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    delay: 900
  });

  useAnimateOnMount(buttonsRef, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: 1200
  });

  if (!data) return null;

  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="serverless-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
                <path d="M0,10 L100,10 M10,0 L10,100 M20,0 L20,100 M30,0 L30,100 M40,0 L40,100 M50,0 L50,100 M60,0 L60,100 M70,0 L70,100 M80,0 L80,100 M90,0 L90,100" stroke="white" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            {Array(10).fill().map((_, i) => (
              <path
                key={i}
                d={`M${i * 10},100 L${i * 10},0 L${(i + 1) * 10},0 L${(i + 1) * 10},100 Z`}
                fill="url(#serverless-pattern)"
                opacity={0.1 + Math.random() * 0.1}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center py-16">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 flex flex-row justify-center flex-wrap"
        >
          {splitTextIntoSpans(data.title)}
        </h1>
        <h2 
          ref={subtitleRef}
          className="text-xl md:text-3xl font-medium text-blue-100 mb-6 opacity-0"
        >
          {data.subtitle}
        </h2>
        <p 
          ref={descriptionRef}
          className="text-lg text-blue-100 max-w-3xl mx-auto opacity-0"
        >
          {data.description}
        </p>
        <div 
          ref={buttonsRef}
          className="mt-10 flex justify-center space-x-4 opacity-0"
        >
          <button className="px-8 py-3 bg-white text-blue-800 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Conocer más
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
            Ver demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;