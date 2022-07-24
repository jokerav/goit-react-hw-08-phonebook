import { Button, Empty } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<span>Page not found</span>}
    >
      <Button type="primary" onClick={() => navigate('/login')}>
        Back
      </Button>
    </Empty>
  );
};

export default ErrorPage;
