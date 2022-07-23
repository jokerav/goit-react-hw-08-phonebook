import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../contactsAPI/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const ProtectedRoute = ({ children }) => {
  const isLoggedin = useSelector(getLoggedIn);
  if (isLoggedin) {
    return <Navigate to="/contacts" replace />;
  }

  return children;
};
export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
