const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var string, base, ball;

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(250,height,500,20);
    
    var baseOptions = {
        isStatic : true
    }
    base = Bodies.rectangle(200,100,200,20,baseOptions);
    World.add(world,base);
   
    var ballOptions = {
        restitution : 1.0,
        density : 1.0
      }
    ball  = Bodies.circle(200,200,40,ballOptions);
    World.add(world,ball);
    
    var options = {
        bodyA : ball,
        bodyB : base,
        stiffness: 0.04,
        length : 200
      }
      var string = Constraint.create(options);
      World.add(world,string);
}

function draw(){
    background("white");
    Engine.update(engine);
    fill("blue");
    text("Press Space to oscillate the pendulam with the mouse",10,20);
    text("Press Enter to stop",10,50);
    
    fill ("green");
    rectMode(CENTER);
    rect(base.position.x,base.position.y,200,30);
    fill("#32CD32");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);
    
    
    
    line(ball.position.x,ball.position.y,base.position.x,base.position.y)
   
    if(keyCode === 32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    }
    else if (keyCode === ENTER){
    ball.position.x = 200;
    }
}
