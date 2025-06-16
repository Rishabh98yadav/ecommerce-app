import React from 'react';
import { Card, Button } from 'antd';
import styles from '../styles/ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card className={styles.card} hoverable cover={<img alt={product.name} src={product.image_url} />}>
      <h3>{product.name}</h3>
      <p>₹{product.discount_price ?? product.price}</p>
      {product.discount_price && <small className={styles.strike}>₹{product.price}</small>}
      <Button onClick={() => navigate(`/product/${product.id}`)}>View</Button>
    </Card>
  );
};

export default ProductCard;
