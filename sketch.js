//Create variables here
var dog; 
var dogimage1;
var dogimage2;
var database;
var happydog;
var foodS;
var FoodStock;

function preload()
{
  //load images here

  dogimage1=loadImage("images/dogImg.png");
  dogimage2=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);

  database = firebase.database();
  dog = createSprite(300,300,20,20);
  dog.addImage(dogimage1);
  dog.scale = 0.5;

  Foodstock = database.ref('Food');
  Foodstock.on('value',readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimage2);
  }

  fill ("white")
  textSize(20);
  text("Press UP_ARROW Key To Feed Dog Milk!",100, 100);


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



