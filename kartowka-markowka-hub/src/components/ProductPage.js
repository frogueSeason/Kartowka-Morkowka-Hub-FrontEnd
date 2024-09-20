import React from 'react';
import '../styles//ProductPage.css';

function ProductPage({ product }) {
  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <button>Купить</button>
    </div>
  );
}

export default ProductPage;
