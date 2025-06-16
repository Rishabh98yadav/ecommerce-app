import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await API.post('/auth/register', values);
      message.success('Registration successful');
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      message.error(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <Card title="Register">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, min: 6 }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Already have an account? <a onClick={() => navigate('/login')}>Login here</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
