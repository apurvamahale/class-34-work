class Ball{
    constructor(x,y,radius){
        var options={
            frictionAir: 0.005,
            density:1     
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
       }
       display(){
           var pos = this.body.position;
          // push();
          //translate(pos.x,pos.y)
           //rotate(angle);

          // rectMode(CENTER);
           stroke("green");
           circle(pos.x,pos.y,this.radius);
          // pop();
       }
}