class Enemy{
    constructor(){
      this.frameX = 0;
      this.frameY = 0;
      this.fps = 20;
      this.frameInterval = 1000/this.fps;
      this.frameTimer = 0;
    }
    
    update(){

    }
    draw(){

    }
}

class Flying extends Enemy{

}

class Ground extends Enemy{

}

class ClimbingEnemy extends Enemy{
    
}