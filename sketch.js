var logs = [];
var logs1 = [];
function setup() {
  createCanvas(800,400);
  var x = 50;
  for(var i = 0; i < 6; i = i+1){
    logs.push(createSprite(x,275, 40, 50));
    logs[i].shapeColor = "yellow";
    x = x + 50;
  }
  
  x = x +100;
  
  for(var i = 6; i <13; i =i+1){
    logs.push(createSprite(x, 275, 40, 50));
    logs[i].shapeColor = "yellow";
    x = x + 50;
  }

  for(var i = 0; i <5; i =i+1){
    logs1.push(createSprite(random(10, 800), random(0, 100), random(0, 50), random(0, 100)));
    logs1[i].shapeColor = "purple";
  }

  /*for(var i = 5; i <12; i =i+1){
    logs1.push(createSprite(random(10, 800), random(100, 200), random(0, 50), random(0, 100)));
    logs1[i].shapeColor = "purple";
  }*/

 

  
  
}

function draw() {
  background("black");  
  drawSprites();
}