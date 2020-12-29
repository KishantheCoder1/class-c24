class log{
    constructor(x,y,height,angle){
        var logOption = {
            
            'restitution': 0.8,
            'friction': 1,
            'density': 1
        }   
        
         this.body = Bodies.rectangle(x,y,20,height,logOption);
         this.width = 20;
         this.height = height;
         Matter.Body.setAngle(this.body,angle);//wih the help of this we are setting an angle for our logs
         World.add(world,this.body);

    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
        

    }

}