import React from 'react';
import { ChevronUp } from './LucideIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="copyright">&copy; 2026 Min-yook Lim. All rights reserved.</p>
        <button 
          className="back-to-top" 
          id="back-to-top" 
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
}
