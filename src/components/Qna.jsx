import React, { useState } from 'react';
import { Plus } from './LucideIcons';

export default function Qna() {
  const [activeItem, setActiveItem] = useState(null);

  const qnaData = [
    {
      id: 1,
      question: '어떤 연구 분야에 집중하고 있나요?',
      answer: '주로 컴퓨터 비전 기반의 시맨틱 세그먼테이션(Semantic Segmentation)과 UWB(초광대역 무선 기술) 등 이종 센서 데이터를 결합한 실시간 위치 인지 및 센서 퓨전(Sensor Fusion) 알고리즘 연구에 주력하고 있습니다. 이를 통해 자율주행이나 지능형 실내 탐색 시스템의 인지 성능을 고도화하고 있습니다.'
    },
    {
      id: 2,
      question: '주로 사용하는 기술 스택은 무엇인가요?',
      answer: 'AI 모델 설계 및 학습에는 PyTorch, Python, OpenCV를 기본적으로 사용하며, 최적화 및 시뮬레이션을 위해 C++을 다룹니다. 임베디드 및 모바일 애플리케이션 이식 환경을 구축하기 위해 Kotlin, Android SDK 환경에서의 개발에도 숙련되어 있습니다.'
    },
    {
      id: 3,
      question: '프로젝트 진행 시 협업 및 개발 방식은 어떻게 되나요?',
      answer: 'Git/GitHub를 통한 브랜치 관리 및 협업 코딩 규약을 엄수하며, Notion을 이용해 정량화된 설계 명세와 마일스톤 일정을 정교하게 관리합니다. 다수의 팀 프로젝트에서 메인 PM 및 AI 엔진 핵심 개발자로 활약하며 유기적인 소통을 주도해 왔습니다.'
    },
    {
      id: 4,
      question: '모바일/임베디드 환경에서의 AI 최적화 경험이 있나요?',
      answer: '네, 해커톤 최우수상 수상작인 대화형 AI 키오스크 및 우수상 수상작인 응급실 공유 시스템 개발 당시, 한정된 모바일 디바이스 리소스 내에서 실시간 비디오 프레임 추출, 대화형 AI 모델 추론, 그리고 위치 서비스가 메모리 누수 없이 실시간으로 비동기 구동되도록 스레드 및 메모리 프로파일링 최적화를 완수했습니다.'
    },
    {
      id: 5,
      question: '앞으로의 연구 및 학업 계획은 어떻게 되나요?',
      answer: '동의대학교 컴퓨터소프트웨어공학과 영상 딥러닝 연구실 석사과정에 진학하여 자율주행 차량 및 소형 지능형 로봇이 주변 장애물을 신속하고 정확하게 인지하도록 돕는 실시간 경량 딥러닝 인지 백엔드 기술 연구를 고도화할 계획입니다.'
    }
  ];

  const toggleAccordion = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section qna" id="qna">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ margin: '0 auto 12px auto' }}>QnA / FAQ</span>
          <h2 className="section-title">자주 묻는 질문</h2>
        </div>
        
        {/* Accordion List */}
        <div className="qna-grid">
          {qnaData.map((item) => (
            <div 
              key={item.id} 
              className={`qna-item ${activeItem === item.id ? 'active' : ''}`}
            >
              <button 
                className="qna-question" 
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={activeItem === item.id}
              >
                <span>{item.question}</span>
                <span className="qna-icon">
                  <Plus size={16} />
                </span>
              </button>
              
              <div className="qna-answer-wrapper">
                <div className="qna-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
