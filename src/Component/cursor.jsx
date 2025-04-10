import React, { useEffect, useRef } from 'react';

const CircleCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addGrow = () => cursor.classList.add('grow');
    const removeGrow = () => cursor.classList.remove('grow');

    document.addEventListener('mousemove', moveCursor);

    // Add hover effects on all links and buttons
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
        className="circle-cursor"
      ></div>

      <style>{`
        html, body {
          cursor: none !important;
        }
        .circle-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid black;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .circle-cursor.grow {
          transform: translate(-50%, -50%) scale(1.8);
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default CircleCursor;
