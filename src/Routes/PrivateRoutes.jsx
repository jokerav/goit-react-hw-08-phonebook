import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../contactsAPI/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const isLoggedin = useSelector(getLoggedIn);
  return isLoggedin ? children : <Navigate to="/login" />;
};
export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
