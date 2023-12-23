import React, { useState, useEffect } from 'react';
// import './CircularProgressBar.css';

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="circular-progress-container">
      <div className="circular-progress">
        <div className="progress-value">{Math.round(progress)}%</div>
        <div className="progress-ring">
          <div
            className="progress"
            style={{ transform: `rotate(${progress * 3.6}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
