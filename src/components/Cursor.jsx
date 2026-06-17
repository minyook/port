import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;
    let cursorVisible = false;

    const lerpDot = 0.3;
    const lerpOutline = 0.15;
    let animationId = null;

    const handleMouseMove = (e) => {
      if (!cursorVisible) {
        dot.style.opacity = '1';
        outline.style.opacity = '1';
        cursorVisible = true;
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      dot.style.opacity = '0';
      outline.style.opacity = '0';
      cursorVisible = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animateCursor = () => {
      dotX += (mouseX - dotX) * lerpDot;
      dotY += (mouseY - dotY) * lerpDot;

      outlineX += (mouseX - outlineX) * lerpOutline;
      outlineY += (mouseY - outlineY) * lerpOutline;

      dot.style.transform = `translate(-50%, -50%) translate(${dotX}px, ${dotY}px)`;
      outline.style.transform = `translate(-50%, -50%) translate(${outlineX}px, ${outlineY}px)`;

      animationId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Use event delegation to check if mouse is hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .project-card, .social-btn');
      if (target) {
        outline.classList.add('hovered');
      } else {
        outline.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" id="cursor-dot"></div>
      <div ref={outlineRef} className="custom-cursor-outline" id="cursor-outline"></div>
    </>
  );
}
