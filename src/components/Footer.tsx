
import { Link } from 'react-router-dom';
import { Music, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LUTHSTORE
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Sua loja especializada em instrumentos musicais de alta qualidade. 
              Encontre tudo o que precisa para sua jornada musical.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/guitar" className="text-gray-300 hover:text-white transition-colors">
                  Guitarras
                </Link>
              </li>
              <li>
                <Link to="/categories/bass" className="text-gray-300 hover:text-white transition-colors">
                  Baixos
                </Link>
              </li>
              <li>
                <Link to="/categories/drums" className="text-gray-300 hover:text-white transition-colors">
                  Baterias
                </Link>
              </li>
              <li>
                <Link to="/categories/keyboard" className="text-gray-300 hover:text-white transition-colors">
                  Teclados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: contato@luthstore.com</p>
              <p>Telefone: (11) 99999-9999</p>
              <p>WhatsApp: (11) 88888-8888</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 LuthStore. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
