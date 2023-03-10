var ship;
var shipImg;

var mar;
var marImg;

function preload(){

shipImg = loadAnimation("ship-1.png","ship-2.png");

marImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite(400,200);
  mar.addImage(marImg);
  mar.velocityX = -5;
  mar.scale = 0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movimento",shipImg);
  ship.scale = 0.25

}

function draw() {
  background("blue");
    drawSprites();

  mar.velocityX = -3;
 
}
