import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serverless - Revolución en la Computación en la Nube",
  description: "Un análisis detallado de la tecnología Serverless, su impacto en la industria y aplicaciones en soporte técnico avanzado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-blue-400">
              UNA |<span className="text-blue-300"> Serverless</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#intro" className="text-gray-300 hover:text-blue-300 transition-colors">¿Qué es?</a>
              <a href="#benefits" className="text-gray-300 hover:text-blue-300 transition-colors">Beneficios</a>
              <a href="#industry-impact" className="text-gray-300 hover:text-blue-300 transition-colors">Impacto</a>
              <a href="#tech-support" className="text-gray-300 hover:text-blue-300 transition-colors">Aplicaciones</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contacto</a>
            </nav>
            <button className="md:hidden">
              <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Columna 1 - Referencias bibliográficas */}
              <div className="font-mono">
                <h2 className="text-gray-400 mb-4">Referencias/</h2>
                <div className="ml-4 text-xs text-gray-400 space-y-4">
                  <p>├─ Céspedes, J., Rodríguez, V., Moltó, G., & López, Á. (2024). Efficient and scalable covariate drift detection in machine learning systems with serverless computing. Future Generation Computer Systems, 161, 174-188.</p>
                  
                  <p>├─ Eismann, S., Scheuner, J., van Eyk, E., Schwinger, M., Grohmann, J., Herbst, N., Abad, C. L., & Iosup, A. (2021). A Review of Serverless Use Cases and their Characteristics. SPEC RG Cloud Working Group.</p>
                  
                  <p>├─ Red Hat. (2024). ¿Qué es la informática sin servidor (Serverless)?</p>
                  
                  <p>└─ Shojaee, Z., & Ghobaei-Arani, M. (2024). Data pipeline approaches in serverless computing: a taxonomy, review, and research trends. Journal of Big Data, 11(82).</p>
                </div>
              </div>

              {/* Columna 2 - Estructura tipo árbol para Recursos */}
              <div className="font-mono">
                <h2 className="text-gray-400 mb-4">Recursos/</h2>
                <div className="ml-4">
                  ├─ <a href="#intro" className="text-gray-400 hover:text-white">¿Qué es Serverless?</a><br />
                  ├─ <a href="#how-it-works" className="text-gray-400 hover:text-white">¿Cómo funciona?</a><br />
                  ├─ <a href="#benefits" className="text-gray-400 hover:text-white">Beneficios</a><br />
                  ├─ <a href="#tech-support" className="text-gray-400 hover:text-white">Aplicaciones</a><br />
                  └─ <a href="#monitoring-tools" className="text-gray-400 hover:text-white">Herramientas</a>
                </div>
              </div>

              {/* Columna 3 - Estructura tipo árbol para Integrantes */}
              <div className="font-mono">
                <h2 className="text-gray-400 mb-4">Integrantes/</h2>
                <div className="ml-4">
                  ├─ <span className="text-gray-400">Brandon Carrillo Álvarez</span><br />
                  ├─ <span className="text-gray-400">Fabiola Carrera Vallejos</span><br />
                  ├─ <span className="text-gray-400">José David Guadamuz Elizondo</span><br />
                  ├─ <span className="text-gray-400">José Miguel Torres Jiménez</span><br />
                  └─ <span className="text-gray-400">Oscar Andrés Zúñiga Sánchez</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 flex justify-between items-center text-gray-500 border-t border-gray-800 text-xs">
              <div className="flex space-x-4">
                <span>Patent Pledge</span>
                <span>-</span>
                <span>Terms of Use</span>
                <span>-</span>
                <span>Privacy</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 bg-gray-800 px-3 py-1 rounded">
                <span>Status</span>
                <span className="flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                  All Systems Operational
                </span>
              </div>
              
              <div>
                <span>© {new Date().getFullYear()} Universidad Nacional</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
