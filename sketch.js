
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);

	ground = new Ground(400,350,800,20)
  b1 = new ball(100,320)
  bin1 = new bin(625,340,100,10)
  bin2 = new bin(570,295,10,100,)
  bin3 = new bin(680,295,10,100)
  //make class
  //define properties and functions inside the class
  //make a object
  //save in computer memory(var)
  //check if you want to make any changes
  //call the function
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display()
  b1.display()
  bin1.display()
  bin2.display()
  bin3.display()
  imageMode(CENTER)
  image(binimage,625,300,175,115)



  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
    Body.applyForce(b1.ball,b1.ball.position,{x:80,y:-85})
 }
}

