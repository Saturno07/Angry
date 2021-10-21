class Base {
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 0.1,
            friction: 1.0,
            density: 0.8
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("base.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle= this.body.angle;
        
      push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("#E59866");
        fill("#E59866");
        image(this.image,0,0, this.width, this.height);
        pop();
        
    }
}