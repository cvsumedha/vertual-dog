var dogs,dogimg;
var database,position;

function preload(){
dogimg=loadImage("dog.jpg");
}




function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    
    dogs= createSprite(250,250,10,10);
    dogs.addImage("dog image",dogimg);
    dogs.scale=0.1;
    
    var location=database.ref('ball/position');
    location.on("value",readop,error);
}

function draw(){
    background("light blue");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
  database.ref('dog/position').set({     
'x':position.x+x,
'y':position.y+y

  })

}

function readop(data){
position=data.val();
dogs.x=position.x;
dogs.y=position.y;
}

function error(){
    console.log("error in writting to the database");
}



