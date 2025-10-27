import { Cart } from "@/types/cart";
import { createContext } from "react";

const CartContext = createContext<Cart | undefined>(undefined);

export { CartContext };
