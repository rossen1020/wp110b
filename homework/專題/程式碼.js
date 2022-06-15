var canvas = document.getElementById('game');
var Context = canvas.getContext('2d');


var snakePart = [];
class SnakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

//遊戲初始設定
var speed = 8;
var tileSize = (canvas.width / 20) - 2;//設定活動範圍
var snakeX = 10, snakeY = 10;
var long = 0;
var appleX = 5, appleY = 5;
var Vx = 0, Vy = 0;//初始速度
var score = 0;


function startGame() {
    snakePosition();
    var lose = isOver();
    if(lose){
        document.body.addEventListener('keydown', playAgain);
        clearScreen();
    		checkColli();
        return;
    }
		else if(win){
        return;
    }
    
   // var win = isWin();

    drawApple();
    drawSnake();
    drawScore();
    
    setSpeed();
    
    setTimeout(startGame, 1000/speed);
}

//蛇的移動
function snakePosition() {
    snakeX = snakeX +Vx;
    snakeY = snakeY +Vy;
}

function setSpeed() {
        if(score == 5){
            speed = 10;
        }    
}

function isWin() {
    var win = false;
    if(score == 10){
        win = true;
    }
    if(win){
        Context.fillStyle = "white";
        Context.font = "50px Poppins";
        Context.fillText("你贏了!", canvas.width/3.3, canvas.height /2)
    }
    return win;
}

function isOver() {
    var Over = false;
    if(snakeX < 0 || snakeX == 20 || snakeY < 0 || snakeY == 20){
        Over = true;
    }
    for(var i = 0; i < snakePart.length; i++){
        if(snakeX == snakePart[i].x && snakeY == snakePart[i].y){
            Over = true;
        }
    }
    if(Over){
        Context.fillStyle = "white";
        Context.font = "50px Poppins";
        Context.fillText("Game Over!", canvas.width/6.5, canvas.height /2);
        Context.font = "40px Poppins";
        Context.fillText("再玩一次?", canvas.width/3.5, canvas.height /2 + 50 );
        Context.font = "25px Poppins";
        Context.fillText("按空白鍵", canvas.width/2.7, canvas.height /2 +100 );
    }
    return Over;
}
/*
function clearScreen() {
    Context.fillStyle= 'black';
    Context.fillRect(0, 0, 400, 400);
}

function drawSnake() {
    
    Context.fillStyle = "green";
    for(var i = 0; i< snakePart.length; i++){
        var part = snakePart[i];
        Context.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakePart.push( new SnakePart(snakeX, snakeY));
    if(snakePart.length > tailLen){
        snakePart.shift();
    }

    Context.fillStyle = 'orange';
    Contextx.fillRect(snakeX * tileCount, snakeY *tileCount, tileSize, tileSize);

}

function drawApple() {
    Context.fillStyle = "red";
    Context.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function drawScore() {
    Context.fillStyle = "white";
    Context.font = "10px Poppins";
    Context.fillText("Score: " + score, canvas.width-50, 10);
}

function checkColli() {
    if(appleX === headX && appleY === headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLen ++;
        score ++;
        if(score > 5 && score % 2 == 0){
            speed ++;
        }
    }
}*/



document.body.addEventListener('keydown', keyDown);

function keyDown(event) {

    //go up
    if(event.keyCode== 38){
        if(yV == 1) 
            return;
        yV = -1;
        xV = 0;
    }

    //go down
    if(event.keyCode == 40){
        if(yV == -1) 
            return;
        yV = 1;
        xV = 0;
    }

    //go left
    if(event.keyCode == 37){
        if(xV == 1) 
            return;
        yV = 0;
        xV = -1;
    }

    //go right
    if(event.keyCode == 39){
        if(xV == -1) 
            return;
        yV = 0;
        xV = 1;
    }
}
function playAgain(event) {
    if(event.keyCode == 32){
        location.reload();
    }
}

startGame();
