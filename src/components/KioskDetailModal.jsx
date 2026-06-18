import React, { useEffect } from 'react';
import { X } from './LucideIcons';

export default function KioskDetailModal({ onClose }) {
  // Prevent background scrolling and close modal on Escape key
  useEffect(() => {
    document.body.classList.add('modal-open');
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose} aria-label="닫기">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-badge">최우수상 🏆</span>
          <span className="modal-category">Conversational Kiosk App</span>
          <h2 className="modal-title">‘AI가 달라졌어요’ - 대화형 AI 키오스크</h2>
          <p className="modal-subtitle">AI 기술을 활용한 듀얼 주문 시스템(클래식 UI/대화형 AI) 및 실시간 매장 관리 플랫폼</p>
          
          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <strong>팀명:</strong> AI가 달라졌어요
            </div>
            <div className="modal-meta-item">
              <strong>발표자 및 개발 총괄:</strong> 이선권
            </div>
            <div className="modal-meta-item">
              <strong>디자인 및 기획:</strong> 임민욱, 하일명
            </div>
            <div className="modal-meta-item">
              <strong>개발 기간:</strong> 2024.11 ~ 2024.12 (2개월)
            </div>
          </div>
        </div>

        <div className="modal-body">
          {/* Opening Video */}
          <div className="modal-video-container">
            <h4 style={{ marginBottom: '12px' }}>🎬 프로젝트 소개 및 오프닝 영상</h4>
            <video 
              src={`${import.meta.env.BASE_URL}document/kiosk_opening.mp4`} 
              className="modal-video" 
              controls 
              autoPlay 
              loop 
              muted
            ></video>
          </div>

          <h3>1. 서론 (Introduction)</h3>
          <h4>1.1. 개발 배경 및 필요성</h4>
          <p>
            최근 외식업계에 도입된 키오스크는 주문 효율성을 높이는 데 기여했지만, 동시에 새로운 문제점들을 드러냈습니다. 복잡한 UI와 일방적인 터치 방식은 디지털 기기에 익숙하지 않은 사용자들에게 어려움을 주며, 고객의 다양한 요구사항을 반영하지 못해 지루한 주문 경험을 제공합니다. 또한, AI 기술의 발전에도 불구하고 실제 키오스크 서비스에서의 활용은 미미하며, 점주들이 사용하는 관리자 기능 역시 복잡하여 데이터 활용도가 떨어지는 실정입니다.
          </p>
          <p>
            본 프로젝트는 이러한 문제들을 해결하기 위해 시작되었습니다. <strong>가상의 알바생과 대화하듯 즐겁게 주문하는 경험</strong>을 제공하고, 디지털 소외계층을 포함한 누구나 쉽고 직관적으로 사용할 수 있는 키오스크를 만들고자 했습니다. 더 나아가, 점주에게는 AI를 통해 매장 운영의 효율을 극대화할 수 있는 강력한 데이터 분석 도구를 제공하는 것을 목표로 합니다.
          </p>

          <h4>1.2. 개발 목표 및 내용</h4>
          <p>
            본 프로젝트는 다음과 같은 세 가지 핵심 목표를 가집니다.
          </p>
          <p>
            1. <strong>직관적인 사용자 경험 (Intuitive UX)</strong>: 고객이 음성으로 자연스럽게 주문할 수 있는 <strong>대화형 AI 모드</strong>와, 기존 방식에 익숙한 사용자를 위한 <strong>클래식 UI 모드</strong>를 모두 제공하여 모든 사용자를 포용하는 '듀얼 주문 시스템'을 개발합니다.<br />
            2. <strong>지능형 상호작용 (Intelligent Interaction)</strong>: 단순한 음성 인식을 넘어, 고객의 취향("매운 거 못 먹어요")과 질문 의도를 파악하여 메뉴를 추천하고 설명해주는 <strong>고객 맞춤형 AI 상호작용</strong>을 구현합니다.<br />
            3. <strong>데이터 기반 매장 관리 (Data-Driven Management)</strong>: 실시간 주문 현황을 한눈에 파악할 수 있는 <strong>관제 대시보드</strong>와, 축적된 매출 데이터를 AI가 분석하여 비즈니스 인사이트를 제공하는 <strong>AI 매출 분석 기능</strong>을 점주에게 제공합니다.
          </p>

          <h3>2. 시스템 아키텍처 (System Architecture)</h3>
          <h4>2.1. 전체 시스템 구성도</h4>
          <p>
            본 시스템은 고객용 Android 앱, 관리자용 Android 앱, 그리고 이 둘을 중개하는 Firebase 백엔드 및 Google AI 플랫폼으로 구성됩니다.
          </p>
          <div className="modal-architecture-diagram">
{`[고객용 Android App] <--> [Firebase Backend] <--> [관리자용 Android App]
      ^                                                     ^
      |                                                     |
      +----------------> [Google AI Platform] <-------------+`}
          </div>
          <p>
            - <strong>고객용 App (Android)</strong>: 메뉴 조회, 장바구니, AI 대화형 주문, 주문 상태 확인<br />
            - <strong>관리자용 App (Android)</strong>: 실시간 주문 관제, 메뉴 CRUD, AI 매출 분석, AI 페르소나 설정<br />
            - <strong>Firebase Backend</strong>: 실시간 데이터(메뉴, 주문) 저장 및 동기화<br />
            - <strong>Google AI Platform (Gemini)</strong>: 자연어 이해(NLU) 기반의 주문 처리 및 데이터 분석
          </p>

          <h4>2.2. 적용 기술 스택 (Technology Stack)</h4>
          <table className="modal-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>적용 기술 및 라이브러리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>클라이언트 (Android)</strong></td>
                <td>Kotlin, Activity 기반 설계, ViewBinding, Coroutines (MainScope, GlobalScope), RecyclerView, Lottie, Glide, SpeechRecognizer (STT), TextToSpeech (TTS), MediaPlayer, Google AI SDK for Gemini</td>
              </tr>
              <tr>
                <td><strong>백엔드 (Firebase)</strong></td>
                <td>Firebase Firestore (실시간 동기화 리스너, table&lt;N&gt; 샤딩 구조, OrderHistory 컬렉션 아카이빙), Firebase Storage (메뉴 이미지 파일 관리)</td>
              </tr>
              <tr>
                <td><strong>인공지능 (AI)</strong></td>
                <td>Google Gemini API (gemini-1.5-flash/pro, gemini-2.0-flash-exp), 시스템 프롬프트 기반 구조화된 JSON 데이터 추출, OrderHistory 분석 인사이트 도출</td>
              </tr>
            </tbody>
          </table>

          <h4>2.3. 데이터베이스 설계 (Firestore)</h4>
          <table className="modal-table">
            <thead>
              <tr>
                <th>컬렉션 (Collection)</th>
                <th>문서 ID (Document ID)</th>
                <th>주요 필드</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Menu</strong></td>
                <td>메뉴 ID (예: "101")</td>
                <td>menuname, menuprice, menutext, menuimg, menucategorie</td>
                <td>레스토랑의 전체 메뉴 정보 저장</td>
              </tr>
              <tr>
                <td><strong>table&lt;N&gt;</strong></td>
                <td>주문 번호 (예: "주문1")</td>
                <td>주문시간, 주문내역, 가격, 현재상태</td>
                <td>각 테이블의 실시간 주문 내역 저장 (진행 중인 주문)</td>
              </tr>
              <tr>
                <td><strong>OrderHistory</strong></td>
                <td>자동 생성 ID</td>
                <td>테이블 번호, 결제 시간, 주문내역, 가격, 현재상태</td>
                <td>결제가 완료된 모든 주문을 영구적으로 보관 (매출 분석용)</td>
              </tr>
            </tbody>
          </table>

          <h3>3. 핵심 기능 및 알고리즘 구현</h3>
          <h4>3.1. 대화형 AI 주문 시스템 (TalkActivity)</h4>
          <p>
            '가상의 알바생'과 대화하는 경험을 구현한 본 서비스의 핵심 기능으로, <strong>'음성 인식 → AI 분석 및 JSON 생성 → 앱 파싱 및 TTS 응답'</strong>의 3단계로 구성됩니다.
          </p>
          <p>
            1. <strong>음성 인식 (STT)</strong>: 안드로이드의 SpeechRecognizer를 통해 고객의 발화를 텍스트로 변환합니다.<br />
            2. <strong>AI 분석 및 JSON 생성</strong>: 변환된 텍스트와 이전 대화 기록(conversationLog)을 정교하게 설계된 시스템 프롬프트와 함께 Gemini API에 전달합니다. AI는 '주문받는 직원' 역할을 부여받아 사용자의 요청을 분석하고 그 결과를 type, result, totalMenu, totalMoney 등의 키를 가진 <strong>JSON 형식으로 반환</strong>하도록 설계되었습니다.<br />
            3. <strong>앱 파싱 및 TTS 응답</strong>: 앱은 AI가 반환한 JSON을 파싱합니다. type에 따라 일반 대화, 주문 내역 확인, 메뉴 이미지 표시 등 분기 처리를 수행하고, result에 담긴 텍스트 답변을 TextToSpeech를 통해 고객에게 음성으로 안내합니다.
          </p>

          <h4>3.2. 실시간 주문 관제 시스템 (TablecheckActivity)</h4>
          <p>
            관리자 대시보드의 핵심으로, Firestore의 실시간 동기화 기능을 극대화했습니다.
          </p>
          <p>
            1. <strong>실시간 상태 감지</strong>: table&lt;N&gt; 컬렉션들에 addSnapshotListener를 연결하여, '주문접수', '결제요청' 등 특정 상태(현재상태)의 문서 변화를 실시간으로 감지하고 새 주문 시 알림음을 재생합니다.<br />
            2. <strong>우선순위 정렬 및 시각화</strong>: 감지된 모든 주문은 상태('결제요청' 최우선)와 시간에 따라 정렬되어 RecyclerView에 표시되며, 상태별 배경색 및 Lottie 애니메이션 피드백을 통해 가시성을 높였습니다.<br />
            3. <strong>데이터 생명주기 관리</strong>: 관리자가 '결제 완료' 버튼을 누르면 table&lt;N&gt;의 진행 주문 문서를 영구 보관용인 OrderHistory 컬렉션으로 복사한 뒤 원본을 삭제하여 데이터 부하를 줄입니다.
          </p>

          <h4>3.3. AI 기반 매출 분석 (MasterhistoryActivity)</h4>
          <p>
            단순한 기록 조회를 넘어 데이터로부터 가치를 창출하는 기능입니다.
          </p>
          <p>
            1. <strong>데이터 취합</strong>: OrderHistory 컬렉션의 모든 문서를 조회하여 하나의 긴 텍스트(historyOrderData)로 가공합니다.<br />
            2. <strong>AI 분석 요청</strong>: 가공된 전체 기록 텍스트를 Gemini API에 전달하며 판매 인기 메뉴, 주 방문 테이블, 주문 시간 분석 지표 도출 등의 자연어 질문 프롬프트를 포함합니다.<br />
            3. <strong>인사이트 시각화</strong>: AI가 반환한 정밀 분석 결과를 텍스트뷰에 그대로 출력하여 점주가 별도의 통계 도구 없이 비즈니스 동향을 쉽게 얻도록 돕습니다.
          </p>

          <h3>4. 구현 결과</h3>
          <div className="modal-image-grid">
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/kiosk_img1.png`} alt="AI 대화형 주문 화면" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[AI 대화형 주문 및 맞춤형 추천 화면]</strong><br />
                음성 인식을 통해 "매운 거 못 먹는데 추천해줘"라고 요청하자, AI가 메뉴 정보를 기반으로 '버터 치킨'을 추천하는 인터페이스
              </p>
            </div>
            
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/kiosk_img2.png`} alt="실시간 주문 관리 대시보드" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[실시간 주문 관리 대시보드]</strong><br />
                테이블별 주문 현황이 실시간으로 업데이트되며, '주문접수', '결제요청' 등 상태에 따라 다른 시각적 피드백을 제공하는 관리자 화면
              </p>
            </div>
          </div>

          {/* Demonstration Video */}
          <div className="modal-video-container">
            <h4 style={{ marginBottom: '12px' }}>📹 실제 매장 시연 및 주문 관제 작동 영상</h4>
            <video 
              src={`${import.meta.env.BASE_URL}document/kiosk_demo.mp4`} 
              className="modal-video" 
              controls
            ></video>
          </div>

          <h3>5. 기대효과 및 활용 방안</h3>
          <p>
            본 AI 키오스크는 단순한 주문 기기를 넘어, 고객에게 <strong>새롭고 즐거운 주문 경험</strong>을 제공하여 브랜드 차별화를 이끌어낼 수 있습니다. AI와의 대화를 통해 메뉴를 추천받고 가게의 컨셉을 자연스럽게 전달함으로써 단순한 '주문'을 '즐거운 경험'으로 승화시킵니다. 또한, 음성 기반의 직관적인 인터페이스는 디지털 소외계층도 손쉽게 사용할 수 있는 배려형 서비스로서 사회적 가치를 창출합니다.
          </p>
          <p>
            본 프로젝트에서 개발된 음성인식 및 AI 대화형 기술은 식당 키오스크에 국한되지 않고, <strong>무인 약국, 무인 카페, 무인 편의점</strong> 등 다양한 미래 지향적 무인 상거래 서비스 환경에 확장 적용될 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
