const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

let engine;
let world;
var roadImg , bImg , cbImg;
var road , blue_car , cannon_ball;
function preload(){
  roadImg = loadImage("background.png");
  bImg    = loadImage("Rabbit-01.png");
  cbImg   = loadImage("melon.png");
}
function setup() 
{
  createCanvas(500,700);
 
  engine = Engine.create();
  world = engine.world;
  road = createSprite(350,350,20,20);
  road.addImage(roadImg);
 blue_car=createSprite(150,150,10,10);
 blue_car.addImage(bImg);
 blue_car.scale=0.05;

 cannon_ball=createSprite(200,200,20,20);
 cannon_ball.addImage(cbImg);
 cannon_ball.scale=0.05;

}

function draw() 
{
  background(51);
  Engine.update(engine);
drawSprites();
 
   
}
