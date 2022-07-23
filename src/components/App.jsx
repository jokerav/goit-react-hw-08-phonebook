import RegisterForm from './RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'Routes/PrivateRoutes';
import ProtectedRoute from 'Routes/ProtectedRoute';
import Header from './PageHeader/PageHeader';
import LoginForm from './LoginForm/LoginForm';
// import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <LoginForm />
            </ProtectedRoute>
          }
        ></Route>
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
              <ContactForm />
              <Filter />
              <ContactList />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};
