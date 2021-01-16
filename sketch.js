const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var umbrella;

var drops=[];

var maxDrops = 100;

var thun1, thun2, thun3, thun4, man;

var rand;

var thunder;

function preload(){
    thun1 = loadImage('images/thunderbolt/1.png');
    thun2 = loadImage('images/thunderbolt/2.png');
    thun3 = loadImage('images/thunderbolt/3.png');
    thun4 = loadImage('images/thunderbolt/4.png');

    man = loadImage('images/Walking Frame/walking_1.png');
}

function setup(){
   createCanvas(800, 800);

   engine = Engine.create();
    world = engine.world;

    
    umbrella = new Umbrella(width/2, height/2);
    
}

function draw(){

    background(0);

    Engine.update(engine);

    rand = Math.round(random(1, 4));

    if(frameCount%50===0){
    for(var i=0; i<maxDrops; i++){
        
        drops.push(new Drop(random(0, 800), random(0, -400)));
        
      
        }
    }

    for(var k=0; k<drops.length; k++){
        drops[k].update();
        drops[k].display();
    
      }

   
    imageMode(CENTER);
      image(man, width/2, height/2+100, 700, 701);
      if(frameCount%200===0){
      if(rand===1){
          thunder = image(thun1, width/2+120, height/2);
          
      }

      if(rand===2){
        thunder = image(thun2, width/2-100, height/2);
        
    }

    if(rand===3){
        thunder = image(thun3, width/2-120, height/2);
        
    }

    if(rand===4){
        thunder = image(thun4, width/2+130, height/2);
        
    }
    }

    
    
    
}   

