var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');


var speed = 8;
var lattice = 20;//要設20*20的格數
var Size = canvas.width / lattice ;//方格大小
var X = 10, Y = 10;//初始位置:中心點
var appleX = 10, appleY = 5;//蘋果位置
var Vx = 0, Vy = 0;//位置控制
var score = 0;

//遊戲主架構
function startGame() {
  

  var lose = isOver();//結束與否
  if (lose) {
    document.body.addEventListener('keydown', playAgain);
    //按空白鍵重新開始
    return;
  }

  var win = isWin();
  if (win) {
    return;
  }

  snakePosition();//調整snake的位置
  backgroun();//背景樣式
  checkColli();//吃到蘋果
  Apple();//蘋果樣式
  Snake();//蛇的樣式
  Score();//分數
  Speed();//調整速度

  setTimeout(startGame, 1000 / speed);
}

//調整速度
function Speed() {
  if (score == 4) {
    speed = 11;
  }
  if (score >= 5) {
    speed ++;
  }
}

//贏的條件
function isWin() {
    var win = false;
  if (score == 10) {
    win = true;
        
    ctx.font="30px Verdana";
    var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
    gradient.addColorStop("0","DeepPink");
    gradient.addColorStop("0.5","Cyan");
    gradient.addColorStop("1.0","BlanchedAlmond");
    ctx.strokeStyle=gradient;
    ctx.strokeText("you are winner!",canvas.width/5, canvas.height /2);
        
    }
  return win;
}

//輸的條件
function isOver() {
  var Over = false;
  if (X < 0 || X == 20 || Y < 0 || Y == 20) {
    Over = true;
    
    ctx.fillStyle = "Crimson";
    ctx.font = "50px Poppins";
    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    ctx.font = "25px Poppins";
    ctx.fillText("按空白鍵", canvas.width / 2.7, canvas.height / 3 + 100);
  }

  return Over;
}

//遊戲背景
function backgroun() {
  ctx.fillStyle = '#00163a';
  ctx.fillRect(0, 0, 400, 400);
}

function Snake() {

  ctx.fillStyle = 'blue';
  ctx.fillRect(X * lattice, Y * lattice, Size, Size);

}

//蘋果樣式
function Apple() {
  ctx.fillStyle = "green";
  ctx.fillRect(appleX * lattice, appleY * lattice, Size, Size);
  //為繪製"已填充"的矩形 fillRect(x, y, 寬, 高)
}

function Score() {
  ctx.fillStyle = "white";//字體顏色
  ctx.font = "15px Poppins";//大小
  ctx.fillText("Score: " + score, canvas.width - 60, 20);
  //設定score文字及位置
}

function checkColli() {
  if (appleX == X && appleY == Y) {
    appleX = Math.floor(Math.random() * lattice);
    appleY = Math.floor(Math.random() * lattice);
    //x,y 隨機生成蘋果
    score++;
  }
}

//調整snake的位置
function snakePosition() {
  X = X + Vx;
  Y = Y + Vy;
}
//控制鍵
document.body.addEventListener('keydown', keyDown);
function keyDown(event) {

    //向上
    if(event.keyCode== 38){
        Vx = 0;
        Vy = -1;
    }
    //向下
    if(event.keyCode == 40){
        Vx = 0;
        Vy = 1;
    }
    //向左
    if(event.keyCode == 37){
        Vx = -1;
        Vy = 0;
    }
    //向右
    if(event.keyCode == 39){
        Vx = 1;
        Vy = 0;
    }
}
//空白鍵重新
function playAgain(event) {
    if(event.keyCode == 32){
        location.reload();
    }
}

startGame();
