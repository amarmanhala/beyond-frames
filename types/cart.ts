import { Product } from "./product";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  changeQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
}
