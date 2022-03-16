//Audio 객체 설정
const myAudio = new Audio();
// myAudio.src = "./bgm/acnh_bgm.mp3"; // 오디오 재생: 크롬브라우저에서 작동 안함
myAudio.play(); // 버튼 취득
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");

// 재생 버튼
btnPlay.onclick = function () {
    myAudio.play();
    myAudio.volume = 0.3;
    myAudio.loop = true;
}
// 일시정지 버튼
btnPause.onclick = function () {
    myAudio.pause();
}