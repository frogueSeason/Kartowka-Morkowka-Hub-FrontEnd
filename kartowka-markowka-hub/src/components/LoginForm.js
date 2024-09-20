import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  return (
    <div>
      <h2>Вход</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
};

export default LoginForm;
