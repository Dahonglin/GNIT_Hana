// 로딩구역 선언
window.addEventListener("load", () => {
    // 패밀리링크 객체 선언
    const fLink = {
        'FAMILY SITE': '#',
        '더본코리아': 'https://www.theborn.co.kr',
        '창업센터': '#',
        '새마을식당': '#',
        '한신포차': '#',
        '역전우동': '#',
        '백스비어': '#',
        '롤링파스타': '#',
        '인생설렁탕': '#',
        '미정국수': '#',
        '리춘시장': '#',
        '원조쌈밥집': '#',
        '돌배기집': '#',
        '백철판': '#',
        '호텔더본': '#'
    }

    // 객체 선언 셀렉트 박스 : #familyLink
    let familyLink = document.querySelector('#familyLink');


    (() => {
        let temp = ''; //임시 변수 선언 + 초기화

        for (let x in fLink) {
            temp += `<option value='${fLink[x]}'>${x}</option>`;
            // x == key 값
            // 객체[키] 
            // fLink[x] - 키에 해당하는 값이 나옴 
        }
        familyLink.innerHTML = temp;
    })();

});