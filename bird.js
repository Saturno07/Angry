class Bird extends Base { 
  
  constructor(x,y){
    super(x,y,60,60);
    this.image=loadImage("bird.png");
    this.imagesmoke=loadImage("smoke.png");
    this.matrix=[];
    
  }
 
  display(){
    
    //post.x=mouseX;
    //post.y=mouseY;
    super.display();
   
     super.display();
        if (this.body.velocity.x > 14 && this.body.position.x > 200) {
            var post = [this.body.position.x, this.body.position.y];
            this.matrix.push(post);
        }
    
    for(var B=0; B<this.matrix.length; B++){
      image(this.imagesmoke,this.matrix[B][0],this.matrix[B][1]);
    }
  
    
  }
}