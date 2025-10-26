import Image from "next/image";

interface Product {
  id: string;
  description: string;
  slug: string;
  price: string;
  size: {
    1: string;
    2: string;
  };
  discount: string;
  imageURL: string;
  videoURL: string;
  createtdAt: string;
}

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="grid grid-cols-2 w-full bg-yellow-100">
      <div>
        <Image
          src={product.imageURL}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h2>{product.description}</h2>
        <p>{product.price}</p>
        <p>{product.size[1]}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
