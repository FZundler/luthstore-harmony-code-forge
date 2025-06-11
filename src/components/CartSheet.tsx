
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSheet = ({ isOpen, onClose }: CartSheetProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Carrinho de Compras
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </SheetTitle>
          <SheetDescription>
            {items.length === 0 ? 'Seu carrinho está vazio' : `${items.length} item(s) no carrinho`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex-1">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum item no carrinho</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">{formatPrice(item.price)}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="px-2 py-1 text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Finalizar Compra
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    Limpar Carrinho
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
