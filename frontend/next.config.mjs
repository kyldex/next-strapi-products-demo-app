/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['0.0.0.0', 'localhost'], // Ajoute 'localhost' au cas où tu accèdes à Strapi via localhost
  },
};

export default nextConfig;
