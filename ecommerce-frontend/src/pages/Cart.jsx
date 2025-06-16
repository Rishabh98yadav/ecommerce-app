import React, { useEffect, useState } from 'react';
import { Button, InputNumber, message, Card } from 'antd';
import styles from '../styles/Cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.product_id === productId ? { ...item, quantity } : item
    );

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.product_id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    message.info('Item removed from cart');
  };

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className={styles.container}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <Card key={item.product_id} className={styles.card}>
              <div className={styles.info}>
                <img src={item.image_url} alt={item.name} className={styles.image} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>
                    Quantity:{' '}
                    <InputNumber
                      min={1}
                      value={item.quantity}
                      onChange={(value) => updateQuantity(item.product_id, value)}
                    />
                  </p>
                  <Button danger onClick={() => removeItem(item.product_id)}>
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          <h3>Total: ₹{total.toFixed(2)}</h3>
          <Button type="primary" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
