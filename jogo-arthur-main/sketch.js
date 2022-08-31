var ground, xseria, p5duros, tiro
function preload(){
  mine = loadImage('chao4.png');
  desx = loadImage('xduro.png');
  ps5 = loadImage('p5duro.png');
  pilha = loadImage('tirox.png');
  plus = loadImage('tirop5.webp');
  fundo = loadImage('espaco.jpg');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  // chão
  ground = createSprite(800,579,480,180)
  ground.addImage(mine)
  ground.scale = 4.3

  // x-box
  xseria = createSprite(300,474,80,80);
  xseria.scale = 0.8;
  xseria.addImage(desx);

  // ps5
  p5duros = createSprite(1000,488,80,80);
  p5duros.addImage(ps5);
  p5duros.scale = 0.55;
}


function draw() {
     image(fundo,0,0,width,height);
     showLife();
     showLife2()
  //pontuação
     fill("gold");
     textSize(20);
     text("PONTUAÇÃO: ", 120,80);

  // posição do mouse
     text(mouseX+","+mouseY, mouseX,mouseY);
  
  //título
     textFont("Snap ITC")
     textSize(50)
     text("MultIVersus",width/2-200,100)
  
  //movimento do xbox
      if(keyIsDown(RIGHT_ARROW)){
        xseria.x += 5;
      }

      if(keyIsDown(LEFT_ARROW)){
          xseria.x -= 5;
      }
  
  // tiro ps5

      if (keyWentDown('space')){
        tiro = createSprite(240,148,5,10);
        tiro.addImage (pilha);
        tiro.scale = 0.15;
        tiro.lifetime = 70;
        tiro.velocityX = 10;
        tiro.x = xseria.x;
        tiro.y = xseria.y;
      }
             
      drawSprites();
      tirops5();
}

  //tiro ps5
function tirops5(){
    if(frameCount%60===0){
      
      tiro2 = createSprite(240,148,5,10);
      tiro2.addImage (plus);
      tiro2.scale = 0.08;
      tiro2.lifetime = 100;
      tiro2.velocityX = -9;
      tiro2.x = p5duros.x;
      tiro2.y = p5duros.y;
  }
}

function showLife() {
  push();
  fill("white");
  rect(width / 2 - 100, height - 670, 185, 20);
  fill("#f50057");
  rect(width / 2 - 100, height - 670, 185, 20);
  noStroke();
  pop();
}

function showLife2() {
  push();
  fill("white");
  rect(width / 2 - 400, height - 670, 185, 20);
  fill("#f50057");
  rect(width / 2 - 400, height - 670, 185, 20);
  noStroke();
  pop();
}