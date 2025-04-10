import React, { useEffect, useRef } from 'react';

const CircleCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Detect background color and invert cursor color
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const isDark = isDarkColor(bgColor);
        cursor.style.backgroundColor = isDark ? 'white' : 'black';
        cursor.style.borderColor = isDark ? 'black' : 'white';
      }
    };

    const isDarkColor = (color) => {
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return false;
      const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
      return brightness < 128;
    };

    const addGrow = () => cursor.classList.add('grow');
    const removeGrow = () => cursor.classList.remove('grow');

    document.addEventListener('mousemove', moveCursor);

    const hoverTargets = document.querySelectorAll('a, button');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', addGrow);
      el.addEventListener('mouseleave', removeGrow);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverTargets.forEach(el => {
        el.removeEventListener('mouseenter', addGrow);
        el.removeEventListener('mouseleave', removeGrow);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="circle-cursor hidden sm:block"
      ></div>

      <style>{`
        @media (max-width: 767px) {
          html, body {
            cursor: auto !important;
          }
        }
        @media (min-width: 768px) {
          html, body {
            cursor: none !important;
          }
        }
        .circle-cursor {
          width: 20px;
          height: 20px;
          background-color: black;
          border: 2px solid white;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }
        .circle-cursor.grow {
          transform: translate(-50%, -50%) scale(1.8);
        }
      `}</style>
    </>
  );
};

export default CircleCursor;
