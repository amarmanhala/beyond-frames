"use client"

import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";

const CartContext = createContext<Cart | undefined>(undefined);


// Add this custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartContext };
