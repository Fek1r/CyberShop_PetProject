import React, { useState } from "react";
import "./login.css";
import { useTranslation } from 'react-i18next';
import './i18n';
import Footer from '../../components/footer/footer';

function Login() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="returner-login">
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-container">
          <h1 className="login-register-title">{t('register')}</h1>

          <section className="login-input-box">
            <input
              type="text"
              name="username"
              placeholder={t('username')}
            />
            <i className="login-icon bx bxs-user"></i>
          </section>

          <section className="login-input-box">
            <input
              type="email"
              name="email"
              placeholder={t('email')}
            />
            <i className="login-icon bx bxs-envelope"></i>
          </section>

          <section className="login-input-box">
            <input
              type="password"
              name="password"
              placeholder={t('password')}
            />
            <i className="login-icon bx bxs-lock-alt"></i>
          </section>

          <section className="login-input-box">
            <input
              type="password"
              name="confirm-password"
              placeholder={t('confirmPassword')}
            />
            <i className="login-icon bx bxs-lock-alt"></i>
          </section>

          <button className="login-register-button" type="submit">
            {t('register')}
          </button>

          <h5 className="login-already-have-account">
            {t('alreadyHaveAccount')} {" "}
            <a href="#">
              <b>{t('login')}</b>
            </a>
          </h5>

          <div className="login-language-switcher">
            <button onClick={() => changeLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
            <button onClick={() => changeLanguage('ru')} className={language === 'ru' ? 'active' : ''}>RU</button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;