import Image from "next/image";

const ProductCard = ({ imageURL, description }: { imageURL: string, description: string }) => {
  return (
    <div className="w-full cursor-pointer transition-transform duration-300 hover:scale-105">
      <Image
        src={imageURL}
        width={400}
        height={400}
        alt="Picture of the author"
      />
      <div className="text-center"><p className="py-4">{description}</p></div>
    </div>
  );
};

export default ProductCard;
