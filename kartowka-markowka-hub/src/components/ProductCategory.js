import React from 'react';
import '../styles/ProductCategory.css';

function ProductCategory({ name, image }) {
  return (
    <div className="product-category">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default ProductCategory;
