import { Product } from "./product";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
}
