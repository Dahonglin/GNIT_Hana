// 카테고리 페이지 JS  - sub.js

// Get 방식으로 넘어온 값 받기!
let pm = location.href;


// 에러방지를 위해 물음표 체크!!!
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
} /////////// if ////////////////

// 물음표와 이퀄로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];


// 한글 데이터 복원
pm = unescape(pm);

$(() => {

    // 0. 카테고리별 해당 정보를 객체로 부터 세팅
    // const 에서 let 으로 재 할당 해준 이유(하단 if문)
    let data = sinfo[pm];
    
    if (data == undefined) {
    // 해당 임시 링크를 위해 변수 재선언을 해야하므로
    // const에서 let으로 선언함.
        data = sinfo['CEO 인사말'];
        console.log(data);
    }
    
    // 상단 이미지 랜덤 배정
    const randImg = Math.floor(Math.random() * 8);

    // 상단 배경 이미지 변경
    $('.sub_cont').css({
        "background": `url(./img/sub_tit/${randImg}.jpg)`
    });

    // 1 상단 탭메뉴 타이틀 넣기
    $("title").prepend(data["tit"]);
    // 2. 서브 페이지 제목 넣기
    $(".tit").text(data["tit"]);
    // 3. 서브 페이지 부제목 넣기
    $(".subtit").text(data["subtit"]);
    // 4. 컨텐츠 넣기
    // 대상: .subDes p
    let subDes = $(".subDes p");
    // each() 메서드를 사용하여
    // 타이틀 h2요소의 순번에 맞게 내용을 넣어준다!
    subDes.each((idx, ele) => {
        $(ele).html(data["subDes"][idx]);
    }); 


});


///// 각 서브별 데이터 세팅하기 /////
let sinfo = {
    "CEO 인사말": {
        "tit": "CEO 인사말",
        "subtit": "합리적인 가격, 놀라운 퀄리티의 커피전문점 '빽다방'입니다.",
        "subDes": [
            "기대를 저버리지 않기 위한 막중한 책임감을 느끼며 좋은 품질, 부담 없는 가격의 커피와 음료로 보답하겠습니다.",
            "항상 친구 같은 편안한 모습으로 여러분 곁에 있고 싶습니다. 빽다방과 함께 달콤한 하루 되시기를 바랍니다."
        ]
    },
    "빽다방 소개": {
        "tit": "빽다방 소개",
        "subtit": "수입부터 블렌딩/로스팅/신선도 유지까지 완벽한 원두",
        "subDes": [
            "커피의 가격과 퀄리티의 연관성은 당연할 수 있지만, 빽다방은 그 선입견을 깨고자 노력하고 있습니다.",
            "빽다방 원두는 브라질 원두 고유의 묵직한 바디감과 아몬드의 고소함, 밀크초콜릿 같은 은은한 단맛이 강점입니다."
        ]
    },
    "커피 이야기": {
        "tit": "커피 이야기",
        "subtit": "COFFEE BEAN QUALITY & PROCESSING",
        "subDes": [
            "브라질 벨로소 농장의 체계적인 DOT프로세싱과 스페셜티 원두의 만남!",
            "부드러운 단맛과 묵직한 바디감의 에스프레소 블렌딩입니다."
        ]
    }
}; 