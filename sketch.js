
var monkey , monkey_running,gameOverAnimation;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,ground1;
var play=0;
var end=1;
var gameState=play;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  gameOverAnimation=loadImage("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
 
}



function setup() {
  
  createCanvas(600,400)
  ground=createSprite(300,400,600,50);
  
  ground1=createSprite(300,420,600,50);
  
  
    monkey=createSprite(40,350,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
monkey.scale=0.1;
  
  
  score=0;
}


function draw() {
background("white")

  text("Banana Caught: "+score,450,50)
  monkey.collide(ground1)
  if(gameState==play){
  monkey.velocityY=5;
if(keyDown("space")&&monkey.y>300){
  monkey.velocityY=-50;
  
}
  if(monkey.isTouching(obstacleGroup)){
    gameState=end;
    
  }
  if(monkey.isTouching(bananaGroup)){
    score=score+1;    
    
  }
    
  obstacleFun();
  bananaFun();
}
  if(gameState==end){
     obstacleGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(-1);
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
    monkey.visible=false;
    textSize(20);
    text("Game Over! Banana Caught: "+score,150,200)
    
  }
  if(keyDown("space")&&gameState===end){
      gameState=play;
      monkey.visible=true;
    
     obstacleGroup.setLifetimeEach(0);
     bananaGroup.setLifetimeEach(0);
    score=0;
    }
  
  drawSprites();
}
function obstacleFun(){
  if(frameCount%60===0){
    obstacle=createSprite(600,360,10,100)
    obstacle.velocityX=-40;
    obstacle.addImage("obstacleImage",obstaceImage);
    obstacle.scale=0.2;
    obstacle.lifetime=60;
    obstacleGroup.add(obstacle)
  obstacle.debug = false;
    obstacle.setCollider("circle",0,0,120)
  }
}
function bananaFun(){
  if(frameCount%20===0){
    banana=createSprite(600,250,10,100)
    banana.velocityX=-40;
    banana.addImage("bananaImage",bananaImage);
    banana.scale=0.1;
    banana.lifetime=60;
    bananaGroup.add(banana)
  banana.debug = false;
    banana.setCollider("circle",0,0,120)
  }
}