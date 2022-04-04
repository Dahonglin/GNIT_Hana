// 로딩구역 선언
window.addEventListener("load", () => {

    // 메인 2번째 마우스 움직임 애니메이션
    let docStyle = document.documentElement.style;
    document.addEventListener('mousemove', (e) => {
        docStyle.setProperty('--mouse-x', e.clientX);
        docStyle.setProperty('--mouse-y', e.clientY);
    });

});