import { useCart } from "@/store/CartContext";
import React from "react";

export const ProductQuantity = ({ id }: { id: string }) => {
  const cart = useCart();
  return (
    <>
      <select
        defaultValue="1"
        onChange={(e) => cart.changeQuantity(id, Number(e.target.value))}
        style={{ paddingRight: "32px" }}
        className="px-4 py-3 text-base border rounded appearance-none cursor-pointer focus:outline-none"
      >
        {Array.from({ length: 100 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}{" "}
      </select>
    </>
  );
};
