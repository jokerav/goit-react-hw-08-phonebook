import { Button, Form, Input } from 'antd';
import React from 'react';
import { useAddContactMutation } from 'contactsAPI/contactsApi';

const ContactForm = () => {
  const [form] = Form.useForm();
  const [addContact] = useAddContactMutation();
  const onFinish = async values => {
    console.log('Success:', values);
    const data = await addContact(values);
    console.log(data);
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="contactForm"
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
            message: 'Please input name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          + Add contact
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
