import React, { useRef } from 'react';

export default function MagneticButton({ children, className, href, target, rel, ...props }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const position = btn.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    const btnSpan = btn.querySelector('span');
    const btnSvg = btn.querySelector('svg');
    if (btnSpan) btnSpan.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    if (btnSvg) btnSvg.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
    const btnSpan = btn.querySelector('span');
    const btnSvg = btn.querySelector('svg');
    if (btnSpan) btnSpan.style.transform = 'translate(0px, 0px)';
    if (btnSvg) btnSvg.style.transform = 'translate(0px, 0px)';
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element
      ref={btnRef}
      href={href}
      target={target}
      rel={rel}
      className={`btn-magnetic ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Element>
  );
}
