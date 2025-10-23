import Image from "next/image";

const HeroFrame = () => {
  return (
    <div className=" grid grid-cols-4 gap-8 p-16">
      <div className="">
        <Image
          src="/art1.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="">
        <Image
          src="/art3.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="">
        <Image
          src="/art4.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="">
        <Image
          src="/art7.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="text-center col-span-4">
        <button className="bg-black px-4 text-white py-2 cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroFrame;
