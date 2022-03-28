function chgMV(mvid){ // mvid - 영화아이디값 전달변수
    var tg = document.querySelector("#screen iframe");
    tg.src = `https://www.youtube.com/embed/${mvid}?autoplay=1&playsinline=1`;

} ////////// chgMV 함수 ////////////////////