class Goomba{
  constructor(){
  this.x=random(width);
  this.y=random(height);
  this.velx=10;
  this.dir=0.25;
  this.img=[];
  this.frame=0;
  for(var i=0;i<2;i++){
    this.img[i]= loadImage("goomba/goomba_"+i+".gif");
  }
}
  mostrar(){
    push();
    translate(this.x,this.y);
    scale(this.dir,0.25);
    imageMode(CENTER);
    image(this.img[this.frame],0,0);
    pop();
    
    
  }
  derecha(){
  this.frame++;
  this.x=this.x+this.velx;
  this.dir=0.25;  
  if(this.frame>1){
      this.frame=0;
    }
  }
  izquierda(){
  this.frame++;
  this.x=this.x-this.velx;
  this.dir=0.25;
  if(this.frame>1){
     this.frame=0;
  }
 }
  arriba(){
  this.frame++;
    this.y=this.y-this.velx;
    this.dir=0.25;
    if(this.frame>1){
        this.frame=0;
    }
  }
  abajo(){
  this.frame++;
    this.y=this.y+this.velx;
    this.dir=0.25;
    if(this.frame>1){
        this.frame=0;
    }
  }
  morir(){
  
  }
}
