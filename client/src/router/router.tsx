import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login';
import Table from '../pages/hod';
import SignupPage from '../pages/signupPage';
import SignupPageLect from '../pages/guest-lecturesignup';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

const AppRouter: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path="/hod" element={authenticated ? <Table/> : <LoginPage />} />
        <Route path='/add-lecture' element={<SignupPageLect />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
