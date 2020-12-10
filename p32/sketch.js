const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var stand1, stand2;
var ball;
var sling;
var polygonImg;
var score = 0;
var bgImg

function preload()
{
  polygonImg = loadImage("polygon.png");

  bgImg = loadImage("light.jpg");

  Background();
}

function setup() 
{
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450,390,900,20);

  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
 
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);

  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  
  box16 = new Box(390,155,30,40);
  
  boxes1 = new Box(640,175,30,40);
  boxes2 = new Box(670,175,30,40);
  boxes3 = new Box(700,175,30,40);
  boxes4 = new Box(730,175,30,40);
  boxes5 = new Box(760,175,30,40);
  
  boxes6 = new Box(670,135,30,40);
  boxes7 = new Box(700,135,30,40);
  boxes8 = new Box(730,135,30,40);
  
  boxes9 = new Box(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Sling(this.ball, {x:100, y:200});

}
function draw() 
{
  background("light.jpg"); 
 
  Engine.update(engine);
  
  textSize(20);
  fill("red");
  text("SCORE:" + score,600, 40);  

  // textSize(20);
  // fill("red");
  // text("DRAG THE BALL TO MOVE IT",300,50);

  ground.display();

  stand1.display();
  stand2.display();

  fill(247, 101, 163);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("#A155B9");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("cyan");
  box13.display();
  box14.display();
  box15.display();

  fill("#AAF77D");
  box16.display();

  fill(247, 101, 163);
  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();

  fill("#A155B9");
  boxes6.display();
  boxes7.display();
  boxes8.display();

  fill("cyan");
  boxes9.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();  
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  boxes1.score();
  boxes2.score();
  boxes3.score();
  boxes4.score();
  boxes5.score();
  boxes6.score();
  boxes7.score();
  boxes8.score();
  boxes9.score();
 
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40, 40);

  sling.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    sling.attach(ball);
  }
}

async function Background()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;

  var hour = dateTime.slice(11,13);

  console.log(responseJSON);
  console.log(dateTime);
  console.log(hour);

  if(hour >= 06 && hour <= 18)
  { 
    bg = "light.jpg";
  }
 else
  {
    bg = "dark.jpg"; 
  }


  bgImg = loadImage(bg);
  // console.log(bg);
    
}