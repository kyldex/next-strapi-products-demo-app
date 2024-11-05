type GtmEvent = {
  event: string;
  page_name?: string;
  page_path?: string;
  product_id?: number;
  product_name?: string;
  product_price?: number | null;
};

export default GtmEvent;
