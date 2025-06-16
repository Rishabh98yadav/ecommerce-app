import React from "react";
import { Form, Input, Button, message, Card } from "antd";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await API.post("/auth/login", values);
      message.success("Login successful");
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      message.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <Card title="Login">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            Don't have an account?{" "}
            <a onClick={() => navigate("/register")}>Register here</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
