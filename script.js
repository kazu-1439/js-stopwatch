let startTime = 0;
let elapsedTime = 0;  //stopしても値はそのまま
let timerId = null;  

const time = document.getElementById("time");
//時間を表示

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
//ボタン

function updateTime(){
 const now = Date.now();
 elapsedTime = now - startTime;  //たった時間＝今ースタートした時間
 const hours = Math.floor(elapsedTime / 3600000);  //時間
 const minutes = Math.floor((elapsedTime % 3600000) / 60000);  //分
 const seconds = Math.floor((elapsedTime % 60000) / 1000);  //秒
 const milliseconds = Math.floor((elapsedTime % 1000) / 100);  //ミリ秒

 time.textContent =
  hours + ":" +
  minutes + ":" +
  seconds + ":" +
  milliseconds;
 }

 startBtn.addEventListener("click", () => {
    if (timerId !== null) return;  //スタートは一回
    startTime = Date.now() - elapsedTime;  //再スタート
    timerId = setInterval(updateTime,10);
 });
 
 stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
 });

 resetBtn.addEventListener("click", () => {
    clearInterval(timerId);

    timerId = null;
    elapsedTime = 0;

    time.textContent = "0:0:0:0";
 });






 