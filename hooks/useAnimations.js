import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

// Hook para animar elementos al hacer scroll (versión mejorada)
export const useAnimateOnScroll = (ref, animationOptions) => {
  const animated = useRef(false);
  const isVisible = useRef(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    let observer = null;
    
    // Función para animar el elemento
    const animateElement = () => {
      if (animated.current) return;
      animated.current = true;
      
      try {
        // Verificar que animationOptions tenga valores válidos
        const validOptions = {};
        
        // Procesar opciones comunes
        ['duration', 'easing', 'delay'].forEach(option => {
          if (animationOptions[option] !== undefined) {
            validOptions[option] = animationOptions[option];
          }
        });
        
        // Asegurarse de que tenemos valores por defecto
        validOptions.easing = validOptions.easing || 'easeOutExpo';
        validOptions.duration = validOptions.duration || 800;
        
        // Procesar propiedades de animación (translateY, opacity, etc.)
        Object.keys(animationOptions).forEach(key => {
          if (!['duration', 'easing', 'delay'].includes(key)) {
            validOptions[key] = animationOptions[key];
          }
        });
        
        // Usar la función animate con propiedades verificadas
        animate(element, validOptions);
      } catch (error) {
        console.error('Error al ejecutar la animación:', error);
        console.error('Detalles del error:', error.message);
      }
    };
    
    // Configurar Intersection Observer para detectar cuando el elemento está en la vista
    const setupObserver = () => {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        
        // Si el elemento está entrando en el viewport
        if (entry.isIntersecting) {
          if (!isVisible.current) {
            isVisible.current = true;
            animateElement();
          }
        } else {
          // Si el elemento sale completamente del viewport, resetear para permitir
          // que se vuelva a animar cuando entre de nuevo
          if (entry.intersectionRatio === 0) {
            isVisible.current = false;
            animated.current = false;
          }
        }
      }, { 
        threshold: 0.1, // Un umbral bajo para activar temprano
        rootMargin: '0px 0px -10% 0px' // Activar un poco antes
      });
      
      observer.observe(element);
    };
    
    setupObserver();
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref, animationOptions]);
};

// Hook para animar elementos inmediatamente (sin esperar scroll)
export const useAnimateOnMount = (ref, animationOptions) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    try {
      // Verificar que animationOptions tenga valores válidos
      const validOptions = {};
      
      // Procesar opciones comunes
      ['duration', 'easing', 'delay'].forEach(option => {
        if (animationOptions[option] !== undefined) {
          validOptions[option] = animationOptions[option];
        }
      });
      
      // Asegurarse de que tenemos valores por defecto
      validOptions.easing = validOptions.easing || 'easeOutExpo';
      validOptions.duration = validOptions.duration || 800;
      
      // Procesar propiedades de animación (translateY, opacity, etc.)
      Object.keys(animationOptions).forEach(key => {
        if (!['duration', 'easing', 'delay'].includes(key)) {
          validOptions[key] = animationOptions[key];
        }
      });
      
      // Usar la función animate con propiedades verificadas
      animate(element, validOptions);
    } catch (error) {
      console.error('Error al ejecutar la animación:', error);
      console.error('Detalles del error:', error.message);
    }
  }, [ref, animationOptions]);
};

// Hook para animar texto con efecto de rebote - VERSIÓN CORREGIDA SIN FUNCTION BASED VALUE
export const useTextBounceAnimation = (containerRef, delay = 50) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    try {
      // Crear un scope para las animaciones
      const scope = createScope({
        root: containerRef.current
      });
      
      // Seleccionar todos los spans dentro del contenedor y animarlos con valores fijos
      scope.add(() => {
        animate('span', {
          // Property keyframes
          y: [
            { to: '-2.75rem', ease: 'outExpo', duration: 600 },
            { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
          ],
          // Property specific parameters
          rotate: {
            from: '-1turn',
            delay: 0
          },
          delay: 50, // Valor estático en lugar de función
          ease: 'inOutCirc',
          loopDelay: 1000,
          loop: true
        });
      });
      
      // Limpiar al desmontar
      return () => scope.revert();
    } catch (error) {
      console.error('Error al ejecutar la animación de texto:', error);
      console.error('Detalles del error:', error.message);
    }
  }, [containerRef, delay]);
};

// Función de utilidad para dividir texto en spans para animación
export const splitTextIntoSpans = (text) => {
  return text.split('').map((char, index) => 
    char === ' ' ? 
      <span key={index} className="inline-block px-1">&nbsp;</span> : 
      <span key={index} className="inline-block">{char}</span>
  );
};