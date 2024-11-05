import Image from 'next/image';

type ProductDetails = {
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

async function fetchProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/produits/${id}?populate=image`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch product details');
  }
  const data = await res.json();
  return data.data as ProductDetails;
}

type ProductPageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.id);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        {product.attributes.name}
      </h1>

      {product.attributes.image?.data && (
        <Image
          src={product.attributes.image.data.attributes.url}
          alt={
            product.attributes.image.data.attributes.alternativeText ||
            product.attributes.name
          }
          width={400}
          height={400}
          className="rounded-lg mb-4 mx-auto"
        />
      )}

      <p className="text-lg text-gray-700 mb-4">
        {product.attributes.description}
      </p>
      {product.attributes.price && (
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Prix : {product.attributes.price}€
        </p>
      )}
    </div>
  );
}
