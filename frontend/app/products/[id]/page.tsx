import Image from 'next/image';

import getProductImageUrl from '@/utils/getProductImageUrl';
import type Product from '@/types/Product';

async function fetchProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/produits/${id}?populate=*`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product details');
  }
  const data = await res.json();
  return data.data as Product;
}

type ProductPageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.id);
  const productImageUrl = getProductImageUrl(product);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        {product.attributes.Nom}
      </h1>

      {productImageUrl && (
        <Image
          src={productImageUrl}
          alt={
            product.attributes.Image.data.attributes.alternativeText ||
            product.attributes.Nom
          }
          width={400}
          height={400}
          className="rounded-lg mb-4 mx-auto"
        />
      )}

      <p className="text-lg text-gray-700 text-center mb-4">
        {product.attributes.Description}
      </p>
      {product.attributes.Prix && (
        <p className="text-xl font-semibold text-gray-800 text-center mb-4">
          Prix : {product.attributes.Prix}€
        </p>
      )}
    </div>
  );
}
