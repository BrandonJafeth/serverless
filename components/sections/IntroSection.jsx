import React from 'react';
import BaseContentSection from './BaseSection';
import { SectionTitle } from '../ui/SectionComponents';

export const IntroSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <BaseContentSection data={data}>
      <div className="w-full md:w-1/2">
        <SectionTitle 
          title={data.title} 
          subtitle={data.content} 
          textColor="text-gray-900"
        />
        
        {/* Lista de puntos clave sobre serverless */}
        <div className="mt-8">
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="flex-shrink-0 h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <span className="text-gray-800">Sin gestión de servidores: recursos bajo demanda</span>
            </li>
            <li className="flex items-center">
              <span className="flex-shrink-0 h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-gray-800">Pago por uso: solo pagas por el tiempo de ejecución</span>
            </li>
            <li className="flex items-center">
              <span className="flex-shrink-0 h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <span className="text-gray-800">Escalado automático: se adapta a la demanda</span>
            </li>
            <li className="flex items-center">
              <span className="flex-shrink-0 h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </span>
              <span className="text-gray-800">Mayor enfoque en el código y la lógica de negocio</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Gráfico visual explicativo de serverless - Estilo imagen */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-md">
          {/* Diagrama como en la imagen */}
          <div className="relative">
            {/* Capa superior: Tu Aplicación */}
            <div className="bg-blue-600 text-white p-5 rounded-t-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10">
              <h3 className="text-2xl font-bold">Tu Aplicación</h3>
              <p>Funciones, APIs, Lógica de negocio</p>
            </div>
            
            {/* Capa media: Plataforma Serverless - texto alineado a la derecha */}
            <div className="bg-blue-500 text-white p-5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10">
              <h3 className="text-2xl font-bold text-right">Plataforma Serverless</h3>
              <p className="text-right">Escalado automático, Gestión de eventos</p>
            </div>
            
            {/* Capa inferior: Infraestructura Cloud */}
            <div className="bg-blue-400 text-white p-5 rounded-b-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10">
              <h3 className="text-2xl font-bold">Infraestructura Cloud</h3>
              <p>Recursos físicos gestionados por el proveedor</p>
            </div>
            
            {/* Etiqueta "Enfoque en código" - ajustada para estar justo al borde */}
            <div className="absolute top-8 right-0 transform translate-x-1/2">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                Enfoque en código
              </div>
            </div>
            
            {/* Etiqueta "Pago por uso" - ajustada para estar justo al borde */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="bg-yellow-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                Pago por uso
              </div>
            </div>
            
            {/* Etiqueta "Escalado automático" - ajustada para estar justo al borde */}
            <div className="absolute bottom-8 right-0 transform translate-x-1/2">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                Escalado automático
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-xs italic mt-4 text-center">
          En el modelo serverless, te encargas solo de la lógica mientras el proveedor gestiona toda la infraestructura
        </p>
      </div>
    </BaseContentSection>
  );
};

export default IntroSection;