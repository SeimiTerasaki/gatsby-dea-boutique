import React from 'react';
import {useCartCount} from 'gatsby-theme-shopify-manager';

export default function CartCount() {
  const cartCount = useCartCount();

  return <span>{cartCount}</span>;
}