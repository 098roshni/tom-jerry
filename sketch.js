

var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
var garden;

function preload() {
    //load the images here
    
cat1 = loadImage(cat1.png);
cat2 = loadImage(cat2.png);
cat3 = loadImage(cat3.png);
cat4 = loadImage(cat4.png);

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprtie(500,400,100,50);
    cat2 = createSprtie(500,400,100,50);
    cat3 = createSprtie(500,400,100,50);
    cat4 = createSprtie(500,400,100,50);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat1.velocityX = -5;
      cat1.addAnimation ("catRunning", catImg1);
      cat1.changeAnimation("catRunning");
  }


}
