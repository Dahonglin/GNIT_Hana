// Audio 객체 설정
const myAudio = new Audio();
myAudio.src = "./bgm/acnh_bgm.mp3";
// 오디오 재생: 크롬브라우저에서 작동 안함 
myAudio.play(); // 버튼 취득 
myAudio.volume = 0.3;
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
// const btnPlayImg = document.getElementsByClassName('play').item(0);
// const btnPauseImg = document.getElementsByClassName('pause').item(0);

// 재생 버튼 
btnPlay.onclick = function () {
    myAudio.play();
    myAudio.loop = true;
    // btnPlayImg.classList.add('hidden');
    // btnPauseImg.classList.remove('hidden');
}
// 일시정지 버튼 
btnPause.onclick = function () {
    myAudio.pause();
    // btnPauseImg.classList.add('hidden');
    // btnPlayImg.classList.remove('hidden');
}