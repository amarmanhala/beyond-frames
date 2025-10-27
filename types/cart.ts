import { Product } from "./product";

export interface Cart {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
}
