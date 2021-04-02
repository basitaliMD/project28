const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paper, ground, leftSide, bottom, rightSide;
var Launcher;

function setup() {
createCanvas(800, 700);

engine = Engine.create();

world = engine.world;

//create the Bodies here

paper = new Paper(100, 600, 40);

ground = new Ground(400, 680, 800, 20);

leftSide = new Dustbin(550, 620, 20, 100);
bottom = new Dustbin(610, 660, 100, 20);
rightSide = new Dustbin(670, 620, 20, 100);

Launcher = new launcher(paper.body,{x:200, y:200});
fill("blue");

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background("black");

Engine.update(engine);
  
paper.display();
ground.display();
leftSide.display();
bottom.display();
rightSide.display();
Launcher.display();

drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW || touches[[]]) {
Matter.Body.applyForce(paper.body, paper.body.position, {x:170, y: -120});
 }
}

function mouseDragged() {
Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
Launcher.fly();
}