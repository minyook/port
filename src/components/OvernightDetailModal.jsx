import React, { useEffect } from 'react';
import { X } from './LucideIcons';

export default function OvernightDetailModal({ onClose }) {
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
          <span className="modal-badge" style={{ backgroundColor: 'var(--primary)', color: 'var(--bg-base)' }}>AI & LLM Developer 🌙</span>
          <span className="modal-category">Speech Evaluation System</span>
          <h2 className="modal-title">Overnight.AI : AI 기반 발표 및 스피치 멀티모달 자동 평가 시스템</h2>
          <p className="modal-subtitle">발표자의 영상(Vision), 음성(Audio), 언어/슬라이드(Text/PPT) 데이터를 초정밀 멀티모달 파이프라인으로 동적 분석하여 계측된 정량적 수치를 바탕으로 발표 역량을 다각도로 평가하고 맞춤형 피드백을 제공하는 스피치 코칭 서비스</p>
          
          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <strong>학부/학과:</strong> 동의대학교 컴퓨터소프트웨어공학과
            </div>
            <div className="modal-meta-item">
              <strong>지도교수:</strong> 권순각 교수님
            </div>
            <div className="modal-meta-item">
              <strong>팀명:</strong> 무박2일
            </div>
            <div className="modal-meta-item">
              <strong>팀원 정보:</strong> 임민욱(팀장, AI모델/챗봇 개발), 임진호(시선/제스처 분석), 이규찬(PPT/매칭 검증), 이지민(UI/음성 분석)
            </div>
            <div className="modal-meta-item">
              <strong>개발 기간:</strong> 2026.03.02 ~ 2026.06.12 (약 3개월)
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h3>1. 서론 (Introduction)</h3>
          <h4>1.1. 프로젝트 개요</h4>
          <p>
            본 프로젝트는 <strong>Overnight.AI</strong>라는 서비스명을 통해, 밤새 발표를 준비하는 학생과 직장인을 위한 AI 멘토를 제공하는 것을 목표로 합니다. 기존 STT(Speech-to-Text) 중심의 언어적 평가 한계를 극복하고, 컴퓨터 비전 기술과 음성 분석 기술을 결합한 <strong>초정밀 멀티모달 발표 자동 평가 시스템</strong>을 구축하였습니다. 발표자의 비언어적 요소(자세, 시선, 제스처, 표정)와 언어적 요소(운율, 필러 워드, 발화 속도)를 시간축 기준으로 통합 분석하여, 정량적인 채점 점수와 개선 방향에 대한 구체적인 솔루션을 제공합니다.
          </p>

          <h4>1.2. 개발 배경 및 필요성</h4>
          <p>
            - <strong>발표자 관점:</strong> 연습 후 스스로의 시선 처리, 신체 경직도, 부적절한 말버릇(필러 워드) 등 비언어적 약점을 객관적으로 인지하기 어렵고, 전문가 코칭은 비용과 시공간적 제약이 큽니다.<br />
            - <strong>평가자 관점:</strong> 다수의 발표자를 반복적으로 평가할 때 주관적 편향이 개입하기 쉽고 피로도가 누적되며, 개별 피드백 작성 및 데이터 관리에 막대한 시간이 소요됩니다.<br />
            - <strong>의도 및 필요성:</strong> 기존 상용 발음 교정/문법 분석 솔루션을 넘어 발표 상황의 비언어적 태도까지 체계적으로 검증할 수 있는 공정하고 효율적인 에듀테크 자동 평가 엔진이 필수적이었습니다.
          </p>

          <h4>1.3. 개발 목표</h4>
          <p>
            - <strong>공학적 목표:</strong> 일반 CPU 환경에서도 실시간 처리가 가능하도록 비동기 작업 큐 구조 설계, YOLOv8-Pose와 MediaPipe Face Landmarker를 체이닝하여 시선 응시율 80% 이상 및 노이즈 제스처 필터링 90% 이상 확보, Praat 연동 주파수/무음/CPS 분석, LoRA 미세조정 로컬 LLM을 통한 타임라인 피드백 자동 생성 인프라 구축.<br />
            - <strong>비공학적 목표:</strong> 데이터 기반의 객관적 자가 교정 기회 제공 및 심사위원의 편향성 제거, PDF/Excel 기반의 리포트 자동 출력을 통한 발표 역량 관리 효율성 극대화.
          </p>

          <h3>2. 시스템 아키텍처 (System Architecture)</h3>
          <h4>2.1. 전체 시스템 흐름도</h4>
          <p>
            본 시스템은 React 웹 클라이언트, FastAPI 기반 백엔드 분석 서버, 로컬 및 클라우드 AI 추론 엔진으로 구성됩니다.
          </p>
          <div className="modal-architecture-diagram">
{`[React Frontend App]  -- (비디오 & PPT 업로드) -->  [FastAPI Backend Engine]
                                                              |
                                                    (FFmpeg 전처리 및 분리)
                                                              |
    +--------------------------------+------------------------+-------------------------------+
    | (Vision 분석)                  | (Audio 분석)                                            | (Content 검증)
    v                                v                                                         v
[YOLOv8-Pose 제스처/포스처]     [Whisper Local STT]                                      [Slide Verify 매칭]
[MediaPipe Face 시선/표정]      [Praat 음성 운율 & Jitter/Shimmer]                       [PPT 구조/가독성 분석]
    |                                |                                                         |
    +--------------------------------+------------------------+-------------------------------+
                                                              |
                                                [Data Combiner 시간축 정렬]
                                                              |
                                                [Feedback Engine (Ollama/Gemini)]
                                                              |
                                                    (최종 통합 결과 JSON)
                                                              |
[React Dashboard UI] <---------------------------------------+`}
          </div>

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
                <td><strong>프론트엔드 (React)</strong></td>
                <td>React 18, Vite 5, TypeScript 5, Recharts (레이더/도넛 차트), jsPDF / jsPDF-AutoTable (PDF 출력), XLSX (Excel 스프레드시트 출력), React Markdown (마크다운 렌더링), Vanilla CSS (Premium Dark/Glassmorphic)</td>
              </tr>
              <tr>
                <td><strong>백엔드 (FastAPI)</strong></td>
                <td>FastAPI, Uvicorn, FFmpeg (미디어 프레임 분리 및 인코딩), Python 3.9+</td>
              </tr>
              <tr>
                <td><strong>컴퓨터 비전 (Vision)</strong></td>
                <td>OpenCV, Ultralytics YOLOv8 (Pose Model), MediaPipe (Face Landmarker / Face Mesh)</td>
              </tr>
              <tr>
                <td><strong>음성 처리 (Audio)</strong></td>
                <td>OpenAI Whisper (Local base model - STT & 타임스탬프 추출), Praat-parselmouth (음량, 피치, Jitter, Shimmer, CPS 분석)</td>
              </tr>
              <tr>
                <td><strong>AI 채점 및 피드백 (LLM)</strong></td>
                <td>Ollama (Local Gemma 3 4B - 오프라인 무료 엔진), Google Gemini API (클라우드 고속 엔진 - 최종 시연용)</td>
              </tr>
              <tr>
                <td><strong>PPT 가독성 및 정합 (PPT)</strong></td>
                <td>python-pptx, scikit-learn, imagehash, LibreOffice, Poppler</td>
              </tr>
            </tbody>
          </table>

          <h3>3. 핵심 기능 및 알고리즘 구현</h3>
          <h4>3.1. 초정밀 멀티모달 데이터 정렬 및 분석 (Data Fusion)</h4>
          <p>
            FFmpeg를 이용해 업로드된 비디오에서 오디오 트랙과 이미지 프레임을 물리적으로 분리합니다. 
            시각 파트에서는 YOLOv8-Pose로 양손목 3D 변위와 어깨 각도를 연산해 옷을 만지거나 머리를 긁는 노이즈 동작을 90% 차단하며, MediaPipe Face Landmarker를 활용하여 안면 랜드마크 분석을 통해 정밀 시선 집중도와 미소를 추적합니다.
            청각 파트에서는 Whisper Local을 통해 단어별 타임스탬프가 적용된 텍스트를 추출하고, Praat-parselmouth를 통해 피치 변화 및 데시벨 분포 변동 계수를 구해 음성 안정도를 측정합니다.
            마지막으로 <code>data_combiner.py</code> 모듈이 이질적인 주기를 갖는 시선, 제스처, 음성 데이터를 문장 단위 시간축 기준으로 정합하여 멀티모달 퓨전 데이터를 완성합니다.
          </p>

          <h4>3.2. 영상-슬라이드 실시간 일치 검증 (Slide Verification Engine)</h4>
          <p>
            업로드된 PPT에서 추출한 슬라이드 장표 이미지 데이터와 발표 영상 내 스크린 영역을 비교 분석하는 알고리즘을 개발했습니다.
            LibreOffice와 Poppler를 이용해 장표를 이미지로 변환한 뒤 ImageHash 및 특징점 매칭 기술을 통해 영상 프레임과 대조합니다.
            이를 통해 발표자가 장표에 맞는 발표를 유기적으로 진행하고 있는지 보조 검증하며, 종합 일치율(%), 슬라이드 커버리지(%), 역순 진행 및 타임라인 이슈를 시각적으로 추출합니다.
          </p>

          <h4>3.3. 100점 만점 기준의 AI 객관적 정량 평가 (Scoring Rubric)</h4>
          <p>
            시스템은 수집된 멀티모달 정량 지표들을 분석하여 100점 만점 기준으로 점수를 도출합니다.
          </p>
          <table className="modal-table">
            <thead>
              <tr>
                <th>대분류 (100점)</th>
                <th>상세 평가 항목</th>
                <th>배점</th>
                <th>데이터 추출 기반 조건</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2"><strong>태도 (Attitude - 20점)</strong></td>
                <td>👁️ 시선 집중도</td>
                <td>10점</td>
                <td>MediaPipe로 추출된 정면 청중 응시 프레임 비율</td>
              </tr>
              <tr>
                <td>🤸 자세 & 제스처</td>
                <td>10점</td>
                <td>YOLO-Pose의 양손 손목 3D 좌표 변위 역동성 및 어깨 수평 변위</td>
              </tr>
              <tr>
                <td rowspan="3"><strong>목소리 (Voice - 30점)</strong></td>
                <td>🔊 음성 피치 안정도</td>
                <td>10점</td>
                <td>Praat 기반 주파수 및 데시벨 분포 변동 계수 (Jitter, Shimmer)</td>
              </tr>
              <tr>
                <td>🧘 스피치 평정심</td>
                <td>10점</td>
                <td>시선 흔들림 지표 및 발화 템포 교차 연산을 통한 긴장도 산출</td>
              </tr>
              <tr>
                <td>🎙️ 필러 워드 제어</td>
                <td>10점</td>
                <td>분당 말버릇(어, 음, 진짜 등) 감지 수 (3회 이하 만점, 초과 시 감점)</td>
              </tr>
              <tr>
                <td rowspan="4"><strong>내용 (Content - 50점)</strong></td>
                <td>📂 발화-PPT 싱크</td>
                <td>15점</td>
                <td>음성 발화 텍스트와 슬라이드 장표 텍스트 간의 보조 매칭 일치성</td>
              </tr>
              <tr>
                <td>📢 발화 완성도</td>
                <td>10점</td>
                <td>대본 내 무음(Silence) 탐지 빈도 및 단어 반복/꼬임 비율</td>
              </tr>
              <tr>
                <td>🎨 슬라이드 디자인</td>
                <td>15점</td>
                <td>PPT 가독성(폰트 크기, 대비) 및 레이아웃 배치 균형 검증</td>
              </tr>
              <tr>
                <td>📏 테마 일관성</td>
                <td>10점</td>
                <td>전체 슬라이드 간 컬러 팔레트 통일성 및 포맷 일관성 분석</td>
              </tr>
            </tbody>
          </table>

          <h4>3.4. 대화형 AI 챗봇 멘토 및 핵심 API 명세</h4>
          <p>
            - <strong>AI 발표 챗봇:</strong> 사용자는 분석 대시보드뿐만 아니라 챗봇 인터페이스를 통해 발표 대본 수정, 슬라이드 레이아웃 보완, 발표 연습 요령 등 맞춤형 코칭 가이드를 Gemini API 기반으로 질의응답할 수 있습니다.<br />
            - <strong>주요 API 명세:</strong>
          </p>
          <ul>
            <li><code>POST /api/upload</code>: 발표 영상 업로드 및 비동기 작업 생성 (반환값: <code>job_id</code>, <code>video_url</code>)</li>
            <li><code>GET /api/status/{"{job_id}"}</code>: 진행 상태 폴링 및 최종 채점 데이터 조회</li>
            <li><code>POST /api/ppt/analyze</code>: PPT 파일을 파싱하여 장표 구조 및 가독성 분석 결과 생성</li>
            <li><code>POST /api/ppt/verify</code>: 발표 영상 프레임과 PPT 슬라이드 이미지 매칭 및 정합률 분석</li>
            <li><code>POST /api/chat</code>: 발표 피드백 및 교정을 위한 대화형 코칭 응답</li>
          </ul>

          <h3>4. 프로젝트 수행 결과 및 동작 검증</h3>
          <h4>4.1. 시스템 구현 화면 및 분석 리포트</h4>
          <div className="modal-image-grid">
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/overnight_img_21_15_Im15.jpg`} alt="분석 의뢰 및 파일 업로드 화면" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[화면 1: 분석 의뢰 및 파일 업로드 (Evaluate.tsx)]</strong><br />
                발표 영상과 PPT 자료를 업로드하고 AI 코칭 페르소나(부드러운 조언자 / 냉철한 전문가)를 선택하여 비동기 분석을 요청하는 대기 화면입니다.
              </p>
            </div>
            
            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/overnight_img_22_16_Im16.jpg`} alt="종합 Scorecard 및 상세 채점" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[화면 2: 종합 Scorecard 및 상세 채점 결과]</strong><br />
                총점(62/100) 및 내용(Content - 36점), 전달의 안정성(Voice - 23점), 시각적 비언어(Attitude - 3점) 영역별 실시간 세부 채점 지표를 시각화한 대시보드 상단 영역입니다.
              </p>
            </div>

            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/overnight_img_22_17_Im17.jpg`} alt="발표 영상 다시보기 및 슬라이드 정합" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[화면 3: 발표 영상 다시보기 & 슬라이드 일치도 검증]</strong><br />
                발표 영상 재생 타임라인과 실시간 비언어 피드백 팁이 연동되며, PPT 이미지와 발표 화면을 비교 분석한 슬라이드 정합률(98.6%)을 보여주는 인터페이스입니다.
              </p>
            </div>

            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/overnight_img_25_21_Im20.jpg`} alt="AI 전문가 심층 피드백" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[화면 4: AI 전문가 심층 피드백 리포트]</strong><br />
                정량 분석 요약(3초 이상 무음 감지 횟수, 필러 워드 수, 시선 응시율 등)과 LoRA로 미세조정된 로컬 Gemma3 기반의 상세 행동 교정 솔루션을 보고서 형태로 가독성 있게 렌더링한 화면입니다.
              </p>
            </div>

            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/overnight_img_23_19_Im18.jpg`} alt="발표 코칭 전용 AI 챗봇" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[화면 5: 발표 코칭 전용 AI 챗봇 (Chatbot.tsx)]</strong><br />
                사용자가 업로드한 발표 자료(PDF/PPT)를 기반으로 발표 대본(스크립트)을 자동 생성하고 발표 시 주의사항에 대해 AI 멘토와 실시간으로 대화하며 가이드를 얻는 화면입니다.
              </p>
            </div>

            <div className="modal-image-container">
              <img src={`${import.meta.env.BASE_URL}document/overnight_img_26_23_Im21.jpg`} alt="리포트 내보내기" className="modal-img" />
              <p className="modal-img-caption">
                <strong>[화면 6: 리포트 내보내기 및 다운로드]</strong><br />
                분석 완료된 모든 세부 평가 데이터와 종합 보고서 마크다운을 브라우저상에서 즉시 EXCEL 및 PDF 문서 포맷으로 변환하여 로컬 저장소로 저장하고 아카이빙할 수 있는 리포트 출력 기능입니다.
              </p>
            </div>
          </div>

          <h4>4.2. 시스템 동작 검증 결과</h4>
          <p>
            프로젝트 최종 시연 및 완성도 검토를 위해 무박2일 팀은 전체 시스템 파이프라인에 대해 내부 통합 동작 테스트를 수행하였습니다.
          </p>
          <table className="modal-table">
            <thead>
              <tr>
                <th>검증 항목</th>
                <th>검증 내용</th>
                <th>결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>발표 영상 업로드</strong></td>
                <td>발표 영상 파일(.mp4, .mov 등)이 서버에 전송되고 8자리 job_id가 생성되는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>PPT 업로드 & 보조 분석</strong></td>
                <td>PPTX 파일을 파싱하여 텍스트 및 가독성 보조 점수를 생성하는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>FFmpeg 오디오/프레임 추출</strong></td>
                <td>업로드된 비디오 영상에서 오디오 트랙과 초당 프레임 이미지들이 분리 추출되는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>Whisper STT 텍스트 변환</strong></td>
                <td>오디오 트랙을 기반으로 Whisper 엔진이 단어별 타임스탬프 텍스트를 추출하는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>Praat 기반 음성 지표 분석</strong></td>
                <td>발화 구간의 주파수 변동(Jitter, Shimmer), 무음 구간 및 CPS(발화속도)를 연산하는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>YOLOv8-Pose 제스처 분석</strong></td>
                <td>33개 관절 추적 및 조건 기반 필터링을 통해 어깨각도와 유효 발표 제스처를 선별하는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>MediaPipe 시선/표정 분석</strong></td>
                <td>얼굴 랜드마크 기반으로 정면 응시 여부(시선 집중도) 및 안면 표정 변화를 추적하는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>AI 기반 루브릭 점수 채점</strong></td>
                <td>내용(50)/음성(30)/태도(20) 세부 항목에 대해 규칙 기반 폴백 및 LLM 채점 점수가 도출되는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>AI 피드백 보고서 생성</strong></td>
                <td>미세조정 로컬 Gemma3 모델 또는 Gemini를 통해 상세 마크다운 종합 피드백이 생성되는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
              <tr>
                <td><strong>리포트 다운로드 및 내보내기</strong></td>
                <td>jsPDF 및 XLSX 라이브러리를 통해 리포트가 PDF 및 Excel 문서 포맷으로 정상 다운로드되는지 확인</td>
                <td><span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>정상 동작</span></td>
              </tr>
            </tbody>
          </table>

          <h3>5. 결론 및 향후 계획</h3>
          <h4>5.1. 개선 및 보완 사항</h4>
          <p>
            - <strong>실시간 피드백 미구현 (향후 과제):</strong> 최종 결과 발표 시 "웹캠을 통해 실시간으로 스피치를 촬영하며 시선 이탈이나 말 속도를 피드백하는 기능"에 대한 보완 요구를 받았으며, 브라우저 실시간 스트리밍 분석(WebRTC/Socket) 기술을 통한 실시간 피드백 기능을 향후 과제로 추가하였습니다.<br />
            - <strong>안정성 및 모델 이중화:</strong> 외부 Gemini API 호출 장애 시 로컬 Ollama(Gemma3)로 자동 폴백되는 이중화 환경을 구축하여 채점 파이프라인의 비즈니스 신뢰도를 크게 높였습니다.
          </p>
          <div className="modal-image-container" style={{ margin: '20px auto 30px auto', maxWidth: '600px' }}>
            <img src={`${import.meta.env.BASE_URL}document/overnight_img_27_26_Im22.jpg`} alt="현재 구조 vs 개선 구조" className="modal-img" />
            <p className="modal-img-caption" style={{ textAlign: 'center' }}>
              <strong>[그림 2: 현재 사후 분석 중심 구조와 향후 실시간 코칭 중심 개선 구조 비교도]</strong>
            </p>
          </div>

          <h4>5.2. 기대 성과</h4>
          <p>
            - <strong>기술적 기대성과:</strong> Whisper, Praat, MediaPipe, YOLOv8-Pose 및 LLM 인프라를 웹 파이프라인으로 복합 융합하여 상용 레벨의 멀티모달 에듀테크 자동 평가 프레임워크 구현의 가능성을 입증했습니다.<br />
            - <strong>경제적 기대성과:</strong> 발표 훈련에 수반되는 고가의 전문가 면대면 피드백 비용을 획기적으로 줄이며, 교육 현장에서의 채점 행정 리소스를 대폭 경감합니다.<br />
            - <strong>사회적 기대성과:</strong> 스피치 울렁증을 겪는 다수의 사용자에게 시공간 제약이 없는 무제한 자가 훈련 인프라를 보장하여 데이터에 기반한 스피치 역량 개선 효과를 유도합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
