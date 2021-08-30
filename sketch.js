var robot,robot_idle,robot_shoot;
var enemy,enemy_run;

function preload()
{
 
}

function setup() 
{
  createCanvas(800,400);

  var robot = createSprite(400,200,50,50);
}

function draw() 
{
  background(255,255,255);
  
  
  drawSprites();
}