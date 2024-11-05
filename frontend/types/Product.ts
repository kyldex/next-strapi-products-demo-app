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
    SEO: {
      id: number;
      metaTitle: string;
      metaDescription: string;
    }[];
  };
};

export default Product;
