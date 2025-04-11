import React, { useEffect, useRef } from 'react';

const CircleCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const isDarkColor = (color) => {
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return false;
      const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
      return brightness < 128;
    };

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      const element = document.elementFromPoint(x, y);
      if (element) {
        const computedCursor = window.getComputedStyle(element).cursor;
        const tagName = element.tagName.toLowerCase();
        const isTypingField = ['input', 'textarea'].includes(tagName) || element.isContentEditable;

        if (computedCursor === 'pointer' || isTypingField) {
          cursor.style.display = 'none'; // Hide for inputs, buttons, etc.
        } else {
          cursor.style.display = 'block';

          const bgColor = window.getComputedStyle(element).backgroundColor;
          const isDark = isDarkColor(bgColor);
          cursor.style.backgroundColor = isDark ? 'white' : 'black';
          cursor.style.borderColor = isDark ? 'black' : 'white';
        }
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
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
      `}</style>
    </>
  );
};

export default CircleCursor;
