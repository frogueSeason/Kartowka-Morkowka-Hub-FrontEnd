import React from 'react';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  return (
    <div>
      <h2>Регистрация</h2>
      <input placeholder="Имя" />
      <input placeholder="Фамилия" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Register</button>
    </div>
  );
};

export default RegisterForm;
