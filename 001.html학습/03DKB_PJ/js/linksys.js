//도깨비 PJ 링크 시스템 JS - linksys.js

///////////////////로드구역////////////////////

window.addEventListener('DOMContentLoaded', () => {
    let logo = document.querySelector('#logo img');
    logo.style.cursor ="pointer";
    logo.style.zIndex ="5";
    logo.style.position = "relative";
    // 클릭 이동
    logo.onclick = () => location.href = "index.html";
    let aLink = document.querySelectorAll('.top a');

    for (let i = 0; i < aLink.length; i++) {
        aLink[i].onclick = function () {
            let atxt = this.innerText;

            // 이동 URL
            let url;

            // 분기
            switch (atxt) {
                case '로그인':
                    url = "login";
                    break;
                case '회원가입':
                    url = "member";
                    break;
                case '인물관계도':
                    url = "cat";
                    break;
                default:
                    url = 'esc';
            }

            // url != 'esc' 페이지 이동
            if (url !== 'esc') location.href = url + ".html";
            // location.href = 이동할 페이지 주소
            // > 페이지를 이동함
            // 원래 window.location.href 이지만
            // window객체명은 생략 가능하다.
            else location.href = 'cat.html';
            // 서브페이지가 없는 경우 무조건 한페이지로 몰아주기
        };
    }



});