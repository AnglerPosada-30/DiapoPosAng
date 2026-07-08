import React, { useState, useEffect } from 'react';
import { slidesData } from './data/slidesData';
import { Slide } from './components/Slide';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slidesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="presentation-layout">
      <Slide data={slidesData[currentIndex]} />
      
      <div className="fluent-progress">
        Diapositiva {currentIndex + 1} de {slidesData.length}
      </div>
    </div>
  );
}

export default App;