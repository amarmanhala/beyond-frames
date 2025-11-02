"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { Cart, CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage only on client
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        // Filter out invalid items to prevent errors
        const validCart = parsed.filter(
          (item: any) => item?.product && item?.product?.id
        );
        setCart(validCart);
      } catch (error) {
        console.error('Failed to parse cart:', error);
        setCart([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever cart changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product: Product) => {
    // Validate product before adding
    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    const prod = cart.find((item) => item?.product?.id === product.id);

    if (prod) {
      console.log(cart);
      // Item exists - increment quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item?.product?.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Item doesn't exist - add new with quantity 1
      setCart((prevCart) => [...prevCart, { product: product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item?.product?.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const changeQuantity = (id: string, quantity: number) => {
    console.log("you are in heaven", id, quantity);
    const prod = cart.find((item) => item?.product?.id === id);
    
    if(prod) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item?.product?.id === id
            ? { ...item, quantity: quantity }
            : item
        )
      );
    }
    // Note: The else block with 'product' variable doesn't make sense here
    // If you want to add a product when it doesn't exist, you need to pass the product as a parameter
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        changeQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}