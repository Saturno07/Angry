const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var ground;
var fondo;
//var resortera1;
var resortera2;
var suelo;
var score=0;
var game="onSling";

var fondo1="jupiter.jpg";





function preload(){
 fondo= loadImage("bg2.jpg");
  
}
function setup(){
   
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  
  bird1=new  Bird(100,100,20)
 
  box1=new Box(800,300,60,60);
  box2= new Box(1000,300,60,60);
  pig1= new Pig(900,300,15); 
  log1=new Log(902,280,265,PI/2);
  
  
  box3=new Box(800,250,60,60);
  box4= new Box(1000,250,60,60);
  pig2=new Pig(900,250,50,50);
  log2=new Log(900,220,265,PI/2);
 
  box5=new Box(900,100,60,60);
  log3=new Log(840,50,120, PI/8);
  log4=new Log(950,50,120, PI/-8);

  //resortera1=new Log(200,200,80,PI/2);
  resortera2=new Resortera(bird1.body,{x:180,y:70});
  
  ground= new Ground(10,height,2500,20);
  
  suelo= new Ground(100,300,300,200);
  
  
  }

function draw(){
    
  background(fondo);
  
  Engine.update(engine);

  Text("Score: "+ score,800,20);
 
  getTime();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  bird1.display();
  
  pig1.display();
  pig2.display();

  pig1.score();
  pig2.score();
  
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
  //resortera1.display();
  resortera2.display();
  
  
  ground.display();
  
  suelo.display();
}


function mouseDragged(){
  
  
  //if(game!=="launched"){
    
  
  Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
  

}
  

function mouseReleased(){
  
  resortera2.fly();
  
  game="launched"
  
}

function keyPressed(){
  
  if(keyCode===82&&bird1.body.speed<1){
    resortera2.attach(bird1.body)
    bird1.matrix=[];
    Matter.Body.setPosition(bird1,{x:100,y:100})
  }
}

async function getTime(){

  var answer = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");

  var answerJSON = await answer.json();

  console.log(answerJSON.datetime);

  var datetime=answerJSON.datetime;
  
  var hour = datetime.slice(11,13);

  console.log(hour);

  if(hour>=06&&hour<=19){
    fondo1="jupiter.jpg";

  }

  else{

    fondo1="bruja.png";
  }
  fondo=loadImage(fondo1 );
}