import React from 'react';
import { Github, Send, Linkedin, Mouse } from 'lucide-react';
import './Hero.css';
import RuneText from '../RuneText/RuneText';
import ForgeSparks from '../ForgeSparks/ForgeSparks';

const Hero = () => {

  // Функция для плавного скролла
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <ForgeSparks />

      {/* --- ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ ПО КРАЯМ (HUD) --- */}
      <div className="hero-hud-left">
        <span>v2.0.26</span>
        <div className="hud-line"></div>
        <span>NORDIC</span>
      </div>
      <div className="hero-hud-right">
        <span>COORD: 64°N 17°W</span>
        <div className="hud-line"></div>
        <span>FORGE ACTIVE</span>
      </div>

      {/* --- ПЛАВАЮЩИЕ СОЦСЕТИ --- */}
      <div className="hero-socials">
        <a href="https://github.com/SellVira" target="_blank" rel="noreferrer" className="social-link">
          <Github size={20} />
        </a>
        <a href="https://t.me/Ponyalteby" target="_blank" rel="noreferrer" className="social-link">
          <Send size={20} />
        </a>
        <a href="mailto:adiletniazov18@gmail.com" className="social-link">
          <Linkedin size={20} /> {/* Можешь оставить Linkedin или заменить иконку на Mail */}
        </a>
        <div className="social-line"></div>
      </div>

      {/* --- ГЛАВНЫЙ КОНТЕНТ --- */}
      <div className="hero-container">
        
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <RuneText text="The Hidden World Portfolio" />
        </div>

        <h1 className="hero-title font-cinzel">
          <RuneText text="Привет, я" /> <br />
          <span className="text-white">
            <RuneText text="Адилет" /> 
          </span>
        </h1>

        <h2 className="hero-subtitle text-dragon-fire">
          <RuneText text="Frontend Разработчик & Кузнец Интерфейсов" />
        </h2>

        <p className="hero-desc">
          <RuneText text="Я создаю цифровые миры, соединяя древнюю мощь технологий с современным дизайном." />
        </p>

        <div className="hero-actions">
          {/* Кнопка скроллит к Арсеналу */}
          <button className="hero-btn-primary" onClick={() => scrollToSection('arsenal')}>
            <RuneText text="Мой Арсенал" />
          </button>
          
          {/* Кнопка скроллит к Трофеям */}
          <button className="hero-btn-secondary" onClick={() => scrollToSection('projects')}>
            <RuneText text="Посмотреть Завоевания" />
          </button>
        </div>

      </div>

      {/* --- ИНДИКАТОР СКРОЛЛА ВНИЗ --- */}
      {/* Теперь при клике на скролл он тоже плавно опускает к Арсеналу */}
      <div className="hero-scroll" onClick={() => scrollToSection('arsenal')}>
        <span className="scroll-text">Свиток Судьбы</span>
        <Mouse size={20} className="scroll-icon" />
      </div>

    </section>
  );
};

export default Hero;
