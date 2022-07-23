import RegisterForm from './RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'Routes/PrivateRoutes';
import ProtectedRoute from 'Routes/ProtectedRoute';
import Header from './PageHeader/PageHeader';
import LoginForm from './LoginForm/LoginForm';
import Contacts from './Contacts/Contacts';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../contactsAPI/selectors';

export const App = () => {
  const isLoggedin = useSelector(getLoggedIn);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/register"
          element={
            <ProtectedRoute user={isLoggedin}>
              <RegisterForm />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <ProtectedRoute user={isLoggedin}>
              <LoginForm />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};
