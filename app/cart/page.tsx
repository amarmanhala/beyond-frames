"use client";

import { useCart } from "@/store/CartContext";
import { Handbag, Trash2 } from "lucide-react";

export default function Page() {
  const cart = useCart();
  return (
    <>
      {cart.cart.length === 0 ? (
        <div className="w-full py-32 my-8 flex justify-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <Handbag size={60} />
            <h3 className="text-2xl">Your cart is empty</h3>
            <button className="bg-black text-white px-8 py-4 rounded">
              Continue shoping
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[768px] mx-auto">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 border-y py-3">
            <div className="col-span-2">PRODUCT</div>
            <div>QUANTITY</div>
            <div className="text-right">TOTAL</div>
          </div>

          {/* Cart Items */}
          {cart.cart.map((item) => (
            <div key={item.product.id} className="grid grid-cols-4 gap-4 border-b py-4">
              <div className="flex col-span-2">
                <div className="">
                  <img src={item.product.imageURL} width={150} height={150}></img>
                </div>
                <div className="flex flex-col justify-center">
                  <div>{item.product.name}</div>
                  <div>{item.product.price}</div>
                  <button onClick={() => cart.removeFromCart(item.product.id)}>
                    <Trash2></Trash2>
                  </button>
                </div>
              </div>
              <div>Quantity:<div>
                <select
              defaultValue={item.quantity}
              style={{ paddingRight: "32px" }}
              className="px-4 py-3 text-base border rounded appearance-none cursor-pointer focus:outline-none"
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}{" "}
            </select>
                </div></div>
              <div className="text-right">{item.product.price}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
