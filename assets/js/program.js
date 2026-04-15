document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-menu li');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // 1. 모든 탭 클래스 제거
            tabs.forEach(t => t.classList.remove('active'));
            // 2. 모든 컨텐츠 숨기기
            contents.forEach(c => c.classList.remove('active'));

            // 3. 클릭한 탭과 해당 컨텐츠만 활성화
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');

            // 탭 클릭 시 페이지 상단(컨텐츠 시작점)으로 부드럽게 이동 (선택 사항)
            window.scrollTo({
                top: document.querySelector('.tab-menu').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});