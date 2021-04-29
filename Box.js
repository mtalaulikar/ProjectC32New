class Box{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 40;
        var g_options = {
            restitution : 0.1,
            density : 1,
            friction : 2
            
        }
        this.body = Bodies.rectangle(this.x,this.y, this.width, this.height,g_options);
        this.image = loadImage("images/d2.png");
        this.visibility = 255;
        World.add(world,this.body);

    }

    score(){
        if(this.visibility < 0 && this.visibility >-105){
            score ++;
        }
    }

    display(){
        
            var pos = this.body.position;
            if(this.body.speed < 3){
                imageMode(CENTER);
                image(this.image,pos.x, pos.y, this.width,this.height);
            }
            else {
                World.remove(world,this.body);
                push();
                this.visibility = this.visibility - 5;
                tint(255,this.visibility);
                image(this.image,pos.x,pos.y,this.width,this.height);
                pop();
            }     
    }
}