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

  // Code security features (Disable context menu and common developer tool shortcuts)
  useEffect(() => {
    // A. Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
      console.warn('보안을 위해 마우스 우클릭이 비활성화되어 있습니다.');
    };

    // B. Disable DevTools shortcuts
    const handleKeyDown = (e) => {
      // F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        console.warn('보안을 위해 개발자 도구(F12) 단축키가 비활성화되어 있습니다.');
        return false;
      }

      // Ctrl + Shift + I (DevTools)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
        e.preventDefault();
        console.warn('개발자 도구 단축키가 제한되어 있습니다.');
        return false;
      }

      // Ctrl + Shift + J (Console)
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
        console.warn('콘솔 창 단축키가 제한되어 있습니다.');
        return false;
      }

      // Ctrl + Shift + C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
        e.preventDefault();
        console.warn('요소 탐색 단축키가 제한되어 있습니다.');
        return false;
      }

      // Ctrl + U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
        console.warn('소스 보기 단축키가 제한되어 있습니다.');
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
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
