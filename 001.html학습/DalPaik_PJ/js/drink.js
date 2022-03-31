// 로딩구역 선언
window.addEventListener("load", () => {

    // 메인 3번째 음료 슬라이드
    function chnDrink(drinkType) {
        const drinkBg = document.querySelector('.img-moving');
        const coffeeOn = document.querySelector('.menuBtn li:nth-child(1) input');
        const juiceOn = document.querySelector('.menuBtn li:nth-child(2) input');
        const dessertOn = document.querySelector('.menuBtn li:nth-child(3) input');
        const chinoOn = document.querySelector('.menuBtn li:nth-child(4) input');

        switch (drinkType) {
            case 'coffee':
                drinkBg.style.background = 'transparent url("./img/drink/coffee.png") repeat-x left top';
                drinkBg.style.backgroundSize = '310rem auto';
                coffeeOn.style.background = 'var(--font-color-yellow)';
                juiceOn.style.background = '#fff';
                dessertOn.style.background = '#fff';
                chinoOn.style.background = '#fff';
                break;
            case 'juice':
                drinkBg.style.background = 'transparent url("./img/drink/juice.png") repeat-x left top';
                drinkBg.style.backgroundSize = '310rem auto';
                coffeeOn.style.background = '#fff';
                juiceOn.style.background = 'var(--font-color-yellow)';
                dessertOn.style.background = '#fff';
                chinoOn.style.background = '#fff';
                break;
            case 'dessert':
                drinkBg.style.background = 'transparent url("./img/drink/dessert.png") repeat-x left top';
                drinkBg.style.backgroundSize = '310rem auto';
                coffeeOn.style.background = '#fff';
                juiceOn.style.background = '#fff';
                dessertOn.style.background = 'var(--font-color-yellow)';
                chinoOn.style.background = '#fff';
                break;
            case 'chino':
                drinkBg.style.background = 'transparent url("./img/drink/chino.png") repeat-x left top';
                drinkBg.style.backgroundSize = '310rem auto';
                coffeeOn.style.background = '#fff';
                juiceOn.style.background = '#fff';
                dessertOn.style.background = '#fff';
                chinoOn.style.background = 'var(--font-color-yellow)';
                break;
        }
    }
});