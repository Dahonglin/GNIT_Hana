// 로딩 구역 설정
window.addEventListener("load", () => {

    // 음료 부분 객체로 저장
    let drink = {
        '커피': "coffee",
        '음료': "juice",
        '아이스크림/디저트': "dessert",
        '빽스치노': "chino"
    };
    // 버튼들 선택자 저장
    const drinkBg = document.querySelector('.img-moving');

    let drinkBtn = document.querySelectorAll(".menuBtn li");

    // 초기화(클래스지우기)
    const initBtn = () => {
        for (let k of drinkBtn) k.classList.remove("on");
    }
    for (let i of drinkBtn) {
        i.onclick = () => {
            // drinkName에 버튼에 설정 되어 있는 이름을 할당함.
            let drinkName = i.innerText;
            // 버튼 초기화
            initBtn();
            // 나자신에게 on넣기
            i.classList.add("on");
            // 배경 바꾸기
            drinkBg.style.background =
                `transparent url("./img/drink/${drink[drinkName]}.png") repeat-x left top`;


        }
    }

    // 로딩 구역 끝
});