export class UI{
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';

    }
    draw(context){
         context.font = this.fontSize + 'px' + this.fontFamily;
         context.textAlign = 'left' ;
         context.fillStyle = this.game.fontColor;
         context.fillText('Press any Arrow Key to play and Enter to Roll' , 20 , 70 )
         
         context.fillText('Score: ' + this.game.score ,20,50)
         
    }
}