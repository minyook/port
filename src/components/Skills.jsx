import React, { useEffect, useRef, useState } from 'react';
import { ScanEye, Cpu } from './LucideIcons';

export default function Skills() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cvSkills = [
    { name: 'Semantic Segmentation / Object Detection', percent: '85%' },
    { name: 'Deep Learning Framework (PyTorch)', percent: '90%' },
    { name: 'LLM Fine-Tuning & Prompt Optimization', percent: '80%' },
  ];

  const systemSkills = [
    { name: 'UWB & 이종 센서 데이터 융합(Sensor Fusion)', percent: '80%' },
    { name: 'Android Application Development (Kotlin)', percent: '85%' },
    { name: 'Git / GitHub & DevOps Collaboration', percent: '85%' },
  ];

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHAT I CAN DO</span>
          <h2 className="section-title">나의 기술 스택</h2>
        </div>
        
        <div className="skills-grid">
          {/* Category 1: Computer Vision & AI */}
          <div className="skills-category reveal-left">
            <h3>
              <ScanEye size={20} /> Computer Vision & AI
            </h3>
            <div className="skills-list">
              {cvSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: isAnimated ? skill.percent : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Sensor Fusion & Systems */}
          <div className="skills-category reveal-right">
            <h3>
              <Cpu size={20} /> Sensor Fusion & Systems
            </h3>
            <div className="skills-list">
              {systemSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: isAnimated ? skill.percent : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
