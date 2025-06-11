
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'guitar' | 'bass' | 'drums' | 'keyboard' | 'accessories';
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
