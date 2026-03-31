import React, { useState, useEffect } from 'react';
import './RuneText.css';

const RUNE_DICT: Record<string, string> = {
  a: 'ᚨ', b: 'ᛒ', c: 'ᚲ', d: 'ᛞ', e: 'ᛖ', f: 'ᚠ', g: 'ᚷ', h: 'ᚺ',
  i: 'ᛁ', j: 'ᛃ', k: 'ᚲ', l: 'ᛚ', m: 'ᛗ', n: 'ᚾ', o: 'ᛟ', p: 'ᛈ',
  q: 'ᚲ', r: 'ᚱ', s: 'ᛊ', t: 'ᛏ', u: 'ᚢ', v: 'ᚹ', w: 'ᚹ', x: 'ᛉ',
  y: 'ᛃ', z: 'ᛉ',
  а: 'ᚨ', б: 'ᛒ', в: 'ᚹ', г: 'ᚷ', д: 'ᛞ', е: 'ᛖ', ё: 'ᛖ', ж: 'ᛃ',
  з: 'ᛉ', и: 'ᛁ', й: 'ᛃ', к: 'ᚲ', л: 'ᛚ', м: 'ᛗ', н: 'ᚾ', о: 'ᛟ',
  п: 'ᛈ', р: 'ᚱ', с: 'ᛊ', т: 'ᛏ', у: 'ᚢ', ф: 'ᚠ', х: 'ᚺ', ц: 'ᛊ',
  ч: 'ᚲ', ш: 'ᛊ', щ: 'ᛊ', ъ: 'ᛊ', ы: 'ᛁ', ь: 'ᛁ', э: 'ᛖ', ю: 'ᛃ', я: 'ᛃ',
};

const translateToRunes = (text: string): string[] => {
  return text.split('').map(char => {
    const lowerChar = char.toLowerCase();
    return RUNE_DICT[lowerChar] || char; 
  });
};

interface RuneTextProps {
  text: string;
  className?: string;
}

const RuneText: React.FC<RuneTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState<string[]>(() => translateToRunes(text));

  useEffect(() => {
    // Ждем 0.6 секунды
    const startDelay = setTimeout(() => {
      
      const indices = Array.from({ length: text.length }, (_, i) => i);
      // Рандомизируем порядок
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      let currentIndex = 0;

      const interval = setInterval(() => {
        // ИСПРАВЛЕНИЕ: Жестко фиксируем индекс для текущего тика ДО вызова состояния!
        const targetIndex = indices[currentIndex];
        
        setDisplayText((currentChars) => {
          const newChars = [...currentChars];
          newChars[targetIndex] = text[targetIndex]; // Используем зафиксированный индекс
          return newChars;
        });

        currentIndex++;

        if (currentIndex >= indices.length) {
          clearInterval(interval);
        }
      }, 20); // 20мс - стремительный взлом

      return () => clearInterval(interval);
    }, 600); 

    return () => clearTimeout(startDelay);
  }, [text]);

  return <span className={`rune-text ${className}`}>{displayText.join('')}</span>;
};

export default RuneText;
