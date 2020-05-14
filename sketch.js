var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);  
  speed=random(55,90);
  weight=random(1500,400);
   car.velocityX=speed;

   deformation=0.5*weight*speed*speed/22500
   if (deformation<100)
   {
     car.shapeColor="green";
   }
   if ((deformation>100)&&(deformation<180))
   {
     car.shapeColor="yellow";
   }
   if (deformation>180)
   {
     car.shapeColor="red"
   }
  drawSprites();

}