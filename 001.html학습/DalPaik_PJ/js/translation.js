// $.i18n.init({
//     // 기본 언어 한글 세팅
//     lng: 'ko-KR',
//     debug: true,
//     useLocalStorage: true,
//     localStorageExpirationTime: 86400000,
//     ns: {
//         namespaces: ['gnb', 'gnbSub', 'ban', 'main2', 'main3', 'main3Btn', 'main4'],
//         defaultNs: 'gnb'
//     },
//     resStore: {
//         "ko-KR": {
//             // 메인 상단 메뉴
//             "gnb": {
//                 "paikdabang": "빽다방",
//                 "menu": "메뉴·매장",
//                 "franchise": "창업안내",
//                 "news": "새로운 소식"
//             },
//             // 메인 서브 메뉴
//             "gnbSub": {
//                 "ceo": "CEO 인사말",
//                 "info": "빽다방 소개",
//                 "story": "커피 이야기",

//                 "subMenu": "메뉴 보기",
//                 "search": "매장 찾기",
//                 "class": "커피 클래스",

//                 "franInfo": "가맹 정보",
//                 "franSum": "창업 상담",
//                 "guide": "관련 절차",

//                 "subNews": "새소식",
//                 "event": "이벤트",
//                 "goodCS": "우수점포"
//             },
//             // 우측 고정 배너
//             "ban": {
//                 "fixed": "신메뉴 출시"
//             },

//             // 메인 2 텍스트
//             "main2": {
//                 "main2txt1": "친구 같은 브랜드의 진정한 가치",
//                 "main2txt2": "합리적인 커피 문화를 만들어 갑니다.",
//                 "main2txt3": "호기심으로 시작했던 카페 메뉴가 모두에게 사랑 받는 시그니처 메뉴로 성장하게 되었습니다."
//             },

//             // 메인 3 텍스트
//             "main3": {
//                 "main3txt1": "빽다방이 선사하는 다채로운 맛과 향기",
//                 "main3txt2": "커피의 본질적인 것을 통한 커피의 전문성을 부각 시키는 컨텐츠와 함께",
//                 "main3txt3": "비쥬얼, 맛, 건강함, 그리고 마시는 재미까지 함께 선사합니다."
//             },

//             // 메인 3 슬라이드 버튼
//             "main3Btn": {
//                 "main3Btn1": "커피",
//                 "main3Btn2": "음료",
//                 "main3Btn3": "아이스크림/디저트",
//                 "main3Btn4": "빽스치노",
//             },

//             // 메인 4 텍스트
//             "main4": {
//                 "main4txt1": "언제나 친구처럼 친근한 창업",
//                 "main4txt2": "점주 만족도 최상인 카페 브랜드 빽다방",
//                 "main4txt3": "빽다방은 파트너 여러분들의 다양한 창업 조건에 맞는 ‘맞춤형 점포 개설’을 통해",
//                 "main4txt4": "카페 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다.",
//                 "main4txt5": "가맹점 개설 안내"
//             }
//         },
//         "en-US": {
//             // 메인 상단 메뉴
//             "gnb": {
//                 "paikdabang": "Paik's Coffee",
//                 "menu": "Menu·Store",
//                 "franchise": "Franchise",
//                 "news": "News·Event"
//             },
//             // 메인 서브 메뉴
//             "gnbSub": {
//                 "ceo": "CEO Greeting",
//                 "info": "Introduce",
//                 "story": "Coffee story",

//                 "subMenu": "Menu",
//                 "search": "Search store",
//                 "class": "Coffee class",

//                 "franInfo": "Franchise info",
//                 "franSum": "Franchise consult",
//                 "guide": "Franchise guide",

//                 "subNews": "News",
//                 "event": "Event",
//                 "goodCS": "C/S center"
//             },
//             // 우측 고정 배너
//             "ban": {
//                 "fixed": "New drink"
//             },

//             // 메인 2 텍스트
//             "main2": {
//                 "main2txt1": "The true value of a brand like a friend",
//                 "main2txt2": "We create a reasonable coffee culture.",
//                 "main2txt3": "The cafe menu that started out of curiosity has grown into a signature menu loved by everyone."
//             },

//             // 메인 3 텍스트
//             "main3": {
//                 "main3txt1": "A variety of flavors and scents offered by Paik's Coffee",
//                 "main3txt2": "We provide visual, taste, health, and fun to drink along with",
//                 "main3txt3": "content that emphasizes the specialty of coffee through the essentials of coffee."
//             },

//             // 메인 3 슬라이드 버튼
//             "main3Btn": {
//                 "main3Btn1": "Coffee",
//                 "main3Btn2": "Juice",
//                 "main3Btn3": "Dessert",
//                 "main3Btn4": "Paik's Chino",
//             },

//             // 메인 4 텍스트
//             "main4": {
//                 "main4txt1": "A business that is always friendly like a friend",
//                 "main4txt2": "The cafe brand with the highest satisfaction among the owners",
//                 "main4txt3": "Paik's coffee lowers the threshold for cafe start-up and realizes the value of true win-win through",
//                 "main4txt4": "‘opening a customized store’ that meets the various business conditions of partners.",
//                 "main4txt5": "Franchise guide"
//             }
//         }
//     }
// }, () => {
//     $('.translation').i18n();
// });

// const changeLang = (lang) => {
//     $.i18n.setLng(lang);
//     $('.translation').i18n();
// }

///// 전역변수 구역 ///////
// 언어별 메뉴 글자 셋팅하기 ///

let lang = {
    //한국어
    "ko": {
        "메뉴": ["홈", "남성용", "여성용", "게시판"],
        "주소": "서울시 강남구 청담동 34-22 JJ빌딩 94호, 대표: 제임스 홍"
    },
    //영어
    "en": {
        "메뉴": ["Home", "Men", "Women", "Board"],
        "주소": "94, JJ Building, 34-22, Cheongdam-dong, Gangnam-gu, Seoul, Representative: James Hong"
    },
    //일본어
    "jp": {
        "메뉴": ["ホーム", "男性用", "女性", "掲示板"],
        "주소": "ソウル市江南区清潭洞34-22 JJビル94号、代表：ジェームズホン"
    }
}; ///////// lang 객체 ///////

////////////// 로드구역 ////////////////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    // 대상선정
    // (1) 이벤트 대상: .sel
    let sel = document.querySelector(".sel");
    // (2) 변경 대상: GNB메뉴 -> #gnb a
    let gnb = document.querySelectorAll("#gnb a");
    // (3) 변경 대상: 메인 이미지 -> #cont img
    let mimg = document.querySelector("#cont img");
    // (4) 변경 대상: 하단 회사정보 -> #info address
    let addr = document.querySelector("#info address");

    ////////////////////////////////////////////////
    // 1. 선택박스 선택변경시 change이벤트에 따라 변경
    // 이벤트 대상: .sel
    // 이벤트 종류: change
    // 변경대상: 메뉴, 메인이미지, 하단정보
    /////////////////////////////////////////////////
    sel.onchange = () => {

        // 1. 선택 option value 값 읽어오기
        // 화살표함수에서는 this대신 event.currentTarget
        let opt = event.currentTarget.value;
        console.log("변경!", opt);

        // 2. 언어코드에 따른 객체 데이터 읽어오기
        let data = lang[opt];
        console.log("데이터:", data);

        // 3. "메뉴" 데이터에 따른 메뉴 셋팅하기
        // 배열값이므로 forEach문 사용!
        // 배열값 대상: data["메뉴"]
        data["메뉴"].forEach((val, idx) => {
            console.log(idx, val);
            // 각 메뉴 a요소에 메뉴 텍스트 넣기
            // 메뉴 대상 : #gnb a -> gnb변수
            // gnb변수는 querySelectorAll() 즉 컬렉션!
            gnb[idx].innerText = val;
            // 배열순번 === 컬렉션순번 === idx
        }); //////// forEach /////////

        // 4. 메인이미지 변경하기!
        // 대상: #cont img -> mimg
        // 변경내용: src속성값 변경하기!
        // 변경할 이미지는 코드명과 같다!
        // images/코드명.jpg
        mimg.src = `images/${opt}.jpg`;

        // 5. 주소변경하기
        // 대상: #info address -> addr변수
        // 변경내용: data["주소"] 로 텍스트변경
        addr.innerText = data["주소"];

    }; ///////// change 함수 /////////////////




}); ////////// 로드구역 ////////////////////////