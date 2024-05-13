class Particle{
    constructor(game){
  this.game = game;
  this.markedaForDeletion = false;

    }
update(){
    this.x -= this.speedX + this.game.speed;
    this.y -= this.speedY;
    this.size *= 0.95;
    if(this.size < 0.5) this.markedaForDeletion = true;
}

}

export class Dust extends Particle {
 constructor(game, x , y){
  super(game);
  this.size = Math.random() * 5 + 10;
  this.x = x;
  this.y = y;
  this.speedX = Math.random();
  this.speedY = Math.random();
  this.color = 'rgba(150,0,50,0.2)'

 }
 draw(context){
  context.beginPath();
  context.arc(this.x , this.y , this.size , 0 , Math.PI * 2);
  context.fillStyle = this.color;
  context.fill()
 }
}

export class Splash extends Particle {
  constructor(game, x , y ){
    super(game)
    this.size = Math.random() * 100 + 100 ;
    this.x = x -  this.size * 0.5;
    this.y = y -  this.size * 0.5;
    this.speedX = Math.random() * 6 - 4; 
    this.speedY = Math.random() * 2 + 1;
    this.gravity = 0;
    this.image = fire;
    }
    update (){
      super.update();
      this.gravity += 0.1;
      this.y += this.gravity;
    }
    draw(context){
      context.drawImage(this.image, this.x , this.y , this.size, this.size)
    }

}

export class Fire extends Particle {
constructor(game, x , y ){
super(game)
this.image = fire ; 
this.size = Math.random() * 100 + 50 ;
this.x = x;
this.y = y;
this.speedX = 1; 
this.speedY = 1;
}
update(){
  super.update();
}
draw(context){
  context.drawImage(this.image, this.x , this.y , this.size, this.size)
}
}