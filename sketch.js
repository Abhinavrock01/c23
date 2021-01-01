const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(750,height,1500,50);

    box1 = new Box(1000,510,90,90);
    box2 = new Box(1220,510,90,90);
    pig1= new Pig(1110 ,510);
    log1 = new Log(1110,330,320,PI/2);
    box3 = new Box(1000,420,90,90);
    box4 = new Box(1220,420,90,90);
    
    
    pig2= new Pig(1110 ,420);
 
    log2 = new Log(1110,420,320,PI/2);
    box5 = new Box(1110, 330, 70, 70);
    log3 = new Log(1000,240,150, PI/7); 
    log4 = new Log(1120,240,150, -PI/7);
    bird = new Bird(200,200);

 
}

function draw(){
    background("yellow");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();

    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird.display();
}