class pig{
    constructor(x,y,width,height){
        var pigOption = {
            
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1
        }   
        
         this.body = Bodies.rectangle(x,y,50,50,pigOption);
         this.width = 50;
         this.height = 50;
         World.add(world,this.body);

    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
        

    }

}