import ProductDetail from "@/app/components/ProductDetail";
import { products } from "@/app/products/arts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug, // or however you're generating slugs
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;
  const product = products.find((product) => product.slug === slug.slug);

   if (!product) {
    notFound()
  }

  return (
    <div className="py-20 mx-24">
      <ProductDetail product={product} />
    </div>
  );
}
