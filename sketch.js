var logs = [];
var logs1 = [];
var boy,boyimg,tapandbuket,tapbucket;
var gameState;
function preload() {
boyimg = loadImage("download-removebg-preview.png");
tapandbuket = loadImage("tapandbuket-.png")
}


function setup() {
  createCanvas(800,400);
  gameState = "play"
  logGroup = new Group();
  
  var x = 50;
  for(var i = 0; i < 6; i = i+1){
    var temp = createSprite(x,275, 40, 50)
    logs.push(temp);
    logGroup.add(temp)
    logs[i].shapeColor = "yellow";
    x = x + 50;
  
  }
  log2 = createSprite(80,170,30)
  logGroup.add(log2)
  log3  = createSprite(115,110,100,30)
  logGroup.add(log3)
  log4 = createSprite(615,110,100,30)
  logGroup.add(log4)
  log5 = createSprite(650,175,30)
  logGroup.add(log5)
  log6 = createSprite(370,176,450,30)
  logGroup.add(log6)
  log7 = createSprite(8,200,15,400)
  logGroup.add(log7)
  log8 = createSprite(792,200,15,400)
  logGroup.add(log8)
  log9 = createSprite(400,392,800,15)
  logGroup.add(log9)
  log10 = createSprite(148,50,5,70)
  logGroup.add(log10)
  log11 = createSprite(180,13,70,5)
  logGroup.add(log11)
  log12 = createSprite(212,50,5,70)
  logGroup.add(log12)
  log13 = createSprite(244,87,70,5)
  logGroup.add(log13)
  log14 = createSprite(280,110,5,50)
  logGroup.add(log14)
  log15 = createSprite(377,138,200,5)
  logGroup.add(log15)
  log16 = createSprite(553,55,5,70)
  logGroup.add(log16)
  log17  = createSprite(585,20,70,5)
  logGroup.add(log17)
  log18 = createSprite(618,55,5,70)
  logGroup.add(log18)
  boy = createSprite(382,328,10,10)
  boy.addImage(boyimg);
  boy.scale=(0.3)
  tapbucket = createSprite(410,49,30,30)
  tapbucket.addImage(tapandbuket);
  tapbucket.scale=(0.2)
  boy.debug=true
  boy.setCollider("rectangle",0,0,40,80);

  x = x +100;
  
  for(var i = 6; i <13; i =i+1){
    var block=createSprite(x, 275, 40, 50)
    logGroup.add(block)
    logs.push(block);
    logs[i].shapeColor = "yellow";
    x = x + 50;
  }



 

  
  
}

function draw() {
  background("black");
  fill("white"); 
  text(mouseX + ":" + mouseY, mouseX, mouseY );
  if (gameState==="play") {
    if (keyDown("W")) {
      boy.y=boy.y-10
    }else if (keyDown("S")) {
      boy.y = boy.y+10
    }else if (keyDown("A")) {
      boy.x=boy.x-10
    }else if (keyDown("D")) {
      boy.x=boy.x+10
    }
    
    drawSprites();
    if (logGroup.isTouching(boy)) {

      boy.x=382
      boy.y=328
    }

    if (boy.isTouching(tapbucket)) {
      gameState="end"
    }
  } else if (gameState==="end") {
    textSize(30)
    text("Congrats Level Completed", 200,200)
    
  }
  
  
}

