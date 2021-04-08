var ball;
var mazeGroup;
var enemy1;
var keysCollected=0;

function preload(){
    key1=loadImage("key-removebg-preview.png")
    ghost1=loadImage("op.png")
    
}

function setup(){
    createCanvas(800,600);
    edges=createEdgeSprites();
    mazeGroup=new Group();
    ball = createSprite(100,400,10,20);
    log1=createSprite(120,350,20,450)
    log2=createSprite(100,50,500,20)
    log3=createSprite(590,50,400,20)
    log4=createSprite(370,150,480,20)
    log5=createSprite(625,257,20,300)
    log6=createSprite(340,500,200,20)
    log7=createSprite(460,490,20,300)
    log8=createSprite(330,340,300,20)
    log9=createSprite(450,100,20,70)
    log10=createSprite(710,393,150,20)
    enemy1=createSprite(300,80,20,20)
    enemy2=createSprite(700,290,20,20)
    enemy3=createSprite(530,388,20,20)
    enemy4=createSprite(397,235)
    enemy5=createSprite(357,235)
    enemy6=createSprite(327,235)
    enemy1.velocityX=3
    enemy2.velocityX=4
    enemy3.velocityX=4
    enemy4.velocityY=4
    enemy5.velocityY=6
    enemy6.velocityY=7
    key=createSprite(360,90)
    keyA=createSprite(712,337)
    keyB=createSprite(530,368)
    key.addImage(key1)
    keyA.addImage(key1)
    keyB.addImage(key1)
    enemy1.addImage(ghost1)
    enemy2.addImage(ghost1)
    enemy3.addImage(ghost1)
    enemy4.addImage(ghost1)
    enemy5.addImage(ghost1)
    enemy6.addImage(ghost1)
    key.scale=0.08;
    keyA.scale=0.08
    keyB.scale=0.08
   // key.debug=true
    ball.shapeColor = "green";
    log1.shapeColor= "red";
    log2.shapeColor= "violet";
    log3.shapeColor= "blue";
    log4.shapeColor= "white";
    log5.shapeColor= "brown";
    log6.shapeColor= "yellow";
    log7.shapeColor= "orange";
    log9.shapeColor="pink"
    log10.shapeColor="white"
    mazeGroup.add(log1);
    mazeGroup.add(log2)
    mazeGroup.add(log3)
    mazeGroup.add(log4)
    mazeGroup.add(log5)
    mazeGroup.add(log6)
    mazeGroup.add(log7)
    mazeGroup.add(log8)
    mazeGroup.add(log9)
    mazeGroup.add(log10)
    enemy1.scale=0.5
    enemy2.scale=0.3
    enemy3.scale=0.3
    enemy4.scale=0.3
    enemy5.scale=0.3
    enemy6.scale=0.3
}

function draw(){
    background("black");
    fill("white")
    text(mouseX+","+mouseY,mouseX,mouseY)
    text("keys Collected: "+keysCollected,690,35 )

    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }


    // if (ball.isTouching(key)) {
    //     key.destroy();
    //     keysCollected++
    // }
    // if (ball.isTouching(keyA)) {
    //     keyA.destroy();
    //     keysCollected++
    // }
    // if (ball.isTouching(keyB)) {
    //     keyB.destroy();
    //     keysCollected++
    // }
    enemy1.bounceOff(mazeGroup)
    enemy1.bounceOff(edges)
    enemy2.bounceOff(edges)
    enemy3.bounceOff(edges)
    enemy2.bounceOff(mazeGroup)
    enemy3.bounceOff(mazeGroup)
    enemy4.bounceOff(mazeGroup)
    enemy5.bounceOff(mazeGroup)
    enemy6.bounceOff(mazeGroup)
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
