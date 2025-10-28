"use client";

import { useCart } from "@/store/CartContext";
import { Product } from "@/types/product";
import Image from "next/image";

const ProductDetail = ({ product }: { product: Product }) => {
  const cart = useCart();

  const handleAddToCart = () => {
    console.log("added");
    cart.addToCart(product);
    console.log(cart.cart);
  };

  return (
    <div className="grid grid-cols-2 w-full  gap-12">
      <div className=" flex justify-center">
        <Image
          src={product.imageURL}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className=" flex items-center">
        <div className="px-8">
          <h2 className="text-4xl mb-6">{product.name}</h2>
          <p className="mb-8">{product.description}</p>
          <span className="text-2xl font-bold">{product.price}</span>
          <div className="pt-8 flex space-x-4">
            <select
              defaultValue="1"
              style={{ paddingRight: "32px" }}
              className="px-4 py-3 text-base border rounded appearance-none cursor-pointer focus:outline-none"
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}{" "}
            </select>
            <button
              className="bg-black text-lg text-white px-8 py-4 rounded"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-black text-lg text-white px-8 py-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
