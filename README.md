# 💻 인터랙티브 포트폴리오 템플릿 & 배포 보안 가이드

이 프로젝트는 현대적이고 세련된 반응형 디자인, 마우스에 따라다니는 스무스한 커스텀 커서, 스크롤 애니메이션, 그리고 다크/라이트 모드 전환을 제공하는 포트폴리오 웹사이트 템플릿입니다.

순수 HTML, CSS, JavaScript로 제작되어 복잡한 설치나 컴파일 없이 **파일을 바로 열어서 확인하고 배포**할 수 있습니다.

---

## 📂 폴더 구조
* [index.html](file:///C:/Users/limmi/Desktop/port/index.html): 웹사이트 레이아웃 및 텍스트 콘텐츠 수정
* [style.css](file:///C:/Users/limmi/Desktop/port/style.css): 레이아웃 디자인, 색상 테마 및 애니메이션 키프레임 수정
* [script.js](file:///C:/Users/limmi/Desktop/port/script.js): 마우스 커서 물리학, 스크롤 감지 및 테마 전환 로직, 그리고 소스 무단 복제/검사 방지 보안 코드 포함

---

## 🛠️ 콘텐츠 직접 수정하기

### 1. 이름 및 자기소개 수정
`index.html` 파일의 **4. Hero 섹션**에서 본인의 이름과 대표 소개 글을 직접 변경하시면 즉시 적용됩니다.
```html
<h1 class="hero-title reveal-up">
    안녕하세요, 저는 <br>
    <span class="text-gradient dynamic-text">웹 퍼블리셔 & 프론트엔드</span> <br>
    개발자 <span class="text-name">홍길동</span>입니다.
</h1>
```

### 2. 프로젝트 추가
`index.html` 파일의 **6. Projects 섹션** 아래에 있는 `<div class="project-card reveal-up">...</div>` 블록을 복사해서 이어 붙여 새 프로젝트 카드를 마음껏 추가할 수 있습니다.

### 3. 기술 스택 게이지 조절
`index.html` 파일의 **7. Skills 섹션** 내에서 각 항목의 `--percent` 값을 수정하면, 사이트 스크롤 시 게이지 바가 해당 퍼센트만큼 애니메이션을 그리며 차오릅니다.
```html
<!-- 게이지 조절 예시 (85% -> 95%) -->
<div class="skill-progress" style="--percent: 95%;"></div>
```

### 4. 문의사항(Contact) 이메일 안전하게 연동하기
소스코드에 이메일 주소를 직접 기재하면 스팸 수집 봇들이 메일 주소를 긁어가 스팸 메일 폭탄을 맞을 수 있습니다. 이를 방어하기 위한 보안 연동 방법입니다.
1. [Web3Forms 공식 홈페이지(https://web3forms.com/)](https://web3forms.com/)에 접속합니다.
2. 메일 전송 결과를 전달받을 본인의 이메일 주소를 입력한 뒤 무료 Access Key를 발급받습니다.
3. [index.html](file:///C:/Users/limmi/Desktop/port/index.html) 파일의 **8. Contact 섹션** 내부 폼 태그 아래에 발급받은 키를 넣어줍니다.
```html
<!-- index.html의 아래 input 태그 value에 발급받은 키를 넣으세요 -->
<input type="hidden" name="access_key" value="여기에_발급받은_키_붙여넣기">
```
이렇게 하면 사용자가 입력한 메시지가 회원님의 이메일로 안전하게 전송되면서도, 소스코드 외부에서는 회원님의 실제 메일 주소를 전혀 볼 수 없어 이메일 유출을 완벽하게 예방합니다.

---

## 🔒 외부 무단 코드 변조 및 보안 방어 가이드 (배포 편)

배포 이후 외부 해커나 악성 사용자가 내 코드를 조작하거나 망가뜨리는 것을 완벽하게 막으려면 다음 순서대로 배포를 진행하시는 것을 강력히 권장합니다.

### 1단계: 깃허브 저장소는 반드시 '비공개(Private)'로 만들기
코드를 관리할 깃허브(GitHub) 저장소(Repository)를 만들 때, 공개 범위를 **Private (비공개)**로 설정합니다.
* **보안 효과**: 외부인들이 회원님의 원본 코드 소스를 분석하거나 몰래 수정 요청(Pull Request)을 날리는 등 저장소 조작 시도 자체를 원천 차단합니다. (배포 서버는 비공개 저장소와도 비밀 연동이 가능하므로 걱정하지 않으셔도 됩니다.)

### 2단계: 깃허브(GitHub) 계정에 2단계 인증(2FA) 적용하기
1. GitHub 로그인 후 오른쪽 상단 프로필 이미지 클릭 -> **Settings**로 이동합니다.
2. 왼쪽 메뉴에서 **Security (또는 Password and security)**를 클릭합니다.
3. **Two-factor authentication (2FA)** 영역에서 모바일 앱(Google Authenticator) 또는 SMS를 통한 2차 인증을 활성화합니다.
* **보안 효과**: 해커들이 비밀번호 해킹 등으로 회원님의 계정 비밀번호를 탈취하더라도, 휴대폰 OTP 인증 번호 없이는 저장소 코드를 절대로 변경할 수 없습니다.

### 3단계: 안전한 정적 호스팅 서비스로 무료 배포하기
웹사이트를 배포할 때 보안성이 세계 최고 수준인 대기업의 무료 호스팅 인프라를 활용합니다.
* **추천 배포처**: **Vercel** ([https://vercel.com](https://vercel.com)) 또는 **Netlify** ([https://netlify.com](https://netlify.com))
* **보안 효과**:
  * 이 호스팅 서비스들은 **읽기 전용(Read-Only)** 클라우드 CDN 방식을 이용하므로 방문자들이 웹서버를 해킹해 파일을 바꿀 수 있는 경로(FTP, DB, OS 취약점 등)가 전혀 없습니다.
  * Vercel / Netlify 계정 로그인 역시 깃허브 계정 연동이나 이메일 2차 인증을 설정하여 외부 접근을 차단합니다.
