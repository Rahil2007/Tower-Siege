class Block{
    constructor(x, y, width, height) {
        var options = {
          density: 0.2            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
        this.visiblity=255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        strokeWeight(2);
        stroke(15);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();


       

        if(this.body.speed<3){
          fill(131, 205, 234)
          imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y,30,40)
        }else {
          World.remove(world,this.body);
          push();
          tint(255,this.visiblity);
          imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y,30,40);
          this.visiblity=this.visiblity-10;        
          pop();    
        }
      }
}
