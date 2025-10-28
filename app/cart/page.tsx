"use client";

import { useCart } from "@/store/CartContext";
import { Handbag } from "lucide-react";

export default function Page() {
  const cart = useCart();
  return (
    <>
     { cart.cart.length === 0 ? (<div className="w-full py-32 my-8 flex justify-center">
      <div className="flex flex-col justify-center items-center space-y-4">
        
        <Handbag size={60} />
        <h3 className="text-2xl">Your cart is empty</h3>
        <button className="bg-black text-white px-8 py-4 rounded">
          Continue shoping
        </button>
      </div>
    </div>) : (<div>
        <div className="grid grid-cols-3 bg-amber-200 w-[768px] mx-auto">
            <div>Product</div>
                        <div>Quantity</div>

            <div>Total</div>

        </div>
    </div>) }
    </>

 
    
    
  );
}
