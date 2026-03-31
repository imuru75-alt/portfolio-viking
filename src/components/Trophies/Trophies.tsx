import React, { useState, useMemo } from 'react';
import './Trophies.css';
import RuneText from '../RuneText/RuneText';
import { Github, ExternalLink, X, Lock } from 'lucide-react';

import dragonEggImg from '../../assets/Trophies/Egg-Gnes.png';

import techrentImg from '../../assets/Trophies/techrent.png';
import agencyImg from '../../assets/Trophies/digital-agency.png';
import logoipsumImg from '../../assets/Trophies/logoipsum.png';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'forging' | 'sealed';
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "SonariaTracker",
    shortDesc: "Desktop-приложение для управления аккаунтами в игре Creatures of Sonaria.",
    fullDesc: "Мощное WPF приложение на C#. Включает в себя интеграцию с базой данных PostgreSQL (через Npgsql), работу с API, управление CORS и сложный UI/UX дизайн. Проект активно разрабатывается и скоро увидит свет.",
    tags: ["C#", "WPF", "PostgreSQL", "XAML", "Desktop"],
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop", // Оставляем заглушку, так как нет скрина
    status: 'forging',
  },
  {
    id: 2,
    title: "Viking Portfolio",
    shortDesc: "Интерактивное веб-портфолио с мистической атмосферой викингов.",
    fullDesc: "Одностраничное приложение (SPA) написанное на React и TypeScript. Использует Tailwind CSS v4 для стилизации, сложные CSS-анимации, кастомные SVG и генерацию частиц для создания эффекта погружения.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=600&auto=format&fit=crop", // Заглушка
    status: 'forging',
  },
  {
    id: 3,
    title: "Digital Agency UI",
    shortDesc: "Современный лендинг для цифрового агентства.",
    fullDesc: "Разработка пользовательского интерфейса с использованием архитектуры FSD (Feature-Sliced Design) и стилизацией через Tailwind CSS v4. Реализована сложная типографика, адаптивная сетка и темная тема.",
    tags: ["React", "Tailwind CSS", "FSD", "UI/UX"],
    image: agencyImg, // Твой скриншот!
    status: 'completed',
    githubUrl: "https://github.com/SellVira", 
  },
  {
    id: 4,
    title: "TechRent Service",
    shortDesc: "Сервис для аренды и продажи техники.",
    fullDesc: "Один из первых крупных проектов на чистом React. Реализован интерфейс каталога, навигация по категориям и карточки товаров. Отличный опыт работы с компонентным подходом до изучения продвинутых фреймворков.",
    tags: ["React", "JavaScript", "CSS", "Frontend"],
    image: techrentImg, // Твой скриншот!
    status: 'sealed', // Пометим как архивный, раз это старый код
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    shortDesc: "Светлый минималистичный лендинг для SaaS-продукта.",
    fullDesc: "Разработка стартовой страницы с акцентом на чистый дизайн и 3D-иллюстрации. Практика позиционирования сложных элементов и создания современных призывов к действию (CTA).",
    tags: ["React", "HTML/CSS", "Landing", "Design"],
    image: logoipsumImg, // Твой скриншот!
    status: 'completed',
    githubUrl: "https://github.com/SellVira", 
  }
];


const Trophies = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const snowflakes = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 5, 
      size: Math.random() * 4 + 2, 
    }));
  }, []);

  return (
    <section className="trophies-section" id="projects">
      
      {/* ФОН 1: Далекий пейзаж */}
      <div className="landscape-container">
        <div className="distant-mountain"></div>
        <div className="distant-clouds"></div>
        <div className="ice-horizon"></div>
      </div>

      {/* ФОН 2: Мистический туман */}
      <div className="mystic-fog"></div>

      {/* ФОН 3: Снег */}
      <div className="snow-container">
        {snowflakes.map((snow) => (
          <div 
            key={snow.id}
            className="snow-particle"
            style={{
              left: `${snow.left}%`,
              animationDelay: `${snow.delay}s`,
              animationDuration: `${snow.duration}s`,
              width: `${snow.size}px`,
              height: `${snow.size}px`
            }}
          />
        ))}
      </div>

      {/* КОНТЕНТ */}
      <div className="trophies-container">
        <div className="trophies-header">
          <span className="section-badge text-cyan-400">
            <RuneText text="Трофеи" />
          </span>
          <h2 className="section-title font-cinzel text-white">
            <RuneText text="Зал Славы" />
          </h2>
          <p className="section-desc">
            Эхо былых и грядущих свершений. Сайты, выкованные моим кодом.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card group">
              
              <div className="card-corner corner-tl font-cinzel">ᛦ</div>
              <div className="card-corner corner-tr font-cinzel">ᛉ</div>
              <div className="card-corner corner-bl font-cinzel">ᛏ</div>
              <div className="card-corner corner-br font-cinzel">ᚢ</div>

              {/* Статус проекта */}
              {project.status === 'forging' && (
                <div className="project-status-badge font-cinzel text-cyan-400 border-cyan-800/50">
                  Выковывается
                </div>
              )}
              {project.status === 'sealed' && (
                <div className="project-status-badge font-cinzel text-slate-400 border-slate-700 bg-slate-900/90">
                  Архив
                </div>
              )}

              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <button 
                    className="btn-mystic"
                    onClick={() => setSelectedProject(project)}
                  >
                    Изучить руны
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title font-cinzel">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dragon-nest-wrapper">
          <div className="egg-image-container">
            <div className="egg-aura"></div>
            <img src={dragonEggImg} alt="Dragon Egg in Ice Nest" className="real-egg-image" />
          </div>
          <p className="nest-caption font-cinzel text-cyan-600/50 mt-8 tracking-[0.3em] text-xs z-10 relative">
            Новые идеи зреют во льдах...
          </p>
        </div>
      </div>

      {/* --- МОДАЛЬНОЕ ОКНО --- */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content mystic-border" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-image-container">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <div className="modal-image-overlay"></div>
              
              {selectedProject.status === 'forging' && (
                <div className="modal-status-overlay">
                  <Lock size={48} className="mb-4 text-cyan-400 opacity-50" />
                  <span className="font-cinzel text-2xl text-cyan-200 tracking-widest">Проект в кузне</span>
                </div>
              )}
              {selectedProject.status === 'sealed' && (
                <div className="modal-status-overlay bg-slate-950/90">
                  <Lock size={48} className="mb-4 text-slate-500 opacity-50" />
                  <span className="font-cinzel text-2xl text-slate-300 tracking-widest">Скрыто во времени</span>
                </div>
              )}
            </div>
            
            <div className="modal-body">
              <h3 className="modal-title font-cinzel text-cyan-400">
                <RuneText text={selectedProject.title} />
              </h3>
              <p className="modal-desc">{selectedProject.fullDesc}</p>
              
              <div className="modal-actions">
                {selectedProject.githubUrl && selectedProject.status === 'completed' ? (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="action-link">
                    <Github size={20} /> Смотреть код
                  </a>
                ) : (
                  <div className="action-link disabled">
                    <Github size={20} /> Код скрыт во льдах
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trophies;
