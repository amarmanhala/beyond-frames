import Image from "next/image";
import ProductCard from "./ProductCard";
import { products } from "../products/arts";
import { slugify } from "@/utils/slugify";

const Products = () => {
  return (
    <div className=" grid grid-cols-4 gap-8 p-16">
      
      {products.map((product) => {
        return (
          <div key={product.id} className=" flex items-center justify-center">
            <ProductCard imageURL={product.imageURL} description={product.description} slug={slugify(product.description)} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
