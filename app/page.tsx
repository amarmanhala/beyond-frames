import Image from "next/image";
import HeroFrame from "./components/hero-frame";
import Products from "./components/products";

export default function Home() {
  return (
    <div>
      <main>
       <HeroFrame />
       <Products />
      </main>
    </div>
  );
}
