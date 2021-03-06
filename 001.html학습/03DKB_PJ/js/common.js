// JS 주석1
/* JS 주석2 */
// JS 코드 저장공간 -> 함수(호출시에만 실행!)
// 함수는 키워드 function 을 사용함!
// 함수형식: function 함수명(){코드}
function 바꿔() {
    var 대상 = document.getElementsByClassName("top").item(0);
    대상.classList.toggle("on");
    // 1. 함수호출확인 : 경고창 띄우기
    // alert("나야나!");

    // 2. 변경대상선정 : .top
    // 변수에 대상을 담자!
    // 변수는 데이터가 사는 곳!
    // 여기를 봐!!! var
    // JS에서 점(.)은 하위요소로 내려감!
    // 우주.은하계.태양계.지구.대한민국.강남구.그린
    // JS는 명령문 끝에 세미콜론(;)을 쓴다!
    // JS에서 이퀄(=)은 오른쪽 데이터가 왼쪽에 들어감!
    // 이것을 '할당'이라고 함!

    // 문서 탐색하기!
    // (1) html문서 전체 -> document
    // (2) 문서내용 중 아이디요소 -> get Element
    //                              가져와 요소
    //                              By Id
    //                              아이디로!
    // -----> getElementById(아이디명)
    // (3) 문서내용 중 클래스요소 -> get Elements
    //                              가져와 요소들
    //                              By ClassName
    //                              클래스로!
    // -----> getElementByClassName(클래스명)
    // 주의! 클래스는 여러개 사용하는 것이므로
    // 무조건 순번으로 선택함! 첫번째는 0번!
    // ------> getElementByClassName(클래스명).item(0)
    // item(순번) -> 여러개 요소중 몇번째 순번 선택!

    // 3. 대상에게 클래스 넣기!

    /************************************** 
        [ 요소에 클래스를 넣고 빼는 객체 ]
        classList 객체
        (1) add 메서드 : 
            add(클래스명) - 클래스넣기
        (2) remove 메서드 : 
            remove(클래스명) - 클래스빼기
        (3) toggle 메서드 : 
            toggle(클래스명) - 클래스넣기/빼기
            -> 해당클래스가 없으면 넣고
                있으면 제거함!
                
            toggle(토글)은 하나가 2개이상의 기능을
            할때 부르는 단어임!
        ____________________________________
        - 객체는 미리 만들어진 프로그램 단위체
        - 메서드는 객체안에 만들어진 함수
        - 함수는 명령어 집합
    **************************************/

} //////// 바꿔 함수 ////////

window.onload = function () {
    document.getElementsByClassName('ham').item(0).addEventListener('click', addClassOn);
    const top = document.getElementsByClassName('top').item(0);

    function addClassOn() {
        top.classList.toggle('on');
    }
}