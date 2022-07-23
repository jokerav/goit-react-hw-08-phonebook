import { Button, Form, Input } from 'antd';
import React from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'contactsAPI/contactsApi';

const ContactForm = () => {
  const [form] = Form.useForm();
  const [addContact] = useAddContactMutation();
  const { data: contacts = [] } = useGetContactsQuery();
  const isNameInPhonebook = name => {
    const nameInLowerCase = name.toLowerCase();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === nameInLowerCase) {
        return true;
      }
    }
    return false;
  };
  const onFinish = async values => {
    // console.log('Success:', values);
    if (!isNameInPhonebook(values.name)) {
      await addContact(values);
    } else {
      alert(`${values.name} is already in contacts`);
    }

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
