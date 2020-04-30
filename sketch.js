const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops = [];
var dropCount = 500;

var cloud;
var engine,world;
function setup() {
  var canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
 
  cloud=new Cloud(55,10,309,159);
  cloud1=new Cloud(360,10,309,159);
  cloud2=new Cloud(665,10,309,159);
  cloud3=new Cloud(969,10,309,159);
  light=new Light(969,169,160,130);
  light1=new Light(369,167,160,130);
  
  for(var i = 0; i < dropCount; i++){

    drops[i] = new Drop();

}
}
 

function draw() {
  background(153, 217, 234);
  Engine.update(engine);
  light.display();
  light1.display();
  
  cloud3.display();
  cloud2.display();
  cloud1.display();
 
 cloud.display();
 for(var i = 0; i < drops.length; i++){

  drops[i].display();
  drops[i].fall();

}
}