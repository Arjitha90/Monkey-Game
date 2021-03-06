var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup,Food,obstacles,jungle
var score
var gameState =" play"
var survivalTime=0
function preload(){
 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 score=0
}



function setup() {
  createCanvas(600,600)

  
  ground = createSprite(400,350,900,20)
  ground.velocityX=-4
  
  console.log(ground.x)
  

  
  FoodGroup = createGroup()
  obstaclesGroup = createGroup()
  
    monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
}


function draw() {
  background(100)
if (gameState==="play"){
  ground.x=ground.width/2
if(keyDown("space")&&monkey.y>=200){
  monkey.velocityY=-12
 
}

  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
 
  
  
  
  if(monkey.isTouching(FoodGroup)){
   score=score+1
  }
 
 if(obstaclesGroup.isTouching(monkey)){
 
  gameState="end"
 }
  
  survivalTime = createSprite(10,10,20,20)
  stroke("white")
  textSize(20)
  fill("white")
  
 stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  
  text("survival time: "+survivalTime,100,50)
}
 if (gameState==="end"){
   text("game over",200,200)
 }
    Food()
  obstacles()
  
  drawSprites()
text("score "+score,500,50)
}
   
function Food(){
  if(frameCount%80===0){
     banana = createSprite(300,250,20,20)
    banana.y=Math.round(random(120,200))
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.lifetime=100
  banana.velocityX=-2
  
FoodGroup.add(banana)  
}
}
function obstacles(){
  if(frameCount%300===0){
     obstacle=createSprite(400,320,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-1
  obstacle.scale=0.1
  obstacle.lifetime=400
obstaclesGroup.add(obstacle)
  
}
}




