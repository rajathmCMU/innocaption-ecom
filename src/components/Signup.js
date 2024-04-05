import React from 'react';
import { Form, Input, Button } from 'antd';
import './Signup.css';

const Signup = () => {
  const onFinish = (values) => {
    console.log('Signup form values:', values);
    // Handle signup logic here
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <Form name="signup-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;