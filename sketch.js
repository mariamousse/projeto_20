
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var obj1, obj2, obj3, plane;
let engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(550, 700);


	engine = Engine.create();
	world = engine.world;
    
    var obj1_options = {
	 restituition : 0.5,
	 friction : 0.02,
	 frictionAir : 0
	}
	var obj2_options = {
	 restituition : 0.7,
     friction : 0.01,
	 frictionAir : 0.1
	}
	var obj3_options = {
      restituition : 0.01,
	  friction : 1,
	  frictionAir : 0.3
	}
	var plane_options = {
		isStatic : true
	}
     
	
	//Crie os Corpos Aqui.
    obj1 = Bodies.rectangle(110,50,10,10,obj1_options);
	World.add(world, obj1);

	obj2 = Bodies.circle(220,10,10,obj2_options);
	World.add(world, obj2);

	obj3 = Bodies.rectangle(350,50,10,10,obj3_options);
	World.add(world, obj3);

	plane = Bodies.rectangle(275,650,400,10,plane_options);
	World.add(world, plane);

	Engine.run(engine);
	
  
}


function draw() {
  background("limegreen");
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  drawSprites();
  fill("red"); 
  rect(obj1.position.x, obj1.position.y, 50, 50);
  circle(obj2.position.x, obj2.position.y, 50);
  rect(obj3.position.x, obj3.position.y, 100, 50);
  rect(plane.position.x, plane.position.y, 550,10);
 
}



