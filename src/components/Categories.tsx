
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Guitar, Music, Drum, Piano } from 'lucide-react';

export const Categories = () => {
  const categories = [
    {
      name: 'Guitarras',
      icon: Guitar,
      count: '25+ produtos',
      href: '/categories/guitar',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'Baixos',
      icon: Music,
      count: '15+ produtos',
      href: '/categories/bass',
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: 'Baterias',
      icon: Drum,
      count: '10+ produtos',
      href: '/categories/drums',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'Teclados',
      icon: Piano,
      count: '20+ produtos',
      href: '/categories/keyboard',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore por{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Categoria
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Encontre exatamente o que você procura
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} to={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
