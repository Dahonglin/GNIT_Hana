// 카테고리 페이지 JS  - category.js

// Get 방식으로 넘어온 값 받기!
let pm = location.href;

// 에러방지를 위해 물음표 체크!!!
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
} /////////// if ////////////////

// 물음표와 이퀄로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];
console.log("카테고리:", pm);


//////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료");

    //// 데이터 바인딩 Vue 인스턴스 생성하기 ///
    let db = new Vue({
        el: "#cont",
        //바인딩할 대상(변경 요소를 포함하는 부모 요소) -> 아이디만 적용 됨.
        data: {
            vals: {},
            // json 데이터가 객체임!
            catName : pm
            // 파라미터로 넘어온 값을 Vue 데이터 변수에 넣음
        }, //// data ///////
        mounted: function () {
            axios // 엑시오스 객체
            .get("js/real.json") // 파일 읽기
            .then(x => this.vals = x); // 할당 (x 변수로 전달)
        }, ////// mounted ////// 
        methods: {
            // 탭메뉴 타이틀 변경 메서드 생성
            chgTit : function (tit) { //바뀔 title 전달
                // document.querySelector('title').innerText =
                // tit+' | 보그 코리아 (Vogue Korea';
                $('title').text(tit+' | 보그 코리아 (Vogue Korea');
                // jQuery 문법과도 함께 사용 가능함.
            } ////// chgTit ////// 
        } ////// methods ////// 
    }); ////////////// Vue //////////////


/////////// Vue js 체험존 GNB 메뉴 클릭 시 ////////
$('.VueGnb a').click(function (e){

    // # 기능 막기
    e.preventDefault();

    // 값 소문자로 변경해서 받기
    let txt = $(this).text().toLowerCase();
    console.log('제대로 됐나?',txt);

    // 파라미터 변수값 업데이트
    pm = txt;
    console.log('체험존 pm 업뎃',pm);
    // pm 값이 Vue 인스턴스 안에 catName 변수로
    // 세팅 되어 있지만, 이 값을 업데이트 해도
    // 페이지가 업데이트 되지 않음.
    // 이것은 Vue 의 변수가 아니기 때문에.

    // Vue 의 대표 특징인 양방향 바인딩 즉,
    // Vue 를 업데이트 하면 화면이 업데이트 되는 기능
    // Vue 의 데이터인 catName을 업데이트 하면 된다.
    
    // Vue 의 변수 접근법
    // Vue 인스턴스를 변수에 담는다.
    // 변수.$data.변수명 = 값
    db.$data.catName = txt;

});


}); ///////////// 로딩구역 ////////////////////////
//////////////////////////////////////////////////