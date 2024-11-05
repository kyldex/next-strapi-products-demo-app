export const triggerGtmPageViewEvent = (pageName: string, pagePath: string) => {
  dataLayer.push({
    event: 'page_view',
    page_name: pageName,
    page_path: pagePath
  });
};

export const triggerProductView = (
  productId: number,
  productName: string,
  productPrice?: number
) => {
  dataLayer.push({
    event: 'product_view',
    product_id: productId,
    product_name: productName,
    product_price: productPrice || null
  });
};
