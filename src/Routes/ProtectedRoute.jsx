import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../contactsAPI/selectors';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ user, children }) => {
  const isLoggedin = useSelector(getLoggedIn);
  if (isLoggedin) {
    return <Navigate to="/contacts" replace />;
  }

  return children;
};
export default ProtectedRoute;
