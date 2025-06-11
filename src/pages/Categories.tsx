
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Guitar, Music, Drum, Piano, Headphones } from 'lucide-react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'guitar',
      name: 'Guitarras',
      icon: Guitar,
      color: 'from-red-500 to-orange-500',
      description: 'Guitarras elétricas e acústicas de alta qualidade',
    },
    {
      id: 'bass',
      name: 'Baixos',
      icon: Music,
      color: 'from-blue-500 to-purple-500',
      description: 'Baixos elétricos e acústicos para todos os estilos',
    },
    {
      id: 'drums',
      name: 'Baterias',
      icon: Drum,
      color: 'from-green-500 to-teal-500',
      description: 'Kits de bateria e peças individuais',
    },
    {
      id: 'keyboard',
      name: 'Teclados',
      icon: Piano,
      color: 'from-purple-500 to-pink-500',
      description: 'Teclados digitais e pianos elétricos',
    },
    {
      id: 'accessories',
      name: 'Acessórios',
      icon: Headphones,
      color: 'from-gray-500 to-slate-500',
      description: 'Amplificadores, pedais e outros acessórios',
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const getProductCount = (categoryId: string) => {
    return products.filter(product => product.category === categoryId).length;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">
              Categorias
            </h1>
            <p className="text-xl text-center text-purple-100">
              Explore nossos produtos por categoria
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <p className="text-xs text-purple-600 font-medium">
                    {getProductCount(category.id)} produtos
                  </p>
                </button>
              );
            })}
          </div>

          {/* Filter Indicator */}
          {selectedCategory && (
            <div className="flex items-center justify-between mb-8 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div>
                <h2 className="text-xl font-semibold">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted-foreground">
                  {filteredProducts.length} produto(s) encontrado(s)
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
              >
                Mostrar Todos
              </Button>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
