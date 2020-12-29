class bird{
    constructor(x,y){
        var birdOption = {
            
            'restitution': 0.5,
            'friction': 1.1,
            'density': 1.5
        };   
        
         this.body = Bodies.rectangle(x,y,50,50,birdOption);
         this.width = 50;
         this.height = 50;
         World.add(world,this.body);

    };
    
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
        

    };

};