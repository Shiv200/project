
var sea; 
var seaImg,ship,shipImg1,shipImg2,shipImg3,shipImg4;


function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation(ship-1,ship-2,ship-3,ship-4);
}

function setup(){
  createCanvas(400,400);
  //creating sea
  sea = createSprite(200,100,400,20);
  sea.addImage(seaImg); 
  sea.velocityX=-2;

  ship = createSprite(200,100,400,20);
  shipImg.addAnimation(shipImg1);

  

  
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 drawSprites();
}