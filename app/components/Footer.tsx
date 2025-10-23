import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Links Section */}
        <div className="flex space-x-12">
          <Link href="/contact" className="hover:underline transition-colors">
            Contact Us
          </Link>
          <Link href="/story" className="hover:underline transition-colors">
            Our Story
          </Link>
          <Link href="/shop" className="hover:underline transition-colors">
            Shop
          </Link>
          <Link href="/faqs" className="hover:underline transition-colors">
            FAQs
          </Link>
          <Link href="/sitemap" className="hover:underline transition-colors">
            Sitemap
          </Link>
          <Link href="/orders" className="hover:underline transition-colors">
            My Order
          </Link>
        </div>

        {/* Country/Region */}
        <div className="border-t border-white pt-8 my-12">
          <p className="text-sm">
            Country/Region:{" "}
            <span className="text-white font-semibold">Canada</span>
          </p>
        </div>

        {/* Brand Statement */}
        <div className="text-center">
          <h2 className="text-5xl md:text-9xl font-bold">We Love Art</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
