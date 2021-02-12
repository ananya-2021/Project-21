var canvas;
var music;

var box;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite(100,590,200,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,200,20);
    block2.shapeColor = "red";

    block3 = createSprite(500,590,200,20);
    block3.shapeColor = "green";

    block4 = createSprite(700,590,200,20);
    block4.shapeColor = "yellow";

    //create box sprite and give velocity

    box = createSprite(Math.round(random(20,750)),50,20,20);
    box.shapeColor = "white";
    box.setVelocity(-5,5);

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    var edges = createEdgeSprites();
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1)){
       box.bounceOff(block1);
       box.shapeColor = "blue";
       music.play();
    }

    if(box.isTouching(block2)){
        box.bounceOff(block2);
        box.shapeColor = "red";
    }

     if(box.isTouching(block3)){
        box.bounceOff(block3);
        box.shapeColor = "green";
     }

     if(box.isTouching(block4)){
        box.bounceOff(block4);
        box.shapeColor = "yellow";
        music.stop();
        box.setVelocity(0,0);
     }

    drawSprites();
}
