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
  log2 = createSprite(100,180,30)
  log3  = createSprite(135,120,100,30)
  log4 = createSprite(600,120,100,30)
  log5 = createSprite(635,180,30)
  log6 = createSprite(370,176,450,30)
  log7 = createSprite(8,200,15,400)
  log8 = createSprite(792,200,15,400)
  log9 = createSprite(400,392,800,15)
  log10 = createSprite(148,50,5,70)
  log11 = createSprite(180,13,70,5)
  log12 = createSprite(212,50,5,70)
  log13 = createSprite(244,87,70,5)
  log14 = createSprite(280,110,5,50)
  log15 = createSprite(377,138,200,5)
  log16 = createSprite(553,55,5,70)
  x = x +100;
  
  for(var i = 6; i <13; i =i+1){
    logs.push(createSprite(x, 275, 40, 50));
    logs[i].shapeColor = "yellow";
    x = x + 50;
  }



 

  
  
}

function draw() {
  background("black");
  fill("white"); 
  text(mouseX + ":" + mouseY, mouseX, mouseY ); 
  drawSprites();
}