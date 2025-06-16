import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Card, List, message } from 'antd';
import styles from '../styles/Orders.module.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get('/orders')
      .then((res) => setOrders(res.data))
      .catch(() => message.error('Failed to fetch orders'));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={orders}
          renderItem={(order) => (
            <List.Item>
              <Card title={`Order ID: ${order.id}`}>
                <p>Name: {order.customer_name}</p>
                <p>Email: {order.customer_email}</p>
                <p>Address: {order.customer_address}</p>
                <p>
                  Items:
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.product_id}>
                        {item.product.name} × {item.quantity} — ₹{item.price}
                      </li>
                    ))}
                  </ul>
                </p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Orders;
