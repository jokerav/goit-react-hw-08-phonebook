import { Button, PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../../contactsAPI/selectors';

const Header = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => navigate('/register');
  const navigateToLogIn = () => navigate('/login');
  const isLoggedin = useSelector(getLoggedIn);
  // console.log(isLoggedin);
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        //   ghost={false}

        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2" onClick={() => navigateToSignUp()}>
            Sign Up
          </Button>,
          <Button key="1" type="primary" onClick={() => navigateToLogIn()}>
            {isLoggedin ? 'Log Out' : 'Log In'}
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default Header;
