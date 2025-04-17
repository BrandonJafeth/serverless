import React, { createContext, useContext, useState, useEffect } from 'react';

const ServerlessContext = createContext();

export const ServerlessProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Intentando cargar datos desde /data/data.json...');
        const response = await fetch('/data/data.json');
        
        if (!response.ok) {
          throw new Error(`Error al cargar datos: ${response.status} ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        console.log('Datos cargados correctamente:', jsonData);
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error cargando datos:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Mostrar mensaje de error si algo sale mal
  if (error && !loading) {
    console.error('Error en el contexto:', error);
  }

  return (
    <ServerlessContext.Provider value={{ data, loading, error }}>
      {children}
    </ServerlessContext.Provider>
  );
};

export const useServerlessData = () => {
  const context = useContext(ServerlessContext);
  if (context === undefined) {
    throw new Error('useServerlessData debe ser usado dentro de un ServerlessProvider');
  }
  return context;
};