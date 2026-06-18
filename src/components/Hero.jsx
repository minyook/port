import React, { useState, useEffect } from 'react';
import { ArrowRight } from './LucideIcons';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimalist Interior Design Studio'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      alt: 'Modern Workspace & Architecture office'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      alt: 'Creative Design Studio Philosophy'
    }
  ];

  // Auto-play slider every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="section hero" id="hero" style={{ height: 'auto', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px 0' }}>
      <div className="container hero-container">
        
        {/* Left Column: Title and details */}
        <div className="hero-content">
          <span className="hero-subtitle reveal-up" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '13px', fontWeight: '600' }}>
            Computer Vision Engineer
          </span>
          <h1 className="hero-title reveal-up" style={{ transitionDelay: '0.1s', fontSize: '52px', lineHeight: '1.2', fontWeight: '700', margin: '20px 0 24px 0' }}>
            임민욱 <span style={{ fontWeight: '300' }}>포트폴리오</span><br />
            <span style={{ color: 'var(--primary)' }}>영상 비전</span> 엔지니어
          </h1>
          <p className="hero-desc reveal-up" style={{ transitionDelay: '0.2s', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '40px', maxWidth: '580px' }}>
            동의대학교 컴퓨터소프트웨어공학과 영상 딥러닝 연구실 석사과정생으로, 자율주행의 핵심인 시맨틱 세그먼테이션(Semantic Segmentation) 등 최신 컴퓨터 비전 기술을 깊이 있게 연구하고 있습니다.
          </p>
          <div className="hero-btns reveal-up" style={{ transitionDelay: '0.3s', display: 'flex', gap: '16px' }}>
            <MagneticButton href="#projects" className="btn btn-primary">
              <span>PROJECTS</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-outline">
              <span>CONTACT ME</span>
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: React Slider Showcase */}
        <div className="hero-visual-slider reveal-right" style={{ transitionDelay: '0.2s' }}>
          <div className="hero-slider-wrapper">
            <div className="hero-slider">
              <div 
                className="hero-slides" 
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div className="hero-slide" key={slide.id}>
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                    />
                  </div>
                ))}
              </div>
              
              {/* Dot Indicators */}
              <div className="hero-slider-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`hero-dot ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
