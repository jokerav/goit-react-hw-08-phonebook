import { Button, Form, Input } from 'antd';
import Spiner from '../Spiner/Spiner';
import React from 'react';
import { useLogInUserMutation } from 'contactsAPI/contactsApi';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../../contactsAPI/authSlice';

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [logIn, { isLoading }] = useLogInUserMutation();
  const onFinish = async values => {
    const res = await logIn(values);
    console.log(res);
    dispatch(loggedIn(res.data));
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="loginForm"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        email: '',
        password: '',
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
        {isLoading ? (
          <Spiner />
        ) : (
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
