class Background { 
    constructor() {
        this.bkgEasy;
        this.bkgE2M;
        this.bkgMedium;
        this.bkgM2H;
        this.bkgHard;
        this.currentBkgnd1 = this.bkgEasy
        this.currentBkgnd2 = this.bkgEasy
        this.currentBkgnd3 = this.bkgEasy
        this.x = 0;
        this.y = 0;
        this.setCounter = 0;
        this.viewSize = [600, 900]
        this.lanePositions = [85, 195, 305, 415]
        this.speed = 0
        this.speedometer = 0
    }
    
    preload() {
        this.currentBkgnd1  = loadImage("./assets/background/roadLanesX4.png");
        this.currentBkgnd2  = loadImage("./assets/background/roadLanesX4.png");
        this.currentBkgnd3  = loadImage("./assets/background/roadLanesX4.png");
        this.bkgEasy 	    = loadImage("./assets/background/roadLanesX4.png");
        this.bkgE2M 	    = loadImage("./assets/background/roadLanes4To3.png");
        this.bkgMedium      = loadImage("./assets/background/roadLanesX3.png");
        this.bkgM2H 	    = loadImage("./assets/background/roadLanes3To2.png");
        this.bkgHard 	    = loadImage("./assets/background/roadLanesX2.png")
    }

    draw() {
        clear() 

        this.speedometer = this.speed * 5

        this.y += this.speed
        image(this.currentBkgnd1, 0, this.y, width, height)
        image(this.currentBkgnd2, 0, this.y - this.currentBkgnd2.height, width, height) // second image
        image(this.currentBkgnd3, 0, this.y - (this.currentBkgnd2.height*2), width, height)	// third image
       

        if (this.y >= height*2) {
                this.y = 0;
                this.setCounter ++;
            }
            if (this.setCounter === 30){
                this.currentBkgnd2 = this.bkgE2M
                this.currentBkgnd3 = this.bkgMedium
            }
            if (this.setCounter === 31){
                this.currentBkgnd1 = this.bkgMedium
                this.currentBkgnd2 = this.bkgMedium
                this.currentBkgnd3 = this.bkgMedium
            }
            if (this.setCounter === 41){
                this.currentBkgnd2 = this.bkgM2H
                this.currentBkgnd3 = this.bkgHard
            }
            if (this.setCounter === 42){
                this.currentBkgnd1 = this.bkgHard
                this.currentBkgnd2 = this.bkgHard
                this.currentBkgnd3 = this.bkgHard
            }

    }

    goFast(){
        if(this.speed <= 36){
        this.speed += 0.1    
        }
    }
    slowDown(){
        if(this.speed > 0){
            this.speed -= 0.3   
            }
            if (this.speed < 0) {
                this.speed = 0
            }
    }

    handBrake(){
        if(this.speed > 0){
            this.speed -= 0.5   
            }
            if (this.speed < 0) {
                this.speed = 0
            }
    }
}