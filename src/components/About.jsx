import React from 'react';
import { Mail, Phone, MapPin, GraduationCap } from './LucideIcons';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">ABOUT US / PHILOSOPHY</span>
          <h2 className="section-title">본질과 기능의 융합을 통한 인지 기술 구현</h2>
        </div>
        
        {/* Asymmetric 2-Column Grid */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Left Column: Asymmetric Overlapping Images */}
          <div className="about-gallery reveal-left">
            <div className="about-gallery-item-1">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" 
                alt="Minimalist design work environment 1" 
              />
            </div>
            <div className="about-gallery-item-2">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" 
                alt="Minimalist design work environment 2" 
              />
            </div>
          </div>
          
          {/* Right Column: Narrative & History */}
          <div className="about-details reveal-right">
            <p className="about-text" style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              영상 비전 엔지니어 임민욱입니다. 동의대학교 컴퓨터소프트웨어공학과 영상 딥러닝 연구실 석사과정생으로, 자율주행의 핵심인 시맨틱 세그먼테이션(Semantic Segmentation) 등 최신 컴퓨터 비전 기술을 깊이 있게 연구하고 있습니다.
              <br /><br />
              카메라 비전뿐만 아니라 <strong>UWB(초광대역 무선 기술) 등 이종 센서 데이터를 융합(Sensor Fusion)</strong>하여, 모바일 환경에서 실시간으로 구동되는 최적화된 AI 인지 시스템을 개발하는 데 강점이 있습니다.
            </p>
            
            {/* Timeline info */}
            <div className="timeline-box" style={{ marginTop: '40px' }}>
              <h4 style={{
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
                color: 'var(--primary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <GraduationCap size={18} /> Education & Research
              </h4>
              
              <div className="timeline-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Master */}
                <div className="timeline-row" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div className="timeline-year" style={{ width: '130px', flexShrink: 0, fontSize: '13px', fontWeight: '700', color: 'var(--primary)' }}>
                    2026.09 ~ 2028.02
                  </div>
                  <div className="timeline-content" style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '2px' }}>
                      동의대학교 컴퓨터소프트웨어공학과 대학원
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      영상 딥러닝 연구실 석사과정 연구원 (실시간 시맨틱 세그먼테이션 연구)
                    </div>
                  </div>
                </div>

                {/* Bachelor */}
                <div className="timeline-row" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div className="timeline-year" style={{ width: '130px', flexShrink: 0, fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>
                    2021.03 ~ 2026.08
                  </div>
                  <div className="timeline-content" style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '2px' }}>
                      동의대학교 컴퓨터소프트웨어공학과 학부
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      학점 3.7/4.5 | 컴퓨터 비전 및 임베디드 코딩 졸업작품전 우수 개발 선정
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile detail */}
            <div className="profile-meta-minimal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '40px', padding: '20px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <strong>이름:</strong> 임민욱 (Min-yook Lim)
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <strong>연락처:</strong> 010-2470-8336
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <strong>이메일:</strong> limminyuk0815@gmail.com
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <strong>위치:</strong> 부산, 대한민국
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
