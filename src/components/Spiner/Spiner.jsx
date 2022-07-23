// import { Spin } from 'antd';
// import s from './Spiner.module.css';
// import React from 'react';

// const Spiner = () => (
//   <div className={s.example}>
//     <Spin />
//   </div>
// );

// export default Spiner;
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const Spiner = () => <Spin indicator={antIcon} />;

export default Spiner;
