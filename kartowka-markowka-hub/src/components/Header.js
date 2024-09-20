import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ onLoginClick, onRegisterClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-logo">KartowkaMarkowkaHub</h1>
      </div>
      <nav className="header-nav">
        <a href="/products">Продукция</a>
        <a href="/cart">Корзина</a>
        <a href="/orders">Мои заказы</a>
      </nav>
      <div className="header-right">
        <a href="#" onClick={onRegisterClick}>Регистрация</a>
        <a href="#" onClick={onLoginClick}>Войти</a>
        <div className="header-search">
          <input type="text" placeholder="Найти" />
          <button>Найти</button>
        </div>
        <span className="header-location">Усть-Каменогорск</span>
      </div>
    </header>
  );
}

export default Header;
