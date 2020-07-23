//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;
function preload()
{
  //load images here
  dog=loadImage("images/doglmg.png");
  happyDog=loadImage("images/doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
   dog=createSprite(250,350,20,20);
   dog.addImage(doglmg.png)
foodStock=database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(doglmg1);
  }
dog.display();
  drawSprites();
  //add styles here

}
function readStock(data) {
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}

