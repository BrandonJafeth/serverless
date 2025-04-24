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
              Serverless<span className="text-blue-300">Research</span>
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
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Serverless Research</h3>
                <p className="text-gray-400">
                  Un análisis detallado de la tecnología Serverless y su impacto en la industria tecnológica.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#intro" className="text-gray-400 hover:text-white transition-colors">¿Qué es Serverless?</a></li>
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">¿Cómo funciona?</a></li>
                  <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
                  <li><a href="#tech-support" className="text-gray-400 hover:text-white transition-colors">Aplicaciones en Soporte Técnico</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <p className="text-gray-400 mb-2">info@serverless-research.com</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Serverless Research. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
