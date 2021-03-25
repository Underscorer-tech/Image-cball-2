
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ba,wall1,wall2,wall3,ground,ball1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700,);
	engine = Engine.create();
	world = engine.world;
 ground=new walls(400,650,800,15);
 wall1 = new walls(527,610,10,95);
 wall2 = new walls(615,610,10,95);
ball1=new ball(185,635,27);

Engine.run(engine);
  
}


function draw() {
//console.log(mouseX+" "+mouseY)  

   rectMode(CENTER);
  Engine.update(engine);
  background("white");
  ground.display();
  wall1.display();
 wall2.display();
 ball1.display();
 console.log(ball1.body.position)
 drawSprites();


}

function keyPressed(){

if (keyCode === UP_ARROW){

  Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-105});


}



}


