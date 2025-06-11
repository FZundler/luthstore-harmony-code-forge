
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      guitar: 'Guitarra',
      bass: 'Baixo',
      drums: 'Bateria',
      keyboard: 'Teclado',
      accessories: 'Acessórios',
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="relative">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500">
              Destaque
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Esgotado
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <Badge variant="secondary">{getCategoryLabel(product.category)}</Badge>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg hover:text-purple-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-purple-600">
            {formatPrice(product.price)}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </Button>
      </CardFooter>
    </Card>
  );
};
