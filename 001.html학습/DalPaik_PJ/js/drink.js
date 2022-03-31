// 로딩 구역 설정
window.addEventListener("load", () => {

    // 음료 부분 객체로 저장
    let drink = {
        '커피': {
            "bgImg": `transparent url("./img/drink/coffee.png") repeat-x left top`,
            "bgSize": '310rem auto',
            "coffeeOn": 'var(--font-color-yellow)',
            "juiceOn": '#fff',
            "dessertOn": '#fff',
            "chinoOn": '#fff'
        },
        '음료': {
            "bgImg": `transparent url("./img/drink/juice.png") repeat-x left top`,
            "bgSize": '310rem auto',
            "coffeeOn": '#fff',
            "juiceOn": 'var(--font-color-yellow)',
            "dessertOn": '#fff',
            "chinoOn": '#fff'
        },
        '아이스크림/디저트': {
            "bgImg": `transparent url("./img/drink/dessert.png") repeat-x left top`,
            "bgSize": '310rem auto',
            "coffeeOn": '#fff',
            "juiceOn": '#fff',
            "dessertOn": 'var(--font-color-yellow)',
            "chinoOn": '#fff'
        },
        '빽스치노': {
            "bgImg": `transparent url("./img/drink/chino.png") repeat-x left top`,
            "bgSize": '310rem auto',
            "coffeeOn": '#fff',
            "juiceOn": '#fff',
            "dessertOn": '#fff',
            "chinoOn": 'var(--font-color-yellow)'
        }

    };

    // 둘 중 하나인데 클래스를 on/off 해서 간단하게 구현하는게 나을까?
    // -> 해당 부분 button에 통으로 bg컬러를 줬더니 추가 클래스로 bg 준게 안먹힘 ㅠㅠ...
    // 객체로 데이터 관리는 쉬워졌지만... 반복 되는 코드가 있어서 이것 보다 더 나은게 있을 것 같은데...

    let drinkBtn = document.querySelectorAll(".menuBtn button");
    // 배열 형태로 저장해서 가져옴.
    // console.log(drinkBtn.length);

    // for of 문으로 배열에 저장된 첫번째 값을 4개 가져오기
    for (let i of drinkBtn) {
        i.onclick = () => {
            // drinkName에 버튼에 설정 되어 있는 이름을 할당함.
            let drinkName = i.innerText;
            // drinkName으로 가져온 버튼에 저장 된 객체 데이터들을 저장함.
            let data = drink[drinkName]; //객체명[속성명]

            // 버튼들 선택자 저장
            const drinkBg = document.querySelector('.img-moving'); //         const drinkBg = document.querySelector('.img-moving');
            const coffeeOn = document.querySelector('.menuBtn li:nth-child(1) button');
            const juiceOn = document.querySelector('.menuBtn li:nth-child(2) button');
            const dessertOn = document.querySelector('.menuBtn li:nth-child(3) button');
            const chinoOn = document.querySelector('.menuBtn li:nth-child(4) button');


            for (let j in data) {
                switch (j) {
                    case "bgImg":
                        drinkBg.style.background = data[j];
                        break;
                    case "bgSize":
                        drinkBg.style.backgroundSize = data[j];
                        break;
                    case "coffeeOn":
                        coffeeOn.style.background = data[j];
                        break;
                    case "juiceOn":
                        juiceOn.style.background = data[j];
                        break;
                    case "dessertOn":
                        dessertOn.style.background = data[j];
                        break;
                    case "chinoOn":
                        chinoOn.style.background = data[j];
                        break;
                }
            }
        }
    }

    // 로딩 구역 끝
});


////////////////////// 구버전 코드 //////////////////////////
// 로딩구역 선언
// window.addEventListener("load", () => {

//     // 메인 3번째 음료 슬라이드
//     function chnDrink(drinkType) {
//         const drinkBg = document.querySelector('.img-moving');
//         const coffeeOn = document.querySelector('.menuBtn li:nth-child(1) input');
//         const juiceOn = document.querySelector('.menuBtn li:nth-child(2) input');
//         const dessertOn = document.querySelector('.menuBtn li:nth-child(3) input');
//         const chinoOn = document.querySelector('.menuBtn li:nth-child(4) input');

//         switch (drinkType) {
//             case 'coffee':
//                 drinkBg.style.background = 'transparent url("./img/drink/coffee.png") repeat-x left top';
//                 drinkBg.style.backgroundSize = '310rem auto';
//                 coffeeOn.style.background = 'var(--font-color-yellow)';
//                 juiceOn.style.background = '#fff';
//                 dessertOn.style.background = '#fff';
//                 chinoOn.style.background = '#fff';
//                 break;
//             case 'juice':
//                 drinkBg.style.background = 'transparent url("./img/drink/juice.png") repeat-x left top';
//                 drinkBg.style.backgroundSize = '310rem auto';
//                 coffeeOn.style.background = '#fff';
//                 juiceOn.style.background = 'var(--font-color-yellow)';
//                 dessertOn.style.background = '#fff';
//                 chinoOn.style.background = '#fff';
//                 break;
//             case 'dessert':
//                 drinkBg.style.background = 'transparent url("./img/drink/dessert.png") repeat-x left top';
//                 drinkBg.style.backgroundSize = '310rem auto';
//                 coffeeOn.style.background = '#fff';
//                 juiceOn.style.background = '#fff';
//                 dessertOn.style.background = 'var(--font-color-yellow)';
//                 chinoOn.style.background = '#fff';
//                 break;
//             case 'chino':
//                 drinkBg.style.background = 'transparent url("./img/drink/chino.png") repeat-x left top';
//                 drinkBg.style.backgroundSize = '310rem auto';
//                 coffeeOn.style.background = '#fff';
//                 juiceOn.style.background = '#fff';
//                 dessertOn.style.background = '#fff';
//                 chinoOn.style.background = 'var(--font-color-yellow)';
//                 break;
//         }
//     }
// });
