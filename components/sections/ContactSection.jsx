import React from 'react';
import { SectionTitle } from '../ui/SectionComponents';

const ContactSection = ({ data }) => {
  if (!data) return null;
  
  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle 
          title={data.title} 
          subtitle={data.subtitle} 
          centered={true}
          titleColor="text-blue-400" 
          textColor="text-gray-300"
        />
        
        <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow-md p-8 border border-gray-700">
          <form className="space-y-4">
            <div className="text-left">
              <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="text-left">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="text-left">
              <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
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
        
        <div className="mt-8 text-gray-300">
          <p>O contáctanos directamente: <a href={`mailto:${data.email}`} className="text-blue-400 hover:underline">{data.email}</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;