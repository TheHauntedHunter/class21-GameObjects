var movingRect;
var fixedRect;
var gameObject1;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(200,200, 80, 40);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  movingRect.velocityX = 2
  fixedRect.velocityX = -2
  gameObject1=createSprite(20,200,100,100)
  gameObject1.shapeColor="orange"
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
       fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2) {
       movingRect.velocityX = movingRect.velocityX * (-1)
       fixedRect.velocityX = fixedRect.velocityX * (-1)
      }
      if (isTouching(movingRect,gameObject1)) {
         movingRect.shapeColor="red";
         gameObject1.shapeColor="red";
      }
      else {
        movingRect.shapeColor="green";
        gameObject1.shapeColor="orange";
      }
      
  drawSprites();
}
