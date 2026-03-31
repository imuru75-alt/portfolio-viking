import React, { useMemo } from 'react';
import './ForgeSparks.css';

const ForgeSparks = () => {
  // Генерируем 30 случайных искр при загрузке
  const sparks = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Позиция по горизонтали (0-100%)
      animationDuration: 3 + Math.random() * 4, // Скорость полета (3-7 секунд)
      animationDelay: Math.random() * 5, // Задержка старта
      size: Math.random() * 4 + 2, // Размер искры (2-6px)
      opacity: Math.random() * 0.5 + 0.3, // Прозрачность
    }));
  }, []);

  return (
    <div className="sparks-container">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: `${spark.left}%`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            opacity: spark.opacity,
            animationDuration: `${spark.animationDuration}s`,
            animationDelay: `${spark.animationDelay}s`,
          }}
        />
      ))}
      {/* Легкое оранжевое свечение снизу (как от горна) */}
      <div className="forge-glow"></div>
    </div>
  );
};

export default ForgeSparks;
