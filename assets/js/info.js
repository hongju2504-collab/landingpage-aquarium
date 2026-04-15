// 1. Section 02 자동 슬라이더 (2초)
const autoSlider = new Swiper('.autoSlider', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 2000, // 2초마다 전환
        disableOnInteraction: false,
    },
});

// 2. Section 03 리뷰 스와이퍼
const reviewSlider = new Swiper('.reviewSlider', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
        768: { slidesPerView: 2.5, centeredSlides: false },
        1024: { slidesPerView: 3, centeredSlides: false }
    }
});

// 3. 티켓 예매 모달 제어
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // 스크롤 방지
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 4. 모바일 햄버거 메뉴 토글 (간단 예시)
document.querySelector('.m-menu-btn').addEventListener('click', function () {
    this.classList.toggle('active');
    // 실제 메뉴 오픈 로직 추가 가능
});