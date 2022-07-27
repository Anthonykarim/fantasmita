function preload() {
ghost = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
createCanvas(400,400);
fantasma = createSprite(200,180,20,50);
fantasma.addAnimation("runing",ghost);
fantasma.frameDelay=2;
}

function draw(){
   background("black");
drawSprites();
  
}