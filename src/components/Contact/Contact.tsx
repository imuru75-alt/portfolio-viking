import React, { useState } from 'react';
import './Contact.css';
import RuneText from '../RuneText/RuneText';
import { Send, Github, Mail, Copy, CheckCircle } from 'lucide-react';

import valleyBg from '../../assets/Contact/valley-bg.jpg';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "adiletniazov18@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Генерация капель дождя
  const rainDrops = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 0.5 + 0.5
  }));

  return (
    <section className="contact-section" id="contact">
      
      {/* ФОН 1: Долина с руническими камнями */}
      <div 
        className="valley-bg" 
        style={{ backgroundImage: `url(${valleyBg})` }}
      ></div>
      <div className="valley-overlay"></div>

      {/* ФОН 2: Идущий дождь */}
      <div className="rain-container">
        {rainDrops.map((drop) => (
          <div 
            key={drop.id} 
            className="rain-drop"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`
            }}
          ></div>
        ))}
      </div>

      {/* ФОН 3: Туман */}
      <div className="mist-bottom"></div>

      <div className="contact-container">
        <div className="contact-header">
          <span className="section-badge text-orange-500">
            <RuneText text="Связь" />
          </span>
          <h2 className="section-title font-cinzel text-white">
            <RuneText text="Отправить Ворона" />
          </h2>
          <p className="section-desc">
            Разведи костер и отправь весть. Моя кузня всегда открыта для новых Работ.
          </p>
        </div>

        <div className="contact-content">
          
          {/* МОНОЛИТ КОНТАКТОВ (Вместо свитка) */}
          <div className="contact-monolith">
            <div className="monolith-glow"></div>
            
            <h3 className="monolith-title font-cinzel">
              <RuneText text="Координаты" />
            </h3>
            
            <div className="contact-links">
              <a href="https://t.me/Ponyalteby" target="_blank" rel="noreferrer" className="contact-item group">
                <div className="contact-icon-wrapper telegram-glow">
                  <Send size={24} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Telegram</span>
                  <span className="contact-value">@Ponyalteby</span>
                </div>
              </a>

              <a href="https://github.com/SellVira" target="_blank" rel="noreferrer" className="contact-item group">
                <div className="contact-icon-wrapper github-glow">
                  <Github size={24} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/SellVira</span>
                </div>
              </a>

              <button onClick={handleCopyEmail} className="contact-item group text-left w-full">
                <div className="contact-icon-wrapper email-glow">
                  {copied ? <CheckCircle size={24} className="text-orange-500" /> : <Mail size={24} />}
                </div>
                <div className="contact-info flex-grow">
                  <span className="contact-label">Email (Почтовый голубь)</span>
                  <span className="contact-value">{email}</span>
                </div>
                <div className="copy-action">
                  {copied ? <span className="copied-text font-cinzel text-orange-500">Высечено!</span> : <Copy size={18} className="text-gray-500 group-hover:text-white transition-colors" />}
                </div>
              </button>
            </div>
          </div>

        </div>

        <footer className="footer">
          <div className="footer-divider"></div>
          <div className="footer-content">
            <div className="footer-logo font-cinzel">
              <span className="text-orange-500 mr-2">ᛉ</span> 
              <RuneText text="FORGE" />
            </div>
            <p className="footer-copyright text-gray-400 text-sm">
              © {new Date().getFullYear()} Выковано Адилетом. Во славу.
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
