class Bola{
  constructor(){
  this.x=mario.x;
  this.y=mario.y;
  this.velx=10;
  this.dir=0.125;
  this.img=[];
  this.frame=0;
  for(var i=0;i<4;i++){
    this.img[i]= loadImage("bolafuego/bola_"+i+".gif");
  }
}
  mostrar(){
    push();
    translate(this.x,this.y);
    scale(this.dir,0.125);
    imageMode(CENTER);
    image(this.img[this.frame],0,0);
    pop();
    
    
  }
  derecha(){
  this.frame++;
  this.x=this.x+this.velx;
  this.dir=0.125;  
  if(this.frame>3){
      this.frame=0;
    }
  }
  izquierda(){
  this.frame++;
  this.x=this.x-this.velx;
  this.dir=-0.125;
  if(this.frame>3){
     this.frame=0;
  }
 }
}
