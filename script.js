document.addEventListener('DOMContentLoaded', () => {
    
    // Lucide 아이콘 초기화
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* ==========================================================================
       1. 커스텀 마우스 커서 (물리 Lerp 보간 애니메이션)
       ========================================================================== */
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    
    let mouseX = 0, mouseY = 0; // 마우스 실제 좌표
    let dotX = 0, dotY = 0;     // 안쪽 점 현재 좌표
    let outlineX = 0, outlineY = 0; // 바깥쪽 원 현재 좌표
    
    // 마우스가 화면 안에 있는지 여부
    let cursorVisible = false;

    // 보간 속도 (0에 가까울수록 느리고 부드러움)
    const lerpDot = 0.3;
    const lerpOutline = 0.15;

    window.addEventListener('mousemove', (e) => {
        if (!cursorVisible) {
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
            cursorVisible = true;
        }
        
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 화면을 벗어나면 숨김
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
        cursorVisible = false;
    });

    // 프레임마다 좌표를 부드럽게 업데이트
    function animateCursor() {
        // Lerp 수식: 현재좌표 = 현재좌표 + (목표좌표 - 현재좌표) * 속도
        dotX += (mouseX - dotX) * lerpDot;
        dotY += (mouseY - dotY) * lerpDot;
        
        outlineX += (mouseX - outlineX) * lerpOutline;
        outlineY += (mouseY - outlineY) * lerpOutline;

        cursorDot.style.transform = `translate(-50%, -50%) translate(${dotX}px, ${dotY}px)`;
        cursorOutline.style.transform = `translate(-50%, -50%) translate(${outlineX}px, ${outlineY}px)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // 링크 및 버튼 호버 시 커서 크기 팽창 효과
    const hoverTargets = document.querySelectorAll('a, button, input, textarea, .project-card, .social-btn');
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovered');
        });
        target.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovered');
        });
    });


    /* ==========================================================================
       2. 다크/라이트 테마 제어 및 로컬 스토리지 연동
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // 기본 테마 설정 적용
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'dark';

        if (theme === 'dark') {
            newTheme = 'light';
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });


    /* ==========================================================================
       3. 모바일 네비게이션 햄버거 메뉴 토글
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // 메뉴 링크 클릭 시 자동으로 닫히도록 처리
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });


    /* ==========================================================================
       4. 스크롤 감지: 헤더 변형 & 네비게이션 링크 활성화
       ========================================================================== */
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // 0. 페이지 상단 스크롤 진행률 표시 바
        const scrollProgress = document.getElementById('scroll-progress');
        if (scrollProgress) {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScrollHeight > 0) {
                const progressPercentage = (window.scrollY / totalScrollHeight) * 100;
                scrollProgress.style.width = `${progressPercentage}%`;
            }
        }

        // 헤더 얇아지는 효과
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // 현재 스크롤 위치에 맞춰 활성화 메뉴 표시
        let currentActiveSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // 여백 보정
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentActiveSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentActiveSection}`) {
                link.classList.add('active');
            }
        });
    });


    /* ==========================================================================
       5. 스크롤 등장 애니메이션 (Scroll Reveal & Skills Progress Animation)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const skillSection = document.getElementById('skills');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // 만약 기술 스택 섹션에 진입했다면 게이지 바 채움 애니메이션 수행
                if (entry.target === skillSection && !skillsAnimated) {
                    animateSkills();
                }
                
                // 한 번 등장한 후에는 계속 관찰할 필요가 없다면 관찰 해제 (성능 최적화)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // 요소의 15%가 보이면 실행
        rootMargin: '0px 0px -50px 0px'
    });

    // 프로젝트 카드들과 통계 상자들에 순차적인 애니메이션 딜레이 설정
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes.forEach((box, index) => {
        box.style.transitionDelay = `${index * 0.1}s`;
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 기술 스택 영역에 대한 감지 별도 등록 (게이지 트리거용)
    if (skillSection) {
        revealObserver.observe(skillSection);
    }

    function animateSkills() {
        skillProgressBars.forEach(bar => {
            const percent = bar.style.getPropertyValue('--percent');
            bar.style.width = percent;
        });
        skillsAnimated = true;
    }


    /* ==========================================================================
       6. 마그네틱(자석) 버튼 인터랙션 효과
       ========================================================================== */
    const magneticBtns = document.querySelectorAll('.btn-magnetic');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            // 마우스의 버튼 내 상대적 좌표 계산
            const x = e.clientX - position.left - (position.width / 2);
            const y = e.clientY - position.top - (position.height / 2);
            
            // 버튼 자체와 텍스트(span)를 살짝 다른 비율로 이동시켜 입체 자석 구현
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            const btnSpan = btn.querySelector('span');
            const btnIcon = btn.querySelector('i');
            if (btnSpan) btnSpan.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            if (btnIcon) btnIcon.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        // 마우스가 떠나면 부드럽게 원래 위치로 리셋
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
            const btnSpan = btn.querySelector('span');
            const btnIcon = btn.querySelector('i');
            if (btnSpan) btnSpan.style.transform = 'translate(0px, 0px)';
            if (btnIcon) btnIcon.style.transform = 'translate(0px, 0px)';
        });
    });


    /* ==========================================================================
       7. 보안 적용 문의 메일 폼 전송 (Web3Forms API 활용 비동기 통신)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('#submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;
            
            // 전송 중 상태 표시
            submitBtn.innerHTML = '<span>전송 중...</span>';
            submitBtn.disabled = true;
            
            const formData = new FormData(contactForm);
            
            // Web3Forms API 전송 요청
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    formResult.innerHTML = "메시지가 성공적으로 전송되었습니다! 곧 답변드리겠습니다.";
                    formResult.className = "form-result success";
                    contactForm.reset();
                } else {
                    console.log(response);
                    formResult.innerHTML = json.message || "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
                    formResult.className = "form-result error";
                }
            })
            .catch(error => {
                console.log(error);
                formResult.innerHTML = "서버 전송 중 오류가 발생했습니다.";
                formResult.className = "form-result error";
            })
            .then(() => {
                // 버튼 복구
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
                
                // 결과 메시지 5초 뒤에 사라짐
                setTimeout(() => {
                    formResult.innerHTML = "";
                    formResult.className = "form-result";
                }, 5000);
            });
        });
    }

    // 푸터의 맨 위로 이동 단추
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    /* ==========================================================================
       8. 코드 보안 및 불펌 차단 스크립트 (우클릭 및 개발자 도구 단축키 무력화)
       ========================================================================== */
    
    // A. 마우스 우클릭 금지
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        console.warn('보안을 위해 마우스 우클릭이 비활성화되어 있습니다.');
    });

    // B. 주요 개발자 도구 단축키 차단
    document.addEventListener('keydown', (e) => {
        // F12 키 차단
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            console.warn('보안을 위해 개발자 도구(F12) 단축키가 비활성화되어 있습니다.');
            return false;
        }

        // Ctrl + Shift + I (개발자 도구) 차단
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            console.warn('개발자 도구 단축키가 제한되어 있습니다.');
            return false;
        }

        // Ctrl + Shift + J (콘솔 창) 차단
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            console.warn('콘솔 창 단축키가 제한되어 있습니다.');
            return false;
        }

        // Ctrl + Shift + C (요소 검사) 차단
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            console.warn('요소 탐색 단축키가 제한되어 있습니다.');
            return false;
        }

        // Ctrl + U (페이지 소스 보기) 차단
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            console.warn('소스 보기 단축키가 제한되어 있습니다.');
            return false;
        }
    });

});
