import { Button, Form, Input } from 'antd';
import React from 'react';
import { useLogInUserMutation } from 'contactsAPI/contactsApi';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../../contactsAPI/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [logIn] = useLogInUserMutation();
  const onFinish = values => {
    console.log('Success:', values);
    logIn(values);
    dispatch(loggedIn(true));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
