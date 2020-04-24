var mario
var goomba=[]
var bola
var bolas=[]
function setup() {
  createCanvas(400, 400);
  frameRate(24);
  mario= new Mario();
  bola= new Bola();
  for (var j = 0; j < 30; j++) {
    goomba[j] = new Goomba();
  }
}

function draw() {
  background(220);
  mario.mostrar();

for (j= 0; j < goomba.length; j++){
    goomba[j].mostrar();
    if(key=='a' && keyIsPressed){
    goomba[j].izquierda();
  }
  if(key=='d' && keyIsPressed){
    goomba[j].derecha();
  }
  if(key=='w' && keyIsPressed){
    goomba[j].arriba();
  }
  if(key=='s' && keyIsPressed){
    goomba[j].abajo();
  } 
}
  if(key=='l' && keyIsPressed){
    mario.derecha();
  }
  if(key=='j' && keyIsPressed){
    mario.izquierda();
  }
  if(key=='i' && keyIsPressed){
    mario.arriba();
  }
  if(key=='k' && keyIsPressed){
    mario.abajo();
  }
  
  //for(var i=0;i<bolas.length;i++){
    if(key=='b'){
      //bola= new Bola(mario.x,mario.y);
     // bolas.push(bola);
      mario.disparar();
 // }
 }
}
