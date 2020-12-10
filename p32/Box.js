class Box
{
    constructor(x, y, width, height)
    {
        var options = {
            restitution :0.4,
            friction :0.0,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

        this.visible = 255;
    }

    score()
    {
      if(this.visible<0 && this.visible>-105)
      {
        score++;
      }
    }

    display()
    {
      if(this.body.speed < 3)  
      {
      var angle = this.body.angle;
      var pos= this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else
      {
        World.remove(world, this.body);
     
        push();
        this.visible = this.visible - 5;
        tint(255, this.visible);
        pop();
      }
    }
}
