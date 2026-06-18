import React, { useEffect } from 'react';
import { X } from './LucideIcons';

export default function BreathDetailModal({ onClose }) {
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
          <span className="modal-badge" style={{ backgroundColor: 'var(--secondary)', color: 'var(--bg-base)' }}>우수상 🎖️</span>
          <span className="modal-category">Emergency Room Platform</span>
          <h2 className="modal-title">AI 기반 실시간 응급실 공유 & AI 병원 추천</h2>
          <p className="modal-subtitle">AI 기술과 실시간 통신을 결합한 지능형 응급실 매칭 및 이송 관제 플랫폼</p>
          
          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <strong>성과:</strong> 2025 동의 AI SW융합 해커톤 대회 우수상
            </div>
            <div className="modal-meta-item">
              <strong>팀 구성원:</strong> 이선권(총괄/앱개발), 임민욱(XML설계/GPS), 김희수(웹전체개발), 양진원(AI백엔드)
            </div>
            <div className="modal-meta-item">
              <strong>개발 기간:</strong> 2025.07.01 ~ 2025.07.10 (해커톤)
            </div>
          </div>
        </div>

        <div className="modal-body">
          {/* Main Cover Image */}
          <div className="modal-image-container" style={{ marginBottom: '30px' }}>
            <img src={`${import.meta.env.BASE_URL}document/breath_img1.png`} alt="응급실 프로젝트 메인 커버" className="modal-img" />
            <p className="modal-img-caption" style={{ textAlign: 'center' }}>
              [그림 1: AI 기반 실시간 응급실 공유 & AI 병원 추천 서비스 메인 시스템 일러스트]
            </p>
          </div>

          <h3>1. 서론 (Introduction)</h3>
          <h4>1.1. 연구 배경 및 필요성</h4>
          <p>
            응급 의료 시스템에서 환자의 생존율과 직결되는 '골든타임'은 매우 중요하다. 하지만 현재 구급대원이 응급실의 수용 가능 여부를 파악하는 과정은 대부분 유선 통화에 의존하고 있어 비효율적이다. 이로 인해 발생하는 통신 지연, 정보의 비대칭성, 그리고 여러 병원을 전전하는 '응급실 셔틀' 현상은 골든타임을 놓치게 하는 심각한 사회적 문제로 대두되고 있다. 본 프로젝트는 이러한 문제를 해결하기 위해, AI 기술과 실시간 통신을 결합하여 구급대원과 병원 응급실 간의 정보 전달 과정을 최적화하고, 신속하며 정확한 환자 이송 결정을 지원하는 시스템을 개발하는 것을 목표로 한다.
          </p>

          <h4>1.2. 연구 목표 및 내용</h4>
          <p>
            본 연구는 다음과 같은 세부 목표를 가진다.
          </p>
          <p>
            - <strong>지능형 매칭:</strong> 환자 증상에 기반한 AI의 자동 진료과 추천과 구급대원의 실시간 위치를 결합하여, 환자에게 가장 적합하고 가까운 최적의 병원을 추천하는 알고리즘을 구현한다.<br />
            - <strong>실시간 통신:</strong> 구급대원의 요청과 병원의 응답(수락/거절)이 양방향으로 즉시 공유되는 실시간 관제 시스템을 구축한다.<br />
            - <strong>사용자 경험 최적화:</strong> 구급 현장의 특수성을 고려한 음성 기반의 '핸즈프리' 인터페이스를 제공하고, 병원 측에는 직관적인 웹 대시보드를 제공하여 각 사용자의 업무 효율을 극대화한다.
          </p>

          <h3>2. 시스템 아키텍처 (System Architecture)</h3>
          <h4>2.1. 전체 시스템 구성도</h4>
          <p>
            본 시스템은 구급대원용 Android 앱, 병원용 Web 앱, 그리고 이 둘을 중개하는 Firebase 백엔드 및 Google AI 플랫폼으로 구성된다.
          </p>
          <div className="modal-architecture-diagram">
{`[구급대원 Android App] <--> [Firebase Backend] <--> [병원 Web App]
      ^                                                  ^
      |                                                  |
      +------> [Google AI Platform (Gemini 2.0)] --------+`}
          </div>
          <p>
            - <strong>Paramedic App (Android):</strong> 환자 정보 입력, AI 증상 분석, 병원 추천 및 실시간 상태 추적<br />
            - <strong>Hospital App (Web):</strong> 타겟팅된 응급 콜 확인, 수락/거절, 병상 및 진료과 관리<br />
            - <strong>Firebase Backend:</strong> 사용자 인증, 실시간 데이터 저장 및 동기화<br />
            - <strong>Google AI Platform:</strong> 증상 분석 및 진료과 추천, 대화형 AI 기능 제공
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
                <td>Kotlin, MVVM 패턴 기반 설계, Coroutines, ViewBinding, RecyclerView, FusedLocationProviderClient (실시간 위치), STT/TTS (SpeechRecognizer, TextToSpeech), SoundPool, Google AI SDK</td>
              </tr>
              <tr>
                <td><strong>백엔드 (Firebase)</strong></td>
                <td>Firebase Authentication (계정 보안), Firebase Firestore (실시간 SnapshotListener, collectionGroup 쿼리, 복합 인덱스 설계, ArrayContains 쿼리)</td>
              </tr>
              <tr>
                <td><strong>인공지능 (AI)</strong></td>
                <td>Google Gemini API (gemini-2.0-flash), 자연어 증상 기반 최적 진료과 리스트 추천 프롬프트 엔지니어링, JSON 구조화 데이터 파싱</td>
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
                <td><strong>users</strong></td>
                <td>Firebase Auth UID</td>
                <td>name, email, role, organization, hospitalId</td>
                <td>사용자(구급대원/병원) 계정 및 역할 정보 저장</td>
              </tr>
              <tr>
                <td><strong>hospitals</strong></td>
                <td>자동 생성 ID</td>
                <td>hospitalName, address, location (GeoPoint), beds, availableDepartments</td>
                <td>병원의 실시간 병상 및 운영 진료과 상태 관리</td>
              </tr>
              <tr>
                <td><strong>emergency_calls</strong></td>
                <td>자동 생성 ID</td>
                <td>paramedicId, patientInfo, location, status, targetedHospitalIds</td>
                <td>응급 상황 생성부터 접수/이송 상태 변이 추적 및 완료 기록</td>
              </tr>
              <tr>
                <td><strong>completed_cases</strong> (하위)</td>
                <td>emergency_calls ID</td>
                <td>patientInfo, hospitalName, caseCompletedAt</td>
                <td>이송 완료된 환자의 기록 영구 보관용 하위 컬렉션</td>
              </tr>
            </tbody>
          </table>

          <h3>3. 핵심 기능 및 알고리즘 구현</h3>
          <h4>3.1. 지능형 병원 추천 알고리즘</h4>
          <p>
            본 서비스의 핵심으로, <strong>'AI 증상 분석 → 진료과 필터링 → 순차적 반경 확장 검색'</strong>의 3단계로 구성됩니다.
          </p>
          <p>
            1. <strong>증상 분석 (AI)</strong>: 구급대원이 입력한 증상을 Gemini API에 전달, 미리 정의된 진료과 목록 중 가장 관련성 높은 과를 List&lt;String&gt; 형태로 추천받습니다.<br />
            2. <strong>진료과 필터링 (Server-side)</strong>: Firestore의 whereArrayContainsAny 쿼리를 사용하여, 추천된 진료과 중 하나라도 운영 중인 병원 목록을 1차로 필터링합니다.<br />
            3. <strong>순차적 반경 확장 검색 (Client-side)</strong>: 필터링된 병원들을 대상으로 구급대원의 실시간 위치를 비교하여 <strong>5km → 10km → 20km</strong> 순으로 거리를 재귀적으로 계산하고 조건에 부합하는 병원을 즉시 매칭합니다.
          </p>

          <h4>3.2. 실시간 요청 및 상태 관리 시스템</h4>
          <p>
            CallStatusActivity에서 실시간으로 작동하는 응급실 매칭 생명주기 관리 구조입니다.
          </p>
          <p>
            1. <strong>상태 감지</strong>: emergency_calls 문서에 SnapshotListener를 연결하여 status 필드(pending, accepted, canceled 등)의 변화를 실시간으로 감지하고 소리 알림을 재생합니다.<br />
            2. <strong>타임아웃 및 재요청</strong>: Kotlin Coroutines의 delay(30000)를 활용하여 30초 내에 수락이 없는 경우, 기존 요청 문서를 자동으로 삭제하고 더 넓은 반경(10km → 20km)으로 병원 탐색 및 재요청을 실행합니다.<br />
            3. <strong>생명주기 안전성</strong>: Activity가 종료될 때 ListenerRegistration과 Job을 해제하여 메모리 누수를 완전히 배제했습니다.
          </p>

          <h4>3.3. 기록 데이터 분석 (AI 기반)</h4>
          <p>
            구급 활동 이송 완료 기록 전체(allCasesText)를 종합하여 Gemini API에 학습시킵니다. 점주 대시보드와 비슷하게 "시간대별 발생 빈도", "가장 빈번했던 주요 증상 유형" 등 전체 응급 활동 리포트를 텍스트로 자동 분석 및 시각화하여 활동 회고를 지원합니다.
          </p>

          <h3>4. 구현 결과 (Screenshots)</h3>
          <div className="modal-image-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/breath_img2.png`} alt="AI 대화형 요청 화면" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[그림 2: AI 대화형 요청 화면]</strong><br />
                음성 인식을 통해 환자 정보를 입력하고, AI와 대화하며 최종적으로 요청을 생성하는 인터페이스
              </p>
            </div>
            
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/breath_img3.png`} alt="병원 찾기 및 필터링 화면" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[그림 3: 병원 찾기 및 필터링 화면]</strong><br />
                병원 이름 검색, 진료과 칩(Chip) 필터링, 현재 위치 기준 거리 순 정렬 기능이 구현된 병원 목록
              </p>
            </div>
          </div>

          <div className="modal-image-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '20px' }}>
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/breath_img4.png`} alt="요청 상태 대기 화면" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[그림 4: 요청 상태 대기 화면]</strong><br />
                타이머와 실시간 리스너가 동작하며, 요청 취소 및 환자 정보 확인이 가능한 UI
              </p>
            </div>
            
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/breath_img5.png`} alt="이송 기록 및 AI 분석 화면" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[그림 5: 이송 기록 및 AI 분석 화면]</strong><br />
                collectionGroup 쿼리로 조회된 본인의 이송 완료 기록 리스트 및 Gemini를 통한 기록 분석 결과
              </p>
            </div>
          </div>

          {/* Demonstration Video */}
          <div className="modal-video-container">
            <h4 style={{ marginBottom: '12px' }}>📹 응급실 요청 및 수락 시연 영상</h4>
            <video 
              src={`${import.meta.env.BASE_URL}document/breath_demo.mp4`} 
              className="modal-video" 
              controls
            ></video>
          </div>

          <h3>5. 결론 및 고찰</h3>
          <p>
            본 프로젝트를 통해 AI와 클라우드 기반 실시간 데이터베이스를 활용하여 기존 응급 이송 시스템의 비효율성을 개선할 수 있는 가능성을 확인했습니다. 특히 Gemini API를 활용한 <strong>증상 분석</strong>과 <strong>음성 인터페이스</strong>는 구급 현장의 의사 결정과 정보 입력 과정의 시간을 획기적으로 단축시킬 잠재력을 보여주었습니다.
          </p>
          <p>
            다만, 네트워크 안정성, AI 응답의 절대적 신뢰도 확보, 그리고 실제 의료 시스템과의 연동은 향후 해결해야 할 과제로 남습니다. 향후 연구로는 병원 EMR 시스템과의 API 연동, 실시간 교통정보를 반영한 최적 경로 추천, 축적된 데이터를 활용한 응급 수요 예측 모델 개발 등을 진행하여 서비스의 완성도를 높이고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
