// 링크 시스템 JS - linksys.js

$(() => {

    // 메인 로고 클릭 시 첫페이지로 이동하기
    $(".logo a").click(() => location.href = "index.html");

    $(".topMenu a").click(function (e) {

        // a요소 기본이동기능 막기
        e.preventDefault();

        let txt = $(this).text().trim();
        location.href = "sub.html?page="+escape(txt);
        console.log("메뉴글자:", escape(txt));

    });

});