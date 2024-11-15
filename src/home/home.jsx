import './home.css';
import Footer from '../footer/footer';
import React from 'react';
import './homepage.png';  // Ваше изображение фона

const HomePage = () => {
  return (
    <div className="home-section">
      {/* Фоновая картинка для страницы */}
      <div className="home-background">
        <div>
          <h1 className="home-title">Welcome to Our Website!</h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel augue at risus venenatis consequat. Curabitur sit amet cursus lectus. Vivamus varius eu erat a tempor.
          </p>
        </div>
      </div>

      {/* Раздел About Us */}
      <div className="about-us-section">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          We are a dedicated team of professionals committed to providing the best services to our clients. Our mission is to create innovative solutions that meet the needs of our customers.
        </p>
      </div>

      {/* Добавляем Footer компонент */}
      <Footer />
    </div>
  );
};

export default HomePage;
