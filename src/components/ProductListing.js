// src/components/ProductListing.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 29.99 },
  { id: 2, name: 'Snake Plant', price: 19.99 },
  { id: 3, name: 'Pothos', price: 15.99 },
  { id: 4, name: 'Spider Plant', price: 12.99 },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
