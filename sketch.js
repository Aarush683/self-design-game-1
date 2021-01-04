var truck,truckImage;
var ground;



function preload(){
  truckImage=loadImage("images/t1.png");
}
function setup() {
  createCanvas(1000,1000);
  truck=createSprite(200,500,70,70);
  truck.addImage("truck",truckImage);
  truck.scale=0.7;
  ground=createSprite(500,980,width,20);

  
}

function draw() {
  background(0);  
  if(keyDown("up")){
    truck.y=truck.y-5;

  }
  if(keyDown("down")){
    truck.y=truck.y+5;

  }
  if(keyDown("right")){
    truck.x=truck.x+5;

  }
  if(keyDown("left")){
    truck.x=truck.x-5;
 
  }
  ground.velocityX=+5;
  if(ground.x>1000){
    ground.x=500;
  }



  drawSprites();
}