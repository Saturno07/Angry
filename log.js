class Log extends Base{
  
    constructor(x,y,height,angle){
      
      super(x,y,10,height,angle);
        
      this.image=loadImage("wood2.png");
      
      Matter.Body.setAngle (this.body, angle);         
      
    }

    
}