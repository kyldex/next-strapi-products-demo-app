import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  attributes: {
    name: string;
    description: string;
    price?: number;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
};

async function fetchProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/produits?populate=image`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.data as Product[];
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Nos Produits</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 shadow-md block"
          >
            {product.attributes.image?.data && (
              <Image
                src={product.attributes.image.data.attributes.url}
                alt={
                  product.attributes.image.data.attributes.alternativeText ||
                  product.attributes.name
                }
                width={200}
                height={200}
                className="rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-bold mb-2">
              {product.attributes.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {product.attributes.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
