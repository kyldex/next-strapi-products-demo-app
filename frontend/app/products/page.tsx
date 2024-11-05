import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  attributes: {
    Nom: string;
    Description: string;
    Prix?: number;
    Image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
};

const getImageUrl = (product: Product): string | null => {
  const imageUrl = product.attributes.Image?.data
    ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${product.attributes.Image.data.attributes.url}`
    : null;

  return imageUrl;
};

async function fetchProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/produits?populate=*`
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
    <div className="p-8" style={{ maxWidth: '800px', margin: 'auto' }}>
      <h1 className="text-3xl font-semibold mb-8 text-center">Nos Produits</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const productImageUrl = getImageUrl(product);
          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="border rounded-lg p-4 shadow-md block"
            >
              {productImageUrl ? (
                <Image
                  src={productImageUrl}
                  alt={
                    product.attributes.Image.data.attributes.alternativeText ||
                    ''
                  }
                  width={200}
                  height={200}
                  className="rounded-lg mb-4"
                />
              ) : null}
              <h2 className="text-xl font-bold mb-2">
                {product.attributes.Nom}
              </h2>
              <p className="text-gray-600 mb-4">
                {product.attributes.Description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
