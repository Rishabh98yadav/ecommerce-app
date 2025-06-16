import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Orders from './pages/Orders';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
