import { Button, Form, Input } from 'antd';
import { useSignUpUserMutation } from '../../contactsAPI/contactsApi';
import { loggedIn } from 'contactsAPI/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [signUpUser, { isError, isLoading, isSuccess }] =
    useSignUpUserMutation();
  const onFinish = async values => {
    const res = await signUpUser(values);
    dispatch(loggedIn(res.data));
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
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegisterForm;
