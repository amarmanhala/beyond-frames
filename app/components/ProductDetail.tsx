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
          <h2 className="text-4xl mb-6">{product.description}</h2>
          <p className="mb-8">
            Essential oil with antibacterial properties combine in our original
            sweet-smelling formula. Super-fruit lilly packs a potent punch rich
            in Vitamin C and antioxidants, while the menthol hit of Eucalyptus
            and Tea Tree is tempered by Peru Balsam.
          </p>
          <span className="text-2xl font-bold">{product.price}</span>
          <div className="pt-8">
            <select>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <button className="bg-black text-lg text-white px-6 py-4 rounded">
              Buy it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
