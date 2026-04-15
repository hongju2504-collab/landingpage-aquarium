alert("이 사이트는 포트폴리오로 제작중 입니다!");


document.addEventListener('DOMContentLoaded', () => {

    // 1. Sec02 자동 슬라이더 (2초 간격, 좌->우)
    const autoSlider = new Swiper('.autoSlider', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 800,
    });

    // 2. Sec03 리뷰 스와이프 슬라이더
    const reviewSlider = new Swiper('.reviewSlider', {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        breakpoints: {
            768: { slidesPerView: 2, centeredSlides: false },
            1280: { slidesPerView: 3, centeredSlides: false }
        }
    });

    // 3. 모바일 메뉴 토글
    const menuBtn = document.querySelector('.m-menu-btn');
    menuBtn.addEventListener('click', () => {
        // 메뉴 열림/닫힘 로직 구현
        alert('모바일 메뉴 준비 중입니다.');
    });
});

// 4. 예약 팝업 함수
function toggleModal(show) {
    const modal = document.getElementById('reserveModal');
    modal.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
}