var fixedRect, movingRect;
var go1,go2,go3,go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.velocityY = -2;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(100,100,50,50);
  go1.shapeColor = "blue";
  go2 = createSprite(200,100,50,50);
  go2.shapeColor = "blue";
  go3 = createSprite(300,100,50,50);
  go3.shapeColor = "blue";
  go4 = createSprite(600,100,50,50);
  go4.velocityY = 2; 
  go4.shapeColor = "blue";
  
}

function draw(){ 
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,go2)){
   movingRect.shapeColor = "red";
   go2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  go2.shapeColor = "green";
}

bounceOff(fixedRect,go4);

  drawSprites();
}








