
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { CartSheet } from './CartSheet';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/products' },
    { name: 'Categorias', href: '/categories' },
    { name: 'Sobre', href: '/about' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Music className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LUTHSTORE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-300 hover:text-white hover:bg-white/10"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
