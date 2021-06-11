var lazer,lazerImage
var npc,npcImage
var pc,pcImage
var spaceImage
var aliengroup
var lazergroup
var alienNumber = 0

function preload() {
  spaceImage = loadImage("images/space.jpeg")
  pcImage = loadImage("images/pc.png")
  npcImage = loadImage("images/npc.png")
  lazerImage = loadImage("images/lazer.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 // createSprite(400, 200, 50, 50);
 pc = createSprite(windowWidth/2 , windowHeight - 60)
 pc.addImage("player",pcImage)
 pc.scale = 0.3


 aliengroup = new Group()
 lazergroup = new Group()
 enemy();
}



function draw() {
  background(spaceImage);  
  

  if(keyDown(LEFT_ARROW)) {
   pc.x = pc.x -10
  }

  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x +10
  }

  if(keyWentDown("space")){
  lazer = createSprite (pc.x, pc.y - 20)  
  lazer.addImage ("lazer",lazerImage ) 
  lazer.velocityY= -10
  lazer.scale = 0.2
  lazer.lifetime = height/lazer.velocityY
  lazergroup.add(lazer)
 }
console.log(aliengroup.length)
 if(frameCount%200== 0) {
  alienNumber = Math.round(random(0,aliengroup.length - 1))
  console.log(alienNumber)
 }
 
 if(aliengroup[alienNumber]&&pc.y - aliengroup[alienNumber].y>150 ){
 aliengroup[alienNumber].pointTo(pc.x,pc.y)
 aliengroup[alienNumber].rotation +=360
 aliengroup[alienNumber].setSpeedAndDirection(6, aliengroup[alienNumber].rotation - 90)
   
 }
  drawSprites();

  
}


function enemy() {
  for(var i = 50; i<windowWidth - 40;i = i+180) {
   var alien = createSprite( i, 55)
   alien.addImage("enemy",npcImage)
   alien.scale = 0.3
   aliengroup.add(alien) 
   
  }
}
