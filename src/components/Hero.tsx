
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Music, Guitar, Headphones } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-bounce">
          <Music className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Guitar className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-300">
          <Headphones className="w-10 h-10" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bem-vindo à{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LUTHSTORE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-150">
            Sua loja especializada em instrumentos musicais. Encontre guitarras, baixos, 
            baterias, teclados e acessórios de alta qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200">
                Ver Produtos
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Categorias
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
