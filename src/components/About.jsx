import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Users, Trophy } from './LucideIcons';


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
        <div className="about-grid">
          
          {/* Left Column: Asymmetric Overlapping Images */}
          <div className="about-gallery reveal-left">
            <div className="about-gallery-item-1">
              <img 
                src="/document/about_vision.png" 
                alt="Autonomous Driving LiDAR & Object Detection" 
              />
            </div>
            <div className="about-gallery-item-2">
              <img 
                src="/document/about_network.png" 
                alt="UWB Smart Tag & Positioning Devices" 
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
            
            {/* Profile detail */}
            <div className="profile-meta-minimal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '24px', padding: '20px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
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

        {/* 3-Column History Grid (Education, Activities, Awards) */}
        <div className="about-history-grid reveal-up" style={{ marginTop: '80px' }}>
          
          {/* Column 1: Education & Research */}
          <div className="history-col">
            <h3 className="history-col-title">
              <GraduationCap size={20} /> Education & Research
            </h3>
            <div className="history-list">
              <div className="history-item">
                <div className="history-date">2026.09 ~ 2028.02</div>
                <div className="history-name">동의대학교 대학원 석사과정</div>
                <div className="history-desc">컴퓨터소프트웨어공학과 영상딥러닝 연구실 석사과정 연구원 (실시간 시맨틱 세그먼테이션 연구)</div>
              </div>
              <div className="history-item">
                <div className="history-date">2024.07 ~ 2026.08</div>
                <div className="history-name">동의대학교 영상딥러닝 연구실 학부 연구생</div>
                <div className="history-desc">컴퓨터 비전 및 UWB 등 이종 센서 데이터 융합(Sensor Fusion) 기술 연구 수행</div>
              </div>
              <div className="history-item">
                <div className="history-date">2021.03 ~ 2026.08</div>
                <div className="history-name">동의대학교 컴퓨터소프트웨어공학과 학부</div>
                <div className="history-desc">컴퓨터소프트웨어공학과 학사 졸업</div>
              </div>
              <div className="history-item">
                <div className="history-date">2018.03 ~ 2021.02</div>
                <div className="history-name">여수고등학교</div>
                <div className="history-desc">고등학교 졸업</div>
              </div>
            </div>
          </div>

          {/* Column 2: Experience & Activities */}
          <div className="history-col">
            <h3 className="history-col-title">
              <Users size={20} /> Experience & Activities
            </h3>
            <div className="history-list">
              <div className="history-item">
                <div className="history-date">2023.07 ~ 현재</div>
                <div className="history-name">부산 연합 IT 동아리 PROJECT 운영진</div>
                <div className="history-desc">프로젝트 기획 및 조율, 기술 세미나 진행, 개발 파트 멘토링 담당</div>
              </div>
              <div className="history-item">
                <div className="history-date">2026.03 ~ 2026.06</div>
                <div className="history-name">GDGoC DEU 활동</div>
                <div className="history-desc">Google Developer Groups on Campus 멤버로 참여하여 개발 기술 교류 진행</div>
              </div>
              <div className="history-item">
                <div className="history-date">2026.05.29</div>
                <div className="history-name">2026년도 춘계학술대회 참여</div>
                <div className="history-desc">컴퓨터 비전 및 딥러닝 관련 학술 연구 성과 발표 및 교류 진행</div>
              </div>
              <div className="history-item">
                <div className="history-date">2024.04 ~ 2024.08</div>
                <div className="history-name">GDSC DEU 3기 활동</div>
                <div className="history-desc">Google Developer Student Clubs 멤버로 참여하여 개발 기술 스택 교류</div>
              </div>
            </div>
          </div>

          {/* Column 3: Awards & Honors */}
          <div className="history-col">
            <h3 className="history-col-title">
              <Trophy size={20} /> Awards & Honors
            </h3>
            <div className="history-list">
              <div className="history-item">
                <div className="history-date">2026.07.08</div>
                <div className="history-name">부산 SW 품질캠프 테스팅 대회 참여</div>
                <div className="history-desc">2026년도 소프트웨어 품질 검증 및 테스트 시나리오 설계 대회 참여</div>
              </div>
              <div className="history-item">
                <div className="history-date">2026.04.25</div>
                <div className="history-name">Build with AI x GDG Busan 2026 - AI 해커톤</div>
                <div className="history-desc">전체 참여 55팀 중 Top 10 선정 (AI 기반 서비스 부문)</div>
              </div>
              <div className="history-item">
                <div className="history-date">2026.02</div>
                <div className="history-name">피싱스캠 예방 서비스 개발 경진대회 참여</div>
                <div className="history-desc">보이스피싱 및 스캠 사기 방지를 위한 지능형 서비스 모델 개발 및 출품</div>
              </div>
              <div className="history-item">
                <div className="history-date">2025.07.01 ~ 2025.07.10</div>
                <div className="history-name">동의 AI SW 융합 해커톤 대회 우수상 🎖️</div>
                <div className="history-desc">AI 기반 실시간 응급실 병상 공유 및 병원 추천 서비스 개발</div>
              </div>
              <div className="history-item">
                <div className="history-date">2025.07.01</div>
                <div className="history-name">부산 SW 품질캠프 테스팅 대회 참여</div>
                <div className="history-desc">2025년도 소프트웨어 기능성 검증 및 품질 평가 테스팅 수행</div>
              </div>
              <div className="history-item">
                <div className="history-date">2024.11 ~ 2024.12</div>
                <div className="history-name">부산 공유대학 해커톤 최우수상 🏆</div>
                <div className="history-desc">대화형 AI 모델을 적용한 지능형 키보드/키오스크 모바일 앱 개발</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
