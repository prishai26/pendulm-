const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob;
var bob2;
var bob3 ;
var bob4;
var con;
var con2; 
var con3; 
var con4;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
  
	var bob_options = {
	  restitution: 0.8
	}

	  
	bob = Bodies.circle(200,50,12,bob_options);

	World.add(world,bob);
  
	bob2 = Bodies.circle(210,50,12,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(220,50,12,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(230,50,12,bob_options);
	world.add(world,bob4);

	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con);

	con2 = Matter.Constraint.create({
		pointA:{x:210,y:20},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:220,y:20},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:230,y:20},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con4);




	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  ellipse(bob.position.x,bob.position.y,12);
  ellipse(bob2.position.x, bob2.position.y,12);
  ellipse(bob3.position.x,bob3.position.y,12);
  ellipse(bob4.position.x, bob4.position.y,12);
  

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob.position.x,bob.position.y);
  line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
  line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
  line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);

  
  pop();

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(bob,{x:0,y:0},{x:0.05,y:0});
    }
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
