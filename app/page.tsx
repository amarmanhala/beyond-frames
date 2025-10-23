import Image from "next/image";
import HeroFrame from "./components/hero-frame";
import Products from "./components/products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main>
       <HeroFrame />
       <Products />
       <Newsletter />
       <Footer />
      </main>
    </div>
  );
}
