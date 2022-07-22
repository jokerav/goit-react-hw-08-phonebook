import { Button, PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../../contactsAPI/selectors';
import { useLogOutUserMutation } from '../../contactsAPI/contactsApi';

const Header = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => navigate('/register');
  const navigateToLogIn = () => navigate('/login');
  const isLoggedin = useSelector(getLoggedIn);
  const logInClick = () => {
    navigateToLogIn();
  };
  const [logOut] = useLogOutUserMutation();
  const logOutClick = async () => {
    const res = await logOut();
    console.log(res);
  };
  console.log(isLoggedin);
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          // <Button key="3">Operation</Button>,
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
          isLoggedin && (
            <Button key="3" type="primary" onClick={() => logOutClick()}>
              Log Out
            </Button>
          ),
          // isLoggedin && <DropdownMenu />,
        ]}
      ></PageHeader>
    </div>
  );
};

export default Header;
