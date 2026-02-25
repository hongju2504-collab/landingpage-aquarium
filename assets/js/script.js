document.addEventListener('DOMContentLoaded', () => {

    // 헤더 디자인 변경
    const header = document.querySelector('.header');

    const handleHeader = () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            header.style.height = '70px'; // 스크롤 시 높이 축소
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '90px'; // 원래 높이
        }
    };

    window.addEventListener('scroll', handleHeader);


    // GNB 메뉴 클릭 강조
    const menuItems = document.querySelectorAll('.gnb a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // 모든 메뉴 색상 초기화
            menuItems.forEach(m => m.style.color = '#0B3C5D');
            // 클릭한 메뉴만 강조
            this.style.color = '#0A4DA6';
        });
    });


    // 애니메이션 (KV + Program Item) ---

    const kvElements = document.querySelectorAll('.KV-sec .text, .KV-sec .btn');
    const programItems = document.querySelectorAll('.program-item');

    const setInitialStyle = (elements) => {
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    };

    setInitialStyle([...kvElements, ...programItems]);

    // 요소 나타내기
    const showElement = (el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    };

    // KV 섹션은 로딩 후 0.5초 뒤에 실행
    setTimeout(() => {
        kvElements.forEach((el, index) => {
            setTimeout(() => {
                showElement(el);
            }, index * 200); // 텍스트, 버튼 순차적 등장
        });
    }, 300);

    // 섹션 스크롤 등장
    const observerOptions = {
        threshold: 0.15 // 요소의 15%가 보일 때 실행
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showElement(entry.target);
                observer.unobserve(entry.target); // 한 번 나타나면 종료
            }
        });
    }, observerOptions);

    programItems.forEach(item => {
        observer.observe(item);
    });

});

// 리사이즈 체크 ---
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width <= 768) {
        console.log("모바일/태블릿 해상도 진입: " + width + "px");
    }
});