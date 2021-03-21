var logs = [];
var logs1 = [];
var boy,boyimg,tapandbuket,tapbucket;
var gameState;
function preload() {
boyimg = loadImage("download-removebg-preview.png");
tapandbuket = loadImage("tapandbuket-.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  gameState = "play"
  logGroup = new Group();
  
  var x = 50;
  for(var i = 0; i < 6; i = i+1){
    var temp = createSprite(x,height - 200, 40, 50)
    logs.push(temp);
    logGroup.add(temp)
    logs[i].shapeColor = "yellow";
    x = x + 50;
  
  }
  log2 = createSprite(280,190,30)
  logGroup.add(log2)
  log3  = createSprite(315,130,100,30)
  logGroup.add(log3)
  log4 = createSprite(865,110,100,30)
  logGroup.add(log4)
  log5 = createSprite(900,175,30)
  logGroup.add(log5)
  log6 = createSprite(600,176,450,30)
  logGroup.add(log6)
  log7 = createSprite(10,height/2,15,height)
  logGroup.add(log7)
  log8 = createSprite(width-10,height/2,15,height)
  logGroup.add(log8)
  log9 = createSprite(width/2,height-10,width,15)
  logGroup.add(log9)
  log10 = createSprite(269,55,5,70)
  logGroup.add(log10)
  log11 = createSprite(302,20,70,5)
  logGroup.add(log11)
  log12 = createSprite(334,55,5,70)
  logGroup.add(log12)
  log13 = createSprite(367,89,70,5)
  logGroup.add(log13)
  log14 = createSprite(400,115,5,50)
  logGroup.add(log14)
  log15 = createSprite(500,138,200,5)
  logGroup.add(log15)
  log16 = createSprite(735,55,5,70)
  logGroup.add(log16)
  log17  = createSprite(767,20,70,5)
  logGroup.add(log17)
  log18 = createSprite(800,55,5,70)
  logGroup.add(log18)
  boy = createSprite(382,height - 150,10,10)
  boy.addImage(boyimg);
  boy.scale=(0.3)
  tapbucket = createSprite(580,82,30,30)
  tapbucket.addImage(tapandbuket);
  tapbucket.scale=(0.2)
  boy.debug=true
  boy.setCollider("rectangle",0,0,40,80);

  x = x +100;
  var i = 6
  while (x<width- 50) { 
    var block=createSprite(x, height-200, 40, 50)
    logGroup.add(block)
    logs.push(block);
    logs[i].shapeColor = "yellow";
    x = x + 50;
    i=i+1
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
      boy.y=height - 150;
    }

    if (boy.isTouching(tapbucket)) {
      gameState="end"
    }
  } else if (gameState==="end") {
    textSize(30)
    text("Congrats Level Completed", windowWidth/2,windowHeight/2)
    
  }
  
  
}

