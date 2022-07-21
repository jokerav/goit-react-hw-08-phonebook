import RegisterForm from './RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import Header from './PageHeader/PageHeader';
import LoginForm from './LoginForm/LoginForm';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="register" element={<RegisterForm />}></Route>
        <Route exact path="login" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
};
