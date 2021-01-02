
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper()
ground=new Ground()
console.log(paper.body.position);
var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  paper.display()
  ground.display()
  drawSprites();
 
}
/*function keyPressed() { 
  if (keyCode === UP_ARROW) 
 { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); } }*/


