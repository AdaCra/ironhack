class Traffic {
    constructor(xValue, bkgSpeed, trafficPics) {
    this.randomIndex = (Math.floor(Math.random() * 5))
    this.y = -400
    this.width = 100
    this.height = 250
    this.trafficPics = trafficPics
    this.obstacleGroup = [{
        name: "blueTruck",
        speed: 12,
        width: 95,
        height: 225       },
        {name: "greenVan",
        speed: 20,
        width: 90,
        height: 202       },
        {name: "redCar",
        speed: 12,
        width: 25,
        height: 153       },
        {name: "redTruck",
        speed: 15,
        width: 100,
        height: 224       },
        {name: "yellowCar",
        speed: 18,
        width: 80,
        height: 158       },
        { oname: "manhole",
        speed: 0,
        width: 95,
        height: 170       }, 
        {name: "oilSpill", 
        speed: 0,
        width: 80,
        height: 40       },
        {name: "roadWorks",
        speed: 0,
        width: 95,
        height: 230       },
        {name: "fuel",
        speed: 30,
        width: 95,
        height: 170        },
        {name: "sec10",
        speed: 30,
        width: 95,
        height: 170        }
    ]   
    this.bkdSpeed = bkgSpeed
    this.xValue = xValue
    this.width = 100
    this.height = 250
    this.speed = 0
    this.randomcar = this.obstacleGroup[this.randomIndex]
    }

    preload() {}

    draw(){
        this.y += this.speed - this.obstacleGroup[this.randomIndex].speed
        image(this.trafficPics[this.randomIndex].src, this.xValue, this.y, this.width, this.height)
    }

    // collision(playerInfo, trafficArr) {

    //     let obstacleX = object.x + (this.width / 2)
    //     let obstacleY = this.y + (this.height / 2)

    //     let playerX = playerInfo.x + (playerInfo.width / 2)
    //     let playerY = playerInfo.y + (playerInfo.height / 2)

    //     if ((obstacleX + playerX) < (35 + (this.randomcar.width /2))
    //     && dist(obstacleY + playerY) < (76 + (this.randomcar.height /2)))
    //     {             
    //         console.log("collision")
    //         return true
    //     } else {
    //         return false
    //     }
    // }
}


class Block {
    constructor(xValue, bkgSpeed, trafficPics) {
    this.randomIndex = Math.floor(Math.floor(Math.random() * (8 - 5)) + 5)
    this.y = -400
    this.width = 100
    this.height = 250
    this.trafficPics = trafficPics
    this.obstacleGroup = [{
        name: "blueTruck",
        speed: 12,
        width: 95,
        height: 225       },
        {name: "greenVan",
        speed: 20,
        width: 90,
        height: 202       },
        {name: "redCar",
        speed: 12,
        width: 25,
        height: 153       },
        {name: "redTruck",
        speed: 15,
        width: 100,
        height: 224       },
        {name: "yellowCar",
        speed: 18,
        width: 80,
        height: 158       },
        { oname: "manhole",
        speed: 0,
        width: 95,
        height: 170       }, 
        {name: "oilSpill", 
        speed: 0,
        width: 80,
        height: 40       },
        {name: "roadWorks",
        speed: 0,
        width: 95,
        height: 230       },
        {name: "fuel",
        speed: 30,
        width: 95,
        height: 170        },
        {name: "sec10",
        speed: 30,
        width: 95,
        height: 170        }
    ]
    this.bkdSpeed = bkgSpeed
    this.xValue = xValue
    this.width = 100
    this.height = 250
    this.speed = 0
    }

    preload() {}

    draw(){
        // console.log(this.trafficPics)
        // clear()

        this.y += this.speed - this.obstacleGroup[this.randomIndex].speed
        image(this.trafficPics[this.randomIndex].src, this.xValue, this.y, this.width, this.height)
        console.log (this.speed, this.obstacleGroup[this.randomIndex].speed)
    
    }
}

class Assistor {
    constructor(xValue, bkgSpeed, trafficPics) {
    this.randomIndex = (Math.floor(Math.floor(Math.random() * (10 - 8)) + 8))
    this.y = -400
    this.width = 100
    this.height = 250
    this.trafficPics = trafficPics
    this.obstacleGroup = [{
        name: "blueTruck",
        speed: 12,
        width: 95,
        height: 225       },
        {name: "greenVan",
        speed: 20,
        width: 90,
        height: 202       },
        {name: "redCar",
        speed: 12,
        width: 25,
        height: 153       },
        {name: "redTruck",
        speed: 15,
        width: 100,
        height: 224       },
        {name: "yellowCar",
        speed: 18,
        width: 80,
        height: 158       },
        { oname: "manhole",
        speed: 0,
        width: 95,
        height: 170       }, 
        {name: "oilSpill", 
        speed: 0,
        width: 80,
        height: 40       },
        {name: "roadWorks",
        speed: 0,
        width: 95,
        height: 230       },
        {name: "fuel",
        speed: 30,
        width: 95,
        height: 170        },
        {name: "sec10",
        speed: 30,
        width: 95,
        height: 170        }
    ]   
    this.bkdSpeed = bkgSpeed
    this.xValue = xValue
    this.width = 100
    this.height = 250
    this.speed = 0
    }

    preload() {}

    draw(){
        // console.log(this.trafficPics)
        // clear()

        this.y += this.speed - this.obstacleGroup[this.randomIndex].speed
        image(this.trafficPics[this.randomIndex].src, this.xValue, this.y, this.width, this.height)
        console.log (this.speed, this.obstacleGroup[this.randomIndex].speed)
    
    }
}
