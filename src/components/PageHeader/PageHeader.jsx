import { Button, PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../../contactsAPI/selectors';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => navigate('/register');
  const navigateToLogIn = () => navigate('/login');
  const isLoggedin = useSelector(getLoggedIn);
  const logInClick = () => navigateToLogIn();

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Contacts Book"
        subTitle="Made with love"
        extra={[
          !isLoggedin && (
            <Button key="2" onClick={() => navigateToSignUp()}>
              Sign Up
            </Button>
          ),
          !isLoggedin && (
            <Button key="1" type="primary" onClick={() => logInClick()}>
              Log In
            </Button>
          ),
          isLoggedin && <UserMenu />,
        ]}
      ></PageHeader>
    </div>
  );
};

export default Header;
