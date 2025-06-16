import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button } from 'antd';
import { ShoppingCartOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from '../styles/Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    navigate('/login');
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>🛍️ E-Shop</Link>
      </div>

      <div className={styles.center}>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">
          <Badge count={cart.length} size="small" offset={[6, -2]}>
            <ShoppingCartOutlined style={{ fontSize: '18px' ,color:"white"}} />
          </Badge>
        </Link>
      </div>

      <div className={styles.right}>
        {token ? (
          <Button type="link" icon={<LogoutOutlined />} onClick={logoutHandler}>
            Logout
          </Button>
        ) : (
          <Button type="link" icon={<LoginOutlined />} onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
