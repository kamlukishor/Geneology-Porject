import './App.css'

import Header from './components/Header'
import Registration from './components/Registration';
import Login from './components/Login';
import React, { useState } from 'react';


function App() {

  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseRegistration = () => {
    setShowRegistration(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <Header onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} />
      {showRegistration && <Registration onClose={handleCloseRegistration} />}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </>
  );
}

export default App
