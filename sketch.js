var bg, bgImage;
var nave, meteoro, navealien;
var bala;
var PLAY = 0
var END = 1
var gameState = PLAY
var WIN = 2
var alienGroup;
var meteoroGroup;
var tiroGroup;

function preload(){
  
  bgImage = loadImage("./assets/bg.PNG");
  naveImage = loadImage("./assets/nave2.png");
  navealienImage = loadImage("./assets/navealien.png");
  meteoroImage = loadImage("./assets/meteoro.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2, height/2);
  bg.addImage(bgImage);
  bg.scale = 1.5

  nave = createSprite(300,300);
  nave.addImage(naveImage);
  nave.scale = 0.4

}

function draw() {
  background(0); 

  if(gameState === PLAY){
    if(keyDown(UP_ARROW)){
        nave.y = nave.y -5
      }

      if(keyDown(DOWN_ARROW)){
        nave.y = nave.y +5
      }

      if(keyDown(LEFT_ARROW)){
        nave.x = nave.x -5
      }

      if(keyDown(RIGHT_ARROW)){
        nave.x = nave.x +5
      }

      alien();
      obstacle();

      if(keyDown("space")){
        bala = createSprite(nave.x,nave.y,5,10);
        bala.velocityY = -4
    
        tiroGroup.add(tiro);
    
      }

      
      // for(var i = 0; i < tiroGroup.length ;i++){
      //   if(tiroGroup[i].isTouching(alienGroup)){
      //     tiroGroup[i].destroy();
      //   }
      // }









  }
  else if(gameState === END){

  }
  else if(gameState === WIN){

  }

  drawSprites();
}

function alien(){
  if(frameCount%60 === 0){
    x = Math.round(random(50,width-50))
    navealien = createSprite(x, 0);
    navealien.addImage(navealienImage);
    navealien.scale = 0.25

    navealien.velocityY = 3

    navealien.velocityX = Math.round(random(-3, 3))

    alienGroup.add(naveAlien);
  }
  
}

function obstacle(){
  if(frameCount%90 ===0){
      x = Math.round(random(50,width-50))
      meteoro = createSprite(x, 0);
      meteoro.addImage(meteoroImage);
      meteoro.scale = 0.25

      meteoro.velocityY = 3

      meteoro.velocityX = -3

      meteoroGroup.add(meteoro);
  }
}

