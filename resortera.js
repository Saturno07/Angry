class Resortera{
  
  constructor(bodyA,pointB){
    
     var options={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.2,
    length:9
       
  }
     
     this.sling1=loadImage("sling1.png");
    
    this.sling2=loadImage("sling2.png");
    
    this.sling3=loadImage("sling3.png");
    
     this.pointB=pointB
    this.resortera=Constraint.create(options);
  World.add(world,this.resortera);
    
  }
  
  attach(body){
    this.resortera.bodyA=body;
  }
  
  fly(){
    
    this.resortera.bodyA=null;
  }
  
  display(){
    
    image(this.sling1,200,30);
    
    image(this.sling2,169,30);
    
    if(this.resortera.bodyA){
      
    
    var pointA=this.resortera.bodyA.position;
    var pointB=this.pointB;
    
    push();
    strokeWeight(10);
    stroke("#FFA07A")
      
    line(pointA.x-25,pointA.y,pointB.x-3,pointB.y);
    line(pointA.x+25,pointA.y,pointB.x+50,pointB.y-3);
      
    image (this.sling3,pointA.x-30,pointA.y-10,9,30);
      
     pop();
  }
  }
}