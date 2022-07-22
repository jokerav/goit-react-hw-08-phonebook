import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';

const menu = (
  <Menu
    items={[
      {
        onClick: e => {
          console.log('DDMenu Click!');
        },
        label: <>Log Out</>,
        key: '0',
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown overlay={menu}>
    <span onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </span>
  </Dropdown>
);

export default DropdownMenu;
