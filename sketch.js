
var bullet,wall,thickness,speed,weight,damage;
var bulletRightEdge,wallLeftEdge;


function setup(){
  createCanvas(1600,400);
  bullet=createSprite(200,200,30,10);
  bullet.shapeColor="white";

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
  damage=0;
}


function draw(){
background(0);

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  console.log(damage);
}

if(damage>10){
  wall.shapeColor="green"
}

if(damage<10){
  wall.shapeColor="red"
}

drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width/2;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }else{
    return false;
  }
   
}
