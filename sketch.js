 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var world, engine;
 //var ground;
 //var ball;

 var box1,box2,box3,box4;
 var ground1;
 var pig1,pig2;
 var log1,log2;
 var bird1;

function setup(){
  var Canvas = createCanvas(1200,400);
  
  //giving access to the properties of class box to box1
  

  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(600,height,1200,20);

  box1 = new box(700,320,70,70);
  box2 = new box(920,320,70,70);
  box3 = new box(700,240,70,70);
  box4 = new box(920,240,70,70);

  pig1 = new pig(810,350);
  pig2 = new pig(810,220);

  log1 = new log(700,260,300,PI/2);//here we are calculating the degrees in radians  one PI = 180 degrees and we needed 90 degrees for our log so we divided it by two
  log2 = new log(810,180,300,PI/2);
  console.log(log1);

  bird1 = new bird(100,100);

  //var groundOption = {
   //isStatic: true
 //} 

 //var ballOption = {
   //restitution: 0.7 
 //}
//ground = Bodies.rectangle(250,450,500,15,groundOption);
 //World.add(world,ground);

 //ball = Bodies.circle(250,200,20);
 //World.add(world,ball);
 /*console.log(ground.position.x);
 console.log(ground.position.y);
 console.log(ground.type); */




}

function draw(){
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground1.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  bird1.display();
  //rectMode(CENTER);// makes the rect in the center
  //rect(ground.position.x,ground.position.y,500,15);
  
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,20,20);
}

/* to use the physics engine we will use 3 objects and these 3 objects are created in matter.js library
thename of those 3 objects are as follows
1.world, 2.Engine, 3.Bodies */

/* since these objects are a part of matter library they are referenced as 
matter.world, matter.engine, matter.bodies
we can rename them as world , engine , bodies so that it is easy to write and read our code.
this is called as nameSpacing in programming.
we are going to use the const(constant) term to nameSpace them */

