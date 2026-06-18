import React, { useEffect } from 'react';
import useScrollReveal from './hooks/useScrollReveal';
import Cursor from './components/Cursor';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Qna from './components/Qna';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Activate viewport scroll reveal animations (reveal-up, reveal-left, reveal-right)
  useScrollReveal();

  // Code security features
  useEffect(() => {
    // Disable right-click for basic security
    const handleContextMenu = (e) => {
      e.preventDefault();
      console.warn('보안을 위해 마우스 우클릭이 제한됩니다.');
    };

    // Print a premium security warning in the console (similar to Google, Discord, Facebook)
    console.log(
      '%c⚠️ WARNING!',
      'color: #ff3e3e; font-size: 30px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); font-family: sans-serif;'
    );
    console.log(
      '%c이 영역은 개발자용 브라우저 콘솔입니다. 이 포트폴리오의 소스 코드 및 디자인 자산은 저작권법의 보호를 받으며 무단 복제 및 무단 도용은 엄격히 금지됩니다.',
      'color: #c5b3a6; font-size: 13px; font-family: sans-serif; line-height: 1.5;'
    );

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      {/* 1. Custom cursor with lerp physics */}
      <Cursor />

      {/* 2. Interactive grid and gradient light orbs background */}
      <Background />

      {/* 3. Sticky header navigation */}
      <Header />

      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Qna />
        <Contact />
      </main>

      {/* 4. Footer & Back-to-Top link */}
      <Footer />
    </>
  );
}

export default App;
