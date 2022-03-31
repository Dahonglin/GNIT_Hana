// 로딩구역 선언
window.addEventListener("load", () => {

    // 메인 2번째 마우스 움직임 애니메이션
    let docStyle = document.documentElement.style;

    // setting CSS variables inside this JS where they 
    // can be declaratively used inside the CSS file.
    document.addEventListener('mousemove', function (e) {
        docStyle.setProperty('--mouse-x', e.clientX);
        docStyle.setProperty('--mouse-y', e.clientY);
    });

});