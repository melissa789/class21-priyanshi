var fixedRect, movingRect;
var p,s

function setup() {
  createCanvas(1200,800);
  fixedRect  = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  p=createSprite(200,200,40,70);
  p.shapeColor="purple"
  p.velocityX=3;
  s=createSprite(900,200,70,40);
  s.shapeColor="yellow";
  s.velocityX=-5;
}

function draw() {
  background(0,0,0);  

 bounceOff(p,s);
 
  drawSprites()
}


