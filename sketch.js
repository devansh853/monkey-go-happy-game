var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
//createCanvas(600,600);
  
  var survivalTime = 0;
  
  //createing monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //createing ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

 foodGroup = new Group(); 
 obstaclesGroup = new Group();
  
  score = 0;
  
}


function draw() {
  background(255);
  
  
  //to create a scrolling ground
  if(ground.x<0){
    ground.x = ground.width/2;
   }
  
  //When space key is pressed monkey should jump
 if(keyDown("space")){
   monkey.velocityY = -12;
  }
  
  //add gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
   //to make monkey collided with ground
   monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score,500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("survival time:"+ survivalTime,100,50);
  
}

function spawnFood(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(200,150,20,10);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.lifetime = 300;
    
    monkey.depth = banana.depth +1;
    
    banana.y = random(120,200);
    banana.velocityX = -4;
    
    foodGroup.add(banana);
  }
   
}

function spawnObstacles(){
  
  
  if(frameCount % 300 === 0){
     obstacle = createSprite(700,315,20,20);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.10;
     obstacle.lifetime = 300;
    
    
    obstacle.velocityX = -5;
    
    obstaclesGroup.add(obstacle);
  
  }
  
}













