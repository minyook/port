import React, { useState, useEffect } from 'react';
import { Sun, Moon } from './LucideIcons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio_theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Header slimness toggler
      setIsScrolled(window.scrollY > 50);

      // 2. Page top scroll progress indicator
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((window.scrollY / totalScrollHeight) * 100);
      }

      // 3. Highlight menu item based on scrolling position
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update HTML data-theme attribute and save to localStorage on change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'ABOUT US', href: '#about', id: 'about' },
    { name: 'PROJECT', href: '#projects', id: 'projects' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
    { name: 'QnA', href: '#qna', id: 'qna' },
  ];

  return (
    <>
      <div 
        className="scroll-progress-bar" 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#" className="logo">
            <span>MIN</span>YOOK
          </a>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href} 
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button 
              className="theme-toggle" 
              id="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="테마 전환"
            >
              {theme === 'dark' ? (
                <Moon className="icon-moon" size={20} />
              ) : (
                <Sun className="icon-sun" size={20} />
              )}
            </button>
            
            <button 
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
              id="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
