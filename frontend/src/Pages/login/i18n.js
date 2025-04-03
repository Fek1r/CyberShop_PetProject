import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Переводы для разных языков
const resources = {
  en: {
    translation: {
      register: "Register",
      username: "Username",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      alreadyHaveAccount: "Already have an account?",
      login: "Login"
    }
  },
  ru: {
    translation: {
      register: "Регистрация",
      username: "Имя пользователя",
      email: "Электронная почта",
      password: "Пароль",
      confirmPassword: "Подтвердите пароль",
      alreadyHaveAccount: "Уже есть аккаунт?",
      login: "Войти"
    }
  }
};

i18n
  .use(initReactI18next) // подключаем react-i18next
  .init({
    resources,
    lng: 'en', // по умолчанию язык - английский
    keySeparator: false, // не используем разделители для ключей
    interpolation: {
      escapeValue: false // для React не нужно экранирование
    }
  });

export default i18n;