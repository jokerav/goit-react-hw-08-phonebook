import { Route, Navigate } from 'react-router-dom';
import { getLoggedIn } from '../contactsAPI/selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isLoggedin = useSelector(getLoggedIn);
  //   const navigate = useNavigate();
  return isLoggedin ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
