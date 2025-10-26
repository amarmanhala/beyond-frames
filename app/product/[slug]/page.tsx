import ProductDetail from "@/app/components/ProductDetail";
import { products } from "@/app/products/arts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  console.log("Static called");
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
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
