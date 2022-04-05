$.i18n.init({
    // 기본 언어 한글 세팅
    lng: 'ko-KR',
    debug: true,
    useLocalStorage: false,
    localStorageExpirationTime: 86400000,
    ns: {
        namespaces: ['gnb', 'gnbSub', 'ban', 'main2', 'main3', 'main3Btn', 'main4'],
        defaultNs: 'gnb'
    },
    resStore: {
        "ko-KR": {
            // 메인 상단 메뉴
            "gnb": {
                "paikdabang": "빽다방",
                "menu": "메뉴·매장",
                "franchise": "창업안내",
                "news": "새로운 소식"
            },
            // 메인 서브 메뉴
            "gnbSub": {
                "ceo": "CEO 인사말",
                "info": "빽다방 소개",
                "story": "커피 이야기",

                "subMenu": "메뉴 보기",
                "search": "매장 찾기",
                "class": "커피 클래스",

                "franInfo": "가맹 정보",
                "franSum": "창업 상담",
                "guide": "관련 절차",

                "subNews": "새소식",
                "event": "이벤트",
                "goodCS": "우수점포"
            },
            // 우측 고정 배너
            "ban": {
                "fixed": "신메뉴 출시"
            },

            // 메인 2 텍스트
            "main2": {
                "main2txt1": "친구 같은 브랜드의 진정한 가치",
                "main2txt2": "합리적인 커피 문화를 만들어 갑니다.",
                "main2txt3": "호기심으로 시작했던 카페 메뉴가 모두에게 사랑 받는 시그니처 메뉴로 성장하게 되었습니다."
            },

            // 메인 3 텍스트
            "main3": {
                "main3txt1": "빽다방이 선사하는 다채로운 맛과 향기",
                "main3txt2": "커피의 본질적인 것을 통한 커피의 전문성을 부각 시키는 컨텐츠와 함께",
                "main3txt3": "비쥬얼, 맛, 건강함, 그리고 마시는 재미까지 함께 선사합니다."
            },

            // 메인 3 슬라이드 버튼
            "main3Btn": {
                "main3Btn1": "커피",
                "main3Btn2": "음료",
                "main3Btn3": "아이스크림/디저트",
                "main3Btn4": "빽스치노",
            },

            // 메인 4 텍스트
            "main4": {
                "main4txt1": "언제나 친구처럼 친근한 창업",
                "main4txt2": "점주 만족도 최상인 카페 브랜드 빽다방",
                "main4txt3": "빽다방은 파트너 여러분들의 다양한 창업 조건에 맞는 ‘맞춤형 점포 개설’을 통해",
                "main4txt4": "카페 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다.",
                "main4txt5": "가맹점 개설 안내"
            }
        },
        "en-US": {
            // 메인 상단 메뉴
            "gnb": {
                "paikdabang": "Paik's Coffee",
                "menu": "Menu·Store",
                "franchise": "Franchise",
                "news": "News·Event"
            },
            // 메인 서브 메뉴
            "gnbSub": {
                "ceo": "CEO Greeting",
                "info": "Introduce",
                "story": "Coffee story",

                "subMenu": "Menu",
                "search": "Search store",
                "class": "Coffee class",

                "franInfo": "Franchise info",
                "franSum": "Franchise consult",
                "guide": "Franchise guide",

                "subNews": "News",
                "event": "Event",
                "goodCS": "C/S center"
            },
            // 우측 고정 배너
            "ban": {
                "fixed": "New drink"
            },

            // 메인 2 텍스트
            "main2": {
                "main2txt1": "The true value of a brand like a friend",
                "main2txt2": "We create a reasonable coffee culture.",
                "main2txt3": "The cafe menu that started out of curiosity has grown into a signature menu loved by everyone."
            },

            // 메인 3 텍스트
            "main3": {
                "main3txt1": "A variety of flavors and scents offered by Paik's Coffee",
                "main3txt2": "We provide visual, taste, health, and fun to drink along with",
                "main3txt3": "content that emphasizes the specialty of coffee through the essentials of coffee."
            },

            // 메인 3 슬라이드 버튼
            "main3Btn": {
                "main3Btn1": "Coffee",
                "main3Btn2": "Juice",
                "main3Btn3": "Dessert",
                "main3Btn4": "Paik's Chino",
            },

            // 메인 4 텍스트
            "main4": {
                "main4txt1": "A business that is always friendly like a friend",
                "main4txt2": "The cafe brand with the highest satisfaction among the owners",
                "main4txt3": "Paik's coffee lowers the threshold for cafe start-up and realizes the value of true win-win through",
                "main4txt4": "‘opening a customized store’ that meets the various business conditions of partners.",
                "main4txt5": "Franchise guide"
            }
        }
    }
}, () => {
    $('.translation').i18n();
});

const changeLang = (lang) => {
    $.i18n.setLng(lang);
    $('.translation').i18n();
}