class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,//friction ki vjh se objects ke beech me takrav aarha tha jiske vjh se objects ground se slide off nhi hue ek particular distance pe jake ruk gaye
          'density':1.0//density ka mtlb hota h vazan, taki object gir jaye zada bounce krke na gire 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);//do objects jab b kisi angle pe takrate he to unka y and x position pe hi takrav hota he that's why humne translate me unka x and y leliya
      rotate(angle);//or us takrav ke beech ek angle banta he, ye command uske liye he
      rectMode(CENTER);
     //adding boundary to your box or object
      stroke("brown");
      strokeWeight(5);//adding thickness in your boundary
      fill("white");//completely fills that object
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  