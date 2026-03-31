import React, { useMemo } from 'react';
import './Arsenal.css';
import RuneText from '../RuneText/RuneText';
import swordImg from '../../assets/Arsenal/Sword2-no-bg-preview (carve.photos).png';

import chainImg from '../../assets/Arsenal/chain-texture.png';
import axeImg from '../../assets/Arsenal/axe.png';
import shieldImg from '../../assets/Arsenal/shield.png';
import hammerImg from '../../assets/Arsenal/hammer.png';

interface FloatingRune {
  id: number;
  rune: string;
  angle: number;
  radius: number;
  direction: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
}

const Arsenal = () => {
  const floatingRunes = useMemo<FloatingRune[]>(() => {
    const RUNES = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      rune: RUNES[Math.floor(Math.random() * RUNES.length)],
      angle: Math.random() * 360,
      radius: Math.random() * 120 + 80, // Чуть сжали орбиту под меч
      direction: Math.random() > 0.5 ? 1 : -1,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * 5,
      size: Math.random() * 1.5 + 0.5,
      rotation: Math.random() * 360,
    }));
  }, []);

  const hangingItems = [
    { id: 1, src: axeImg, left: 10, chainLength: 150, size: 80, delay: 0 },
    { id: 2, src: shieldImg, left: 25, chainLength: 220, size: 100, delay: -2 },
    { id: 3, src: hammerImg, left: 40, chainLength: 100, size: 70, delay: -1 },
    { id: 4, src: shieldImg, left: 60, chainLength: 280, size: 110, delay: -4 },
    { id: 5, src: hammerImg, left: 75, chainLength: 160, size: 80, delay: -3 },
    { id: 6, src: axeImg, left: 90, chainLength: 190, size: 85, delay: -1.5 },
  ];

  return (
    <section className="arsenal-section" id="arsenal">
      
      {/* Раскаленное оружие на фоне */}
      <div className="armory-bg">
        {hangingItems.map((item) => (
          <div key={item.id} className="hanging-item" style={{ left: `${item.left}%`, animationDelay: `${item.delay}s` }}>
            <div className="chain-real fire-chain" style={{ height: `${item.chainLength}px`, backgroundImage: `url(${chainImg})` }}></div>
            <img src={item.src} alt="Prop" className="hanging-prop fire-prop" style={{ width: `${item.size}px` }} />
          </div>
        ))}
      </div>

      <div className="forge-mist"></div>

      <div className="arsenal-container">
        <div className="arsenal-header">
          <span className="section-badge text-dragon-fire">
            <RuneText text="Навыки" />
          </span>
          <h2 className="section-title font-cinzel">
            <RuneText text="Мой Арсенал" />
          </h2>
        </div>

        {/* === RPG АЛТАРЬ / ДЕРЕВО НАВЫКОВ === */}
        <div className="forge-altar-layout">
          
          {/* ЛЕВАЯ КОЛОННА */}
          <div className="altar-column column-left">
            <div className="chiseled-card group">
              <div className="card-glow"></div>
              <h3 className="card-title">Frontend Ядро</h3>
              <p className="card-subtitle">Основа любого проекта.</p>
              <div className="tech-tags relative z-10">
                <span className="tech-tag">React 18</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">JavaScript (ES6+)</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>

            <div className="chiseled-card group mt-8">
              <div className="card-glow"></div>
              <h3 className="card-title">Инструменты Кузни</h3>
              <p className="card-subtitle">Управление и сборка.</p>
              <div className="tech-tags relative z-10">
                <span className="tech-tag">Git / GitHub</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">npm / pnpm</span>
              </div>
            </div>
          </div>

          {/* ЦЕНТР (МЕЧ И РУНЫ) */}
          <div className="altar-center">
            {floatingRunes.map((item) => (
              <div 
                key={item.id}
                className="rune-orbit-wrapper"
                style={{
                  '--start-angle': `${item.angle}deg`,
                  '--end-angle': `${item.angle + 360 * item.direction}deg`,
                  '--radius': `${item.radius}px`,
                  animationDuration: `${item.duration}s`,
                } as React.CSSProperties}
              >
                <span className="floating-rune font-cinzel" style={{ transform: `rotate(${item.rotation}deg)`, fontSize: `${item.size}rem`, animationDelay: `${item.delay}s` }}>
                  {item.rune}
                </span>
              </div>
            ))}

            <div className="sword-altar-wrapper">
              {/* Магический круг под мечом */}
              <div className="altar-rune-circle"></div>
              <div className="forge-core"></div>
              <img src={swordImg} alt="Viking Sword" className="sword-icon" />
            </div>
          </div>

          {/* ПРАВАЯ КОЛОННА */}
          <div className="altar-column column-right">
            <div className="chiseled-card group">
              <div className="card-glow"></div>
              <h3 className="card-title">Стилизация & UI</h3>
              <p className="card-subtitle">Создание визуального опыта.</p>
              <div className="tech-tags relative z-10">
                <span className="tech-tag highlight">Tailwind CSS v4</span>
                <span className="tech-tag">CSS Modules</span>
                <span className="tech-tag">Figma</span>
              </div>
            </div>

            <div className="chiseled-card group mt-8">
              <div className="card-glow"></div>
              <h3 className="card-title">Архитектура</h3>
              <p className="card-subtitle">Масштаб и структура.</p>
              <div className="tech-tags relative z-10">
                <span className="tech-tag">FSD</span>
                <span className="tech-tag">Адаптив</span>
                <span className="tech-tag">SPA Routing</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Arsenal;
