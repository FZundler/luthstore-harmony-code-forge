
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <Link to="/products">
              <Button>Voltar aos Produtos</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/products" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Produtos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                {product.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500">
                    Destaque
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive" className="absolute top-4 right-4">
                    Esgotado
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {getCategoryLabel(product.category)}
                </Badge>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-muted-foreground">(4.0) - 23 avaliações</span>
                </div>

                <p className="text-4xl font-bold text-purple-600 mb-6">
                  {formatPrice(product.price)}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Descrição</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Especificações</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Categoria: {getCategoryLabel(product.category)}</li>
                  <li>• Disponibilidade: {product.inStock ? 'Em estoque' : 'Esgotado'}</li>
                  <li>• Garantia: 1 ano</li>
                  <li>• Frete grátis para todo o Brasil</li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="lg">
                    Comprar Agora
                  </Button>
                  <Button variant="outline" size="lg">
                    Favoritar
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>✓ Frete grátis</span>
                  <span>✓ Garantia de 1 ano</span>
                  <span>✓ Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                    <div className="group cursor-pointer">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-40 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform"
                      />
                      <h3 className="font-medium group-hover:text-purple-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-purple-600 font-semibold">
                        {formatPrice(relatedProduct.price)}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
