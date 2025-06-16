import React, { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import API from '../services/api';
import styles from '../styles/Checkout.module.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      message.warning('Your cart is empty.');
      return;
    }

    const orderPayload = {
      customer_name: values.name,
      customer_email: values.email,
      customer_address: values.address,
      items: cart.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      setLoading(true);
      await API.post('/orders', orderPayload);
      message.success('Order placed successfully!');
      localStorage.removeItem('cart');
      navigate('/');
    } catch (err) {
      console.error(err);
      message.error('Order failed. Are you logged in?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <h2>Checkout</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Place Order
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Checkout;
