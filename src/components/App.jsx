import RegisterForm from './RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="register" element={<RegisterForm />}></Route>
      </Routes>
    </div>
  );
};
