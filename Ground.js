class Ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var g_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(this.x,this.y, this.width, this.height,g_options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width,this.height);
        pop();
        
    }
}