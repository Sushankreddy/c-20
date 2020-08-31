var fr,mr,ball;

function setup() {
  createCanvas(1200,800);
  fr=createSprite(600,400,50,80);
fr.ShapeColour = "green";
mr=createSprite(400,200,80,30);
mr.ShapeColour = "green";
mr.debug="true";
fr.debug="true";
ball=createSprite(900,600,50,50);
ball.ShapeColour="red";

}


if(mr.x-fr.x===fr.width/2+mr.width/2){
  mr.ShapeColour = "red";
  fr.ShapeColour = "red";
}

else{
mr.ShapeColour = "green";
fr.ShapeColour = "green";

}

function draw() {
  background(0,0,0);  

console.log(mr);


  mr.x=World.mouseX;
  mr.y=World.mouseY;

  

  drawSprites();
}