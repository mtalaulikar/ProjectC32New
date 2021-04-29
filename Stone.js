class Stone{
    constructor(x,y){
        this.x = 100;
        this.y = 200;
        this.radius = 20;
        var g_options = {
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.image = loadImage("images/polygon.png");
        this.body = Bodies.circle(this.x,this.y, this.radius, g_options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        image(this.image,0,0,30,30);
        pop();
        
    }
}