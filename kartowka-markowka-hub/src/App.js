import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Исправлен путь
import LoginForm from './components/LoginForm'; // Исправлен путь
import RegisterForm from './components/RegisterForm'; // Исправлен путь
import Modal from './components/Modal'; // Исправлен путь
import ProductPage from './components/ProductPage'; // Страница "Продукция"
import CartPage from './components/CartPage'; // Страница "Корзина"
import OrdersPage from './components/OrdersPage'; // Страница "Мои Заказы"
import './App.css';

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

  const openRegisterModal = () => setRegisterOpen(true);
  const closeRegisterModal = () => setRegisterOpen(false);

  return (
    <Router>
      <div className="App">
        <Header
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
        />

        <Modal isOpen={isLoginOpen} onClose={closeLoginModal}>
          <LoginForm />
        </Modal>

        <Modal isOpen={isRegisterOpen} onClose={closeRegisterModal}>
          <RegisterForm />
        </Modal>

        <Routes> {/* Заменено Switch на Routes */}
          <Route path="/products" element={<ProductPage />} /> {/* Правильная запись для маршрутов в версии 6 */}
          <Route path="/cart" element={<CartPage />} /> {/* Страница для корзины */}
          <Route path="/orders" element={<OrdersPage />} /> {/* Страница для заказов */}
          <Route path="/" element={
            <div className="content">
              <h1>Добро пожаловать в KartowkaMarkowkaHub</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
