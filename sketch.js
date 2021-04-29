const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var score = 0;
var bgColor;

function setup(){
    createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(460,350,150,10);
    ground2 = new Ground(800,250,150,10);
    mainGround = new Ground(500,495,1000,10);

    stone = new Stone();
    //create boxes
    //ground 1 layer 1
    box111 = new Box(400,325);
    box112 = new Box(420,325);
    box113 = new Box(440,325);
    box114 = new Box(460,325);
    box115 = new Box(480,325);
    box116 = new Box(500,325);
    box117 = new Box(520,325);

    //ground1 layer2
    box121 = new Box(410,280);
    box122 = new Box(430,280);
    box123 = new Box(450,280);
    box124 = new Box(470,280);
    box125 = new Box(490,280);
    box126 = new Box(510,280);

    //ground1 layer 3
    box131 = new Box(420,240);
    box132 = new Box(440,240);
    box133 = new Box(460,240);
    box134 = new Box(480,240);
    box135 = new Box(500,240);

    //ground2 layer1
    box211 = new Box(740,225);
    box212 = new Box(760,225);
    box213 = new Box(780,225);
    box214 = new Box(800,225);
    box215 = new Box(820,225);
    box216 = new Box(840,225);
    box217 = new Box(860,225);

    //ground2 layer2
    box221 = new Box(750,180);
    box222 = new Box(770,180);
    box223 = new Box(790,180);
    box224 = new Box(810,180);
    box225 = new Box(830,180);
    box226 = new Box(850,180);

    //ground2 layer3
    box231 = new Box(760,140);
    box232 = new Box(780,140);
    box233 = new Box(800,140);
    box234 = new Box(820,140);
    box235 = new Box(840,140);



    slingShot = new SlingShot(stone.body, {x:90,y:200});
    getBackground();
}

function draw(){
    if (bgColor){
        background(bgColor);
    }
    
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.. Press space for another chance",50,30);
    text("Score : " + score, 500,70);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    mainGround.display();
    
    stone.display();
    strokeWeight(4);
    fill("pink");
    box111.display();
    box111.score();
    box112.display();
    box112.score();
    box113.display();
    box113.score();
    box114.display();
    box114.score();
    box115.display();
    box115.score();
    box116.display();
    box116.score();
    box117.display();
    box117.score();

    fill("lightgreen");
    box121.display();
    box121.score();
    box122.display();
    box122.score();
    box123.display();
    box123.score();
    box124.display();
    box124.score();
    box125.display();
    box125.score();
    box126.display();
    box126.score();

    fill("orange");
    box131.display();
    box131.score();
    box132.display();
    box132.score();
    box133.display();
    box133.score();
    box134.display();
    box134.score();
    box135.display();
    box135.score();

    fill("pink");
    box211.display();
    box211.score();
    box212.display();
    box212.score();
    box213.display();
    box213.score();
    box214.display();
    box214.score();
    box215.display();
    box215.score();
    box216.display();
    box216.score();
    box217.display();
    box217.score();

    fill("lightgreen");
    box221.display();
    box221.score();
    box222.display();
    box222.score();
    box223.display();
    box223.score();
    box224.display();
    box224.score();
    box225.display();
    box225.score();
    box226.display();
    box226.score();

    fill("orange");
    box231.display();
    box231.score();
    box232.display();
    box232.score();
    box233.display();
    box233.score();
    box234.display();
    box234.score();
    box235.display();
    box235.score();


    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(stone.body);

    }
    
}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata/");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if (hour >=06 && hour <=18){
        bgColor = "lightblue";
    }
    else{
        bgColor = "darkgreen";
    }


}