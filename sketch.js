var flappybird,flappybirdImg;
var pipe,pipeImg;
var pip2Img;
var END = 0;
var  PLAY = 1;
var gameState = PLAY;
var restart,restartImg;
var invisi;


function preload() {
  flappybirdImg = loadImage("Flappy_Bird_icon.png");
  pipeImg =  loadImage("assets/pipe.png");
  restartImg = loadImage("restart.png");
  pip2Img = loadImage("assets/pipe.png");
}
function setup() {
  createCanvas(600,600);
  flappybird = createSprite(500,106);
  flappybird.addImage(flappybirdImg);
  flappybird.scale = 0.3;
  
  
  
  pipe = createSprite(266,385);
  pipe.addImage(pipeImg);
  pipe.scale = 0.5;
  pipe.veloxityX = 1;
  pipe.visible = false;
  
  
  restart = createSprite(300,206);
  restart.addImage(restartImg);
  restart.scale = 0.2;
  restart.visible = false;

  invisi = createSprite(width/2,height-10,width,10);  
  invisi.shapeColor = "#f4cbaa";
  invisi.velocityX = 1;


  pipgrp = new Group();
 

  


}
function draw() {
  background(225);
  textSize(23)
  text("Press left arrow key!",195,20);
  text("Press space to jump!",195,35)
  pipe.collide(invisi)
  if (keyDown ("space")) {
    flappybird.velocityY = -7;
  }
  if (keyDown("left")) {
    flappybird.velocityX = -3;
  }
 
  flappybird.velocityY = flappybird.velocityY + 0.8
  

  
  
  
  function spawnPipes() {
    if (frameCount % 100 === 0) {
    var pipe3 = createSprite(0,Math.round(random(285,221)), 10, 10);
    pipe3.velocityX = 4;
    pipe3.scale = 0.5;
    pipe3.addImage(pipeImg);
    pipgrp.add(pipe3)
    }
  
    
   
  }
if (flappybird.isTouching(pipgrp)) {
  gameState = END;
}
if (gameState === END) {
  text("Game Over!",217,207);
  reset();
 
}
  
 spawnPipes();
  
  drawSprites();
}
function reset() {
  
  flappybird.velocityY = 0;
  flappybird.velocityX = 0;
  flappybird.destroy();
  pipe3.destroy();
  
  

}
