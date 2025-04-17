import React from 'react';
import AnimatedSection from '../ui/ParallaxSection';
import AnimatedCard from '../ui/AnimatedCard';

// Componente para la sección de Introducción
export const IntroSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <AnimatedSection id={data.id} imageUrl={data.imageUrl || '/images/serverless-diagram.svg'} animation={data.animation}>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{data.content}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="/images/serverless-diagram.svg" 
          alt="Serverless Concept" 
          className="max-w-full h-auto"
          style={{maxHeight: '400px'}}
        />
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección Cómo Funciona
export const HowItWorksSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <AnimatedSection id={data.id} imageUrl={data.imageUrl || '/images/serverless-flow.svg'} animation={data.animation} reverse={true} bgColor="bg-gray-100">
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="/images/serverless-flow.svg" 
          alt="Serverless Workflow" 
          className="max-w-full h-auto"
          style={{maxHeight: '400px'}}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{data.content}</p>
        <ul className="space-y-3">
          {data.points && data.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección de Beneficios
export const BenefitsSection = ({ data }) => {
  if (!data || !data.benefits) return null;
  
  // Iconos para los beneficios
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'cost-reduction':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'scalability':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'development-time':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'operational':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };
  
  return (
    <AnimatedSection id={data.id} animation={data.animation} bgColor="bg-white">
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{data.content}</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.benefits.map((benefit, index) => (
          <AnimatedCard
            key={index}
            icon={getIcon(benefit.icon)}
            title={benefit.title}
            description={benefit.description}
            delay={index * 100}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección de Impacto en la Industria
export const IndustryImpactSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <AnimatedSection 
      id={data.id} 
      imageUrl={data.imageUrl || '/images/serverless-flow.svg'} 
      animation={data.animation}
      bgColor="bg-blue-900"
      contrast={true}
    >
      <div className="w-full text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">{data.content}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data.statistics && data.statistics.map((stat, index) => (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Casos de Estudio Destacados</h3>
          <ul className="space-y-2 text-left">
            {data.caseStudies && data.caseStudies.map((caseStudy, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 bg-blue-500 rounded-full flex items-center justify-center mr-2 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{caseStudy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección de Aplicaciones en Soporte Técnico
export const TechSupportSection = ({ data }) => {
  if (!data || !data.applications) return null;
  
  // Iconos para las aplicaciones
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'chatbot':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case 'monitoring':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'diagnostic':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'tickets':
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };
  
  return (
    <AnimatedSection id={data.id} imageUrl={data.imageUrl || '/images/serverless-diagram.svg'} animation={data.animation} bgColor="bg-gray-50">
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{data.content}</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.applications.map((app, index) => (
          <AnimatedCard
            key={index}
            icon={getIcon(app.icon)}
            title={app.title}
            description={app.description}
            delay={index * 100}
            className="h-full"
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección de Desafíos
export const ChallengesSection = ({ data }) => {
  if (!data || !data.challenges) return null;
  
  return (
    <AnimatedSection id={data.id} animation={data.animation} reverse={true} bgColor="bg-white">
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="/images/serverless-flow.svg" 
          alt="Serverless Challenges" 
          className="max-w-full h-auto"
          style={{maxHeight: '400px'}}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{data.content}</p>
        <div className="space-y-6">
          {data.challenges.map((challenge, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección del Futuro
export const FutureSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <AnimatedSection 
      id={data.id} 
      imageUrl={data.imageUrl || '/images/serverless-diagram.svg'} 
      animation={data.animation}
      bgColor="bg-gradient-to-br from-blue-800 to-purple-800"
      contrast={true}
    >
      <div className="w-full text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg mb-8 max-w-3xl">{data.content}</p>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Tendencias Emergentes</h3>
          <ul className="space-y-4">
            {data.trends && data.trends.map((trend, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span className="text-lg">{trend}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección de Conclusiones
export const ConclusionSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <AnimatedSection id={data.id} animation={data.animation} bgColor="bg-gray-50">
      <div className="w-full text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{data.content}</p>
      </div>
    </AnimatedSection>
  );
};

// Componente para la sección de CTA (Call to Action)
export const CTASection = ({ data }) => {
  if (!data) return null;
  
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.title}</h2>
        <a 
          href={data.url}
          className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors text-lg"
        >
          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

// Componente para la sección de Contacto
export const ContactSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{data.subtitle}</p>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <form className="space-y-4">
            <div className="text-left">
              <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="text-left">
              <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu mensaje aquí..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-gray-700">
          <p>O contáctanos directamente: <a href={`mailto:${data.email}`} className="text-blue-600 hover:underline">{data.email}</a></p>
        </div>
      </div>
    </section>
  );
};