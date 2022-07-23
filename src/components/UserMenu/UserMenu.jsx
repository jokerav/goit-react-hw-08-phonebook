import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut } from 'contactsAPI/authSlice';
import { useLogOutUserMutation } from 'contactsAPI/contactsApi';
import { getUserName } from 'contactsAPI/selectors';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const [logOut] = useLogOutUserMutation();
  const logOutClick = async () => {
    await logOut();
    dispatch(loggedOut());
  };
  return (
    <>
      <span>{`Hello, ${name}`}</span>
      <Button key="3" type="primary" onClick={() => logOutClick()}>
        Log Out
      </Button>
    </>
  );
};
export default UserMenu;
