import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ imageURL, description, slug }: { imageURL: string, description: string, slug: string }) => {
  return (
    <Link href={`/product/${slug}`}>
     <div className="w-full cursor-pointer transition-transform duration-300 hover:scale-105">
      <Image
        src={imageURL}
        width={400}
        height={400}
        alt="Picture of the author"
      />
      <div className="text-center"><p className="py-4">{description}</p></div>
    </div>
    </Link>
   
  );
};

export default ProductCard;
