
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function () {
        // 햄버거 버튼 아이콘 변형
        this.classList.toggle('open');

        // 네비게이션 메뉴 열기/닫기
        navMenu.classList.toggle('open');

        // 메뉴 상태에 따른 접근성 (aria-label) 업데이트
        if (this.classList.contains('open')) {
            this.setAttribute('aria-label', '메뉴 닫기');
        } else {
            this.setAttribute('aria-label', '메뉴 열기');
        }
    });

    // (선택 사항) 모바일 메뉴가 열려있을 때 배경 스크롤 방지
    // menuToggle.addEventListener('click', function() {
    //     document.body.classList.toggle('no-scroll', this.classList.contains('open'));
    // });
});