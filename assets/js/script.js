// header
document.addEventListener('DOMContentLoaded', () => {
    // 페이지 로드 후 실행
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        // 스크롤이 50px 이상 내려가면 헤더에 그림자 추가 및 높이 조절
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            header.style.height = '80px'; // 살짝 슬림해지는 효과
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '90px';
        }
    });

    // 활성화 메뉴 강조
    const menuItems = document.querySelectorAll('.gnb a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(m => m.style.color = '#0B3C5D');
            this.style.color = '#4FC3F7';
        });
    });

    // KV section
    const kvText = document.querySelector('.KV-sec .text');
    const kvBtn = document.querySelector('.KV-sec .btn');

    // 초기 상태 설정
    [kvText, kvBtn].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s ease-out';
    });

    // 0.5초 뒤에 애니메이션 실행
    setTimeout(() => {
        kvText.style.opacity = '1';
        kvText.style.transform = 'translateY(0)';
    }, 500);
    setTimeout(() => {
        kvBtn.style.opacity = '1';
        kvBtn.style.transform = 'translateY(0)';
    }, 500);
});
