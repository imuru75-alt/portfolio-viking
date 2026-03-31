import React from 'react';
import './Header.css';
import RuneText from '../RuneText/RuneText';

const Header = () => {

  // Функция для плавного скролла к секции по ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        
        {/* Логотип с расшифровкой */}
        <div className="header-logo font-cinzel cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="logo-rune text-dragon-fire">ᛉ</span> 
          <RuneText text="FORGE" />
        </div>

        {/* Навигация с расшифровкой */}
        <nav className="header-nav">
          <button onClick={() => scrollToSection('home')} className="nav-link bg-transparent border-none cursor-pointer">
            <RuneText text="Главная" />
          </button>
          <button onClick={() => scrollToSection('arsenal')} className="nav-link bg-transparent border-none cursor-pointer">
            <RuneText text="Арсенал" />
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link bg-transparent border-none cursor-pointer">
            <RuneText text="Завоевания" />
          </button>
        </nav>

        {/* Кнопка связи */}
        <div className="header-actions">
          <button className="contact-btn" onClick={() => scrollToSection('contact')}>
            <RuneText text="Отправить Ворона" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
