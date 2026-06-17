import React, { useState } from 'react';
import { Globe, Smartphone, Ambulance, BrainCircuit, Calendar, ExternalLink, FileText } from './LucideIcons';
import { Github } from './BrandIcons';
import KioskDetailModal from './KioskDetailModal';
import BreathDetailModal from './BreathDetailModal';
import OvernightDetailModal from './OvernightDetailModal';

export default function Projects() {
  const [isKioskModalOpen, setIsKioskModalOpen] = useState(false);
  const [isBreathModalOpen, setIsBreathModalOpen] = useState(false);
  const [isOvernightModalOpen, setIsOvernightModalOpen] = useState(false);

  const projectsData = [
    {
      id: 1,
      name: '스터디 신청 웹 플랫폼',
      category: 'Web Platform Development',
      badge: 'Web Developer',
      date: '2023.08.01 ~ 2025.08.10',
      desc: '웹사이트 상에서 자유롭게 스터디를 생성하고 간편하게 수강/신청 프로세스를 밟을 수 있는 프로젝트 웹 플랫폼을 전담 개발했습니다.',
      tags: ['Web Frontend', 'JavaScript', 'UI/UX Design'],
      icon: Globe,
      github: 'https://github.com/minyook',
      notion: 'https://app.notion.com/p/Computer-Vision-Engineer-22dada2216e8807680a9fbdc51f67027?source=copy_link',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      badgeStyle: {}
    },
    {
      id: 2,
      name: '‘AI가 달라졌어요’ - 대화형 AI 키오스크',
      category: 'Conversational Kiosk App',
      badge: '최우수상 🏆',
      date: '2024.11 ~ 2024.12',
      desc: '2024 부산공유대학 해커톤 대회에서 최우수상을 수상한 프로젝트입니다. 대화형 AI 모델을 적용한 지능형 키보드/키오스크 모바일 디바이스 앱을 전담 개발했습니다.',
      tags: ['Kiosk App', 'Conversational AI', 'Kotlin', 'Hackathon'],
      icon: Smartphone,
      github: 'https://github.com/minyook',
      notion: 'https://app.notion.com/p/Computer-Vision-Engineer-22dada2216e8807680a9fbdc51f67027?source=copy_link',
      video: '/document/kiosk_opening.mp4',
      badgeStyle: { backgroundColor: 'var(--primary)', color: 'var(--bg-base)' }
    },
    {
      id: 3,
      name: 'AI 기반 실시간 응급실 공유 & AI 병원 추천',
      category: 'Emergency Room Platform',
      badge: '우수상 🎖️',
      date: '2025.07.01 ~ 2025.07.10',
      desc: '2025 동의 AI SW 융합 해커톤 대회 우수상 수상작입니다. 안드로이드 앱 XML 설계, 실시간 위치 서비스 및 유저 정보 관리 서비스 백오피스 연동 개발을 담당했습니다.',
      tags: ['Android SDK', 'XML Design', 'Location Service', 'GPS API'],
      icon: Ambulance,
      github: 'https://github.com/minyook',
      notion: 'https://app.notion.com/p/Computer-Vision-Engineer-22dada2216e8807680a9fbdc51f67027?source=copy_link',
      image: '/document/breath_img1.png',
      badgeStyle: { backgroundColor: 'var(--secondary)', color: 'var(--bg-base)' }
    },
    {
      id: 4,
      name: '🌙 Overnight.AI 멀티모달 스피치 자동 평가',
      category: 'Speech Evaluation System',
      badge: 'AI & LLM Developer',
      date: '2026.03.02 ~ 2026.06.12',
      desc: '발표 영상 및 오디오를 복합적으로 연계 분석해 점수를 진단하는 시스템입니다. 시스템 내 대화형 챗봇 개발 및 거대 언어 모델(LLM) 파인튜닝을 전담하여 모델을 구축했습니다.',
      tags: ['LLM Fine-Tuning', 'Chatbot Engine', 'Multimodal AI', 'Python'],
      icon: BrainCircuit,
      github: 'https://github.com/minyook',
      notion: 'https://app.notion.com/p/Computer-Vision-Engineer-22dada2216e8807680a9fbdc51f67027?source=copy_link',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      badgeStyle: {}
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">OUR PROJECT</span>
          <h2 className="section-title">대표 프로젝트 갤러리</h2>
        </div>
        
        {/* 3-Column Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const isClickable = project.id === 2 || project.id === 3 || project.id === 4;
            return (
              <div 
                key={project.id} 
                className="project-card reveal-up"
                style={{ 
                  cursor: isClickable ? 'pointer' : 'default',
                  transitionDelay: `${(index % 3) * 0.15}s` 
                }}
                onClick={(e) => {
                  // If link buttons are clicked, do not trigger modal
                  if (e.target.closest('a') || e.target.closest('.project-overlay-link-btn')) return;
                  if (project.id === 2) setIsKioskModalOpen(true);
                  if (project.id === 3) setIsBreathModalOpen(true);
                  if (project.id === 4) setIsOvernightModalOpen(true);
                }}
              >
                {/* Image Container with Zoom and Overlay */}
                <div className="project-img-box">
                  {project.video ? (
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  )}
                  
                  {/* Badge */}
                  <div className="project-badge" style={project.badgeStyle}>
                    {project.badge}
                  </div>

                  {/* Hover Overlay */}
                  <div className="project-overlay">
                    <h4 className="project-overlay-title">{project.name}</h4>
                    <p className="project-overlay-desc">{project.category}</p>
                    {isClickable && (
                      <div className="project-overlay-links">
                        <button 
                          className="project-overlay-link-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.id === 2) setIsKioskModalOpen(true);
                            if (project.id === 3) setIsBreathModalOpen(true);
                            if (project.id === 4) setIsOvernightModalOpen(true);
                          }}
                        >
                          CASE STUDY
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Project Body */}
                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.desc}</p>
                  
                  <span className="project-date" style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} />
                    {project.date}
                  </span>
                  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link" 
                      aria-label="Github 링크"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a 
                      href={project.notion} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link" 
                      aria-label="노션 링크"
                    >
                      <ExternalLink size={15} /> Notion
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Modals */}
      {isKioskModalOpen && <KioskDetailModal onClose={() => setIsKioskModalOpen(false)} />}
      {isBreathModalOpen && <BreathDetailModal onClose={() => setIsBreathModalOpen(false)} />}
      {isOvernightModalOpen && <OvernightDetailModal onClose={() => setIsOvernightModalOpen(false)} />}
    </section>
  );
}
