import RegisterForm from './RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'Routes/PrivateRoutes';
import ProtectedRoute from 'Routes/ProtectedRoute';
import Header from './PageHeader/PageHeader';
import LoginForm from './LoginForm/LoginForm';
import Contacts from './Contacts/Contacts';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/register"
          element={
            <ProtectedRoute>
              <RegisterForm />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <ProtectedRoute>
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
