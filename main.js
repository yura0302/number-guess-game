//랜덤 정답번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다 !
//란덤번호 < 유저번호 Down !!
//랜덤번호 > 유저번호 UP !!
//reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 ( 더이상 추축 불가,  버튼 disable )
//유저가 1과 100 범위 밖에 숫자를 입력하면 알려준다 . 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.

let computerNum = 0;
let chanceArea = document.getElementById("chance-area");
let chances = 10;
let gameOver = false;

const playButton = document.getElementById("play-button");
const UserInput = document.getElementById("user-input");
const resultArea = document.getElementById("result-area");
const resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function picRandomNum() {
  computerNum = Math.floor((Math.random() * 100) / 10) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = UserInput.value;
  chances--;
  chanceArea.textContent = `남은기회:${chances}번`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN !!!";
  } else {
    resultArea.textContent = "정답 !!!";
  }
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver) {
    playButton.disabled = true;
  }
  // if (결과값 ==정답){
  //   playButton.disabled=true;
  // }
  if (UserInput == focus) {
    UserInput.value = "";
  }
}

function reset() {
  // user input 창이 깨꿋하게 정리되고
  UserInput.value = "";
  // 새로운 번호가 생성되고
  picRandomNum();
  resultArea.textContent = "결과가 나온다";
}

picRandomNum();

// if (focus =인풋창 ) {
// userInput.value=""
// }
