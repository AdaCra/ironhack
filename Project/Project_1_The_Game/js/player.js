class Player {
    constructor () {
        
        this.playerType1;
        this.playerType2;
        this.playerType3;
        this.playerType4;
        this.height = 160
        this.width = 100
        this.y = 900 - (this.height + 50)
        this.x = backgrounds.lanePositions[2]
        this.turn = 7.5
        this.randomcar = (Math.floor(Math.random() * 4 + 1))
    }


    preload() {
       
        this.playerType1    = loadImage("./assets/player/carType1.png");
	    this.playerType2    = loadImage("./assets/player/carType2.png");
        this.playerType3    = loadImage("./assets/player/carType3.png");
        this.playerType4    = loadImage("./assets/player/carType4.png");
    }

    setup() {
    }

    draw()  {
        if (this.randomcar === 1){
            image(this.playerType1, this.x, this.y, this.width, this.height);
        } else if (this.randomcar === 2){ 
            image(this.playerType2, this.x, this.y, this.width, this.height);
        } else if (this.randomcar === 3){ 
            image(this.playerType3, this.x, this.y, this.width, this.height);
        } else { image(this.playerType4, this.x, this.y, this.width, this.height);  }



    }

    goLeft(){
        this.x -= this.turn
    }

    goRight(){
        this.x += this.turn
    }
}