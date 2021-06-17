var towerIMG, tower;
var doorIMG, door, doorsGroup;
var climberIMG, climber, climbersGroup;
var ghost, ghostIMG;
var gameState = "play"

  function preload(){
   towerIMG= loadImage ("tower.png") ;
   ghostIMG = loadImage ("ghost-standing.png") ;
   towerIMG = loadImage ("tower.png")  ;
   spookysound = loadSound ("spooky.wav") ;
    doorIMG = loadImage ("door.png") ;
  }
  function setup(){
   createCanvas(600,600) ;
   tower  = createSprite (300,300) ;
tower.addImage("tower",towerIMG);
    tower.velocityY= 1 ;
   doorsGroup=new Group() ;
   climbersGroup=new Group() ; 

     ghost= createSprite (300,300) ;
      ghost.scale=0.3 ;
     ghost.addImage("ghost", ghostIMG); 
  }

  function draw () {
   background(0);
    if (gameState==="play"){
  if(keyDown("space")) {
  ghost.velocityY=-10 ;  
  } 
  if(keyDown("LEFT_ARROW")){
    ghost.x-=3 ;
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.x+=3 ;
  } 
    ghost.velocityY = ghost.velocityY + 0.8  ;
     if(tower.y > 400){
  tower.y=300  } 
   spawndoors();   
      if(doorsGroup.isTouching(ghost)||climbersGroup.isTouching(ghost)){ 
     ghost.destroy();
      gameState = "end" }      
    drawSprites () ; 
   }
    
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)   
  }  
  }    
  function spawndoors() {
   if(frameCount%240===0){
   var door=createSprite(200,-50);
  var climber=createSprite(200,10);
    door.x = Math.round(random(120,400));
     climber.x=door.x;
     
       door.addImage(doorIMG);
    climber.addImage(climberIMG);
     
     climber.velocityY=door.velocityY =1;
    door.lifetime=climber.lifetime=800; 
       doorsGroup.add(door);
     climbersGroup.add(climber);
   }    

  }



