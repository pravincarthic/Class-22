const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world, Ball, ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



  var ballops = {
    restitution: 2,
    friction: 1,
    density: 9,
  }
  Ball = Bodies.circle(200, 200,89, ballops);
  World.add(world, Ball);
  console.log(Ball);
  console.log(Ball.position.x);
  console.log(Ball.position.y);


  var groundops = {
    isStatic: true,
  }
  ground = Bodies.rectangle(400, 395, 800, 10, groundops);
  World.add(world, ground);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  circle(Ball.position.x, Ball.position.y,89);
  rect(ground.position.x, ground.position.y, 800, 10);


}