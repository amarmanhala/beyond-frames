import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <Link href="/contact" className="hover:text-gray-400 transition-colors">
            Contact Us
          </Link>
          <Link href="/story" className="hover:text-gray-400 transition-colors">
            Our Story
          </Link>
          <Link href="/shop" className="hover:text-gray-400 transition-colors">
            Shop
          </Link>
          <Link href="/faqs" className="hover:text-gray-400 transition-colors">
            FAQs
          </Link>
          <Link href="/sitemap" className="hover:text-gray-400 transition-colors">
            Sitemap
          </Link>
          <Link href="/orders" className="hover:text-gray-400 transition-colors">
            My Order
          </Link>
        </div>

        {/* Country/Region */}
        <div className="border-t border-gray-700 pt-8 mb-12">
          <p className="text-gray-400 text-sm">
            Country/Region: <span className="text-white">Canada</span>
          </p>
        </div>

        {/* Brand Statement */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold">We Love Art</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;