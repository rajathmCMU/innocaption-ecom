import React from 'react';
import { Form, Input, Button } from 'antd';
import './Login.css';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Login form values:', values);
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form name="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;