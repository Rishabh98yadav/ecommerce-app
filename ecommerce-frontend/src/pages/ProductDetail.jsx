import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';
import { Button, Card, message } from 'antd';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => message.error('Failed to load product'));
  }, [id]);

  const addToCart = () => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const isPresent = existing.find((item) => item.product_id === product.id);

    if (isPresent) {
      isPresent.quantity += 1;
    } else {
      existing.push({
        product_id: product.id,
        name: product.name,
        price: product.discount_price || product.price,
        quantity: 1,
        image_url: product.image_url,
      });
    }

    localStorage.setItem('cart', JSON.stringify(existing));
    message.success('Added to cart');
  };

  const buyNow = () => {
    addToCart();
    navigate('/checkout');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Card
      style={{ maxWidth: 500, margin: '20px auto' }}
      cover={<img alt={product.name} src={product.image_url} />}
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.discount_price || product.price}</h3>
      {product.discount_price && (
        <p style={{ textDecoration: 'line-through', color: 'gray' }}>
          ₹{product.price}
        </p>
      )}
      <Button type="primary" onClick={addToCart} style={{ marginRight: 10 }}>
        Add to Cart
      </Button>
      <Button type="default" onClick={buyNow}>
        Buy Now
      </Button>
    </Card>
  );
};

export default ProductDetail;
