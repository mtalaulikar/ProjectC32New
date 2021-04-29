class SlingShot {
    constructor(bodyA, pointB){
        var s_options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 10

        }
        this.pointB = pointB;
        this.sling = Constraint.create(s_options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
            var bodyAPos = this.sling.bodyA.position;
            var bodyBPos = this.pointB;
            push();
            strokeWeight(3);
            stroke("Black");
            line(bodyAPos.x,bodyAPos.y, bodyBPos.x, bodyBPos.y);
            pop();
        }
    }
}