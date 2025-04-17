'use client';

import React from 'react';
import { ServerlessProvider, useServerlessData } from '../context/ServerlessContext';
import HeroSection from '../components/sections/HeroSection';
import {
  IntroSection,
  HowItWorksSection,
  BenefitsSection,
  IndustryImpactSection,
  TechSupportSection,
  ChallengesSection,
  FutureSection,
  ConclusionSection,
  CTASection,
  ContactSection
} from '../components/sections/ContentSections';

// Definición de interfaces para TypeScript
interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Challenge {
  title: string;
  description: string;
}

interface Statistic {
  value: string;
  label: string;
}

interface Application {
  title: string;
  description: string;
  icon: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  animation: string;
  points?: string[];
  benefits?: Benefit[];
  statistics?: Statistic[];
  caseStudies?: string[];
  applications?: Application[];
  challenges?: Challenge[];
  trends?: string[];
}

interface ServerlessData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  sections: Section[];
  cta: {
    title: string;
    buttonText: string;
    url: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
  };
}

const MainContent = () => {
  const { data, loading, error } = useServerlessData();

  // Mostrar mensaje de carga
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Mostrar mensaje de error si existe
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-lg">
          <h2 className="text-lg font-bold mb-2">Error al cargar datos</h2>
          <p>{error}</p>
          <div className="mt-4 p-3 bg-gray-100 rounded overflow-auto">
            <p className="text-sm text-gray-700">
              Nota: Verifica que el archivo data.json esté correctamente ubicado en la carpeta public/data 
              y que su formato JSON sea válido.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Si no hay datos aunque no haya error
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded max-w-lg">
          <h2 className="text-lg font-bold mb-2">No se pudieron cargar los datos</h2>
          <p>No se encontraron datos para mostrar. Por favor, verifica la consola para más detalles.</p>
        </div>
      </div>
    );
  }

  const typedData = data as ServerlessData;

  return (
    <main className="overflow-hidden">
      <HeroSection data={typedData.hero} />
      
      {typedData.sections.map((section: Section) => {
        switch (section.id) {
          case 'intro':
            return <IntroSection key={section.id} data={section} />;
          case 'how-it-works':
            return <HowItWorksSection key={section.id} data={section} />;
          case 'benefits':
            return <BenefitsSection key={section.id} data={section} />;
          case 'industry-impact':
            return <IndustryImpactSection key={section.id} data={section} />;
          case 'tech-support':
            return <TechSupportSection key={section.id} data={section} />;
          case 'challenges':
            return <ChallengesSection key={section.id} data={section} />;
          case 'future':
            return <FutureSection key={section.id} data={section} />;
          case 'conclusion':
            return <ConclusionSection key={section.id} data={section} />;
          default:
            return null;
        }
      })}
      
      <CTASection data={typedData.cta} />
      <ContactSection data={typedData.contact} />
    </main>
  );
};

export default function Home() {
  return (
    <ServerlessProvider>
      <MainContent />
    </ServerlessProvider>
  );
}
