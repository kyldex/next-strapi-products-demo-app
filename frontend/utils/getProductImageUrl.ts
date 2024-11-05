import type Product from "@/types/Product";

const getProductImageUrl = (product: Product): string | null => {
  const imageUrl = product.attributes.Image?.data
    ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${product.attributes.Image.data.attributes.url}`
    : null;

  return imageUrl;
};

export default getProductImageUrl;
