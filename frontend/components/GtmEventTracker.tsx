'use client';

import { useEffect } from 'react';
import { triggerGtmPageViewEvent, triggerProductView } from '../utils/gtm';

type Props = {
  eventType: 'page_view' | 'product_view';
  pageName?: string;
  pagePath?: string;
  productId?: number;
  productName?: string;
  productPrice?: number;
};

const GtmEventTracker: React.FC<Props> = ({
  eventType,
  pageName,
  pagePath,
  productId,
  productName,
  productPrice
}) => {
  useEffect(() => {
    if (eventType === 'page_view' && pageName && pagePath) {
      triggerGtmPageViewEvent(pageName, pagePath);
    }
    if (eventType === 'product_view' && productId && productName) {
      triggerProductView(productId, productName, productPrice);
    }
  }, [eventType, pageName, pagePath, productId, productName, productPrice]);

  return null;
};

export default GtmEventTracker;
