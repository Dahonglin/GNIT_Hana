///// 전역변수 구역 ///////
// 언어별 메뉴 글자 셋팅하기 ///
var lang = {
    //한국어
    "ko": {
        "GNB": [
            "빽다방", "CEO 인사말", "빽다방 소개", "커피 이야기",
            "메뉴·매장", "메뉴 보기", "매장 찾기", "커피 클래스",
            "창업안내", "가맹 정보", "창업 상담", "관련 절차",
            "새로운 소식", "새소식", "이벤트", "우수점포"
        ],

        "fixBan": "신메뉴 출시",

        "main2": ["친구 같은 브랜드의 진정한 가치", "합리적인 커피 문화를 만들어 갑니다.",
            "호기심으로 시작했던 카페 메뉴가 모두에게 사랑 받는 시그니처 메뉴로 성장하게 되었습니다."
        ],
        "main3": ["빽다방이 선사하는 다채로운 맛과 향기", "커피의 본질적인 것을 통한 커피의 전문성을 부각 시키는 컨텐츠와 함께",
            "비쥬얼, 맛, 건강함, 그리고 마시는 재미까지 함께 선사합니다."
        ],
        "main3Btn": ["커피", "음료", "아이스크림/디저트", "빽스치노"],
        "main4": ["언제나 친구처럼 친근한 창업", "점주 만족도 최상인 카페 브랜드 빽다방",
            "빽다방은 파트너 여러분들의 다양한 창업 조건에 맞는 ‘맞춤형 점포 개설’을 통해",
            "카페 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다."
        ],

        //         // 메인 4 텍스트
        // "main4": {
        //     "main4txt1": "언제나 친구처럼 친근한 창업",
        //     "main4txt2": "점주 만족도 최상인 카페 브랜드 빽다방",
        //     "main4txt3": "빽다방은 파트너 여러분들의 다양한 창업 조건에 맞는 ‘맞춤형 점포 개설’을 통해",
        //     "main4txt4": "카페 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다.",
        //     "main4txt5": "가맹점 개설 안내"
        // }
    },
    //영어
    "en": {
        "GNB": [
            "Paik's Coffee", "CEO Greeting", "Introduce", "Coffee story",
            "Menu·Store", "Menu", "Search store", "Coffee class",
            "Franchise", "Franchise info", "Franchise consult", "Franchise guide",
            "News·Event", "News", "Event", "C/S center"
        ],

        "fixBan": "New drink",

        "main2": ["The true value of a brand like a friend", "We create a reasonable coffee culture.",
            "The cafe menu that started out of curiosity has grown into a signature menu loved by everyone."
        ],
        "main3": ["A variety of flavors and scents offered by Paik's Coffee",
            "We provide visual, taste, health, and fun to drink along with",
            "content that emphasizes the specialty of coffee through the essentials of coffee."
        ],
        "main3Btn": ["Coffee", "Juice", "Dessert", "Paik's Chino"]


        // "main4": {
        //     "main4txt1": "A business that is always friendly like a friend",
        //     "main4txt2": "The cafe brand with the highest satisfaction among the owners",
        //     "main4txt3": "Paik's coffee lowers the threshold for cafe start-up and realizes the value of true win-win through",
        //     "main4txt4": "‘opening a customized store’ that meets the various business conditions of partners.",
        //     "main4txt5": "Franchise guide"
        // }
    }

}; ///////// lang 객체 ///////

////////////// 로드구역 ////////////////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    // 대상선정
    // (1) 이벤트 대상: .sel
    let sel = document.querySelectorAll(".lang option");
    // 상단 메뉴 선택
    let gnb = document.querySelectorAll(".topMenu a");

    // 우측 배너
    let fixBan = document.querySelectorAll(".fixBan");
    console.log(fixBan);

    // 메인2
    let main2 = document.querySelectorAll(".main2");
    // 메인3
    let main3 = document.querySelectorAll(".main3");
    // 메인3 슬라이드 버튼
    let main3Btn = document.querySelectorAll(".menuBtn button");


    for (let x of sel) {
        x.onclick = () => {
            //버튼 밸류값 (언어값) 받아오기
            let opt = event.currentTarget.value;

            // 언어코드에 따른 객체 데이터 읽어오기
            let data = lang[opt];

            // 대메뉴 / 서브메뉴 변경
            data["GNB"].forEach((val, idx) => gnb[idx].innerText = val);

            // 우측 고정 배너
            fixBan[0].innerText = data["fixBan"];
            fixBan[1].innerText = data["fixBan"];

            // 메인2
            data["main2"].forEach((val, idx) => main2[idx].innerText = val);
            // 메인3
            data["main3"].forEach((val, idx) => main3[idx].innerText = val);
            // 메인3 슬라이드 버튼
            data["main3Btn"].forEach((val, idx) => main3Btn[idx].innerText = val);

        }; ///////// change 함수 /////////////////
    }

}); ////////// 로드구역 ////////////////////////