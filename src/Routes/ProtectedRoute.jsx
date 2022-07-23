import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/contacts',
  children,
}) => {
  if (isAllowed) {
    console.log('Protected Route! Navigate to contact!');
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
export default ProtectedRoute;
