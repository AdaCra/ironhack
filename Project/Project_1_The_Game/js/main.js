// load classes
let backgrounds = new Background()
let player = new Player()
let traffic = new Traffic()
let blocks = new Block()
let assis = new Assistor()
let trafficArr = []
let blockArr = []
let assistorArr = []
let laneArray = [85, 195, 305, 415]
let x
let trafficPics

let bkgndSize = [600, 900] 

// oad game alssets
function preload() {
	player.preload()
	backgrounds.preload()
	traffic.preload()
	trafficPics = [
		{ src: loadImage("./assets/traffic/blueTruck.png")	},
		{ src: loadImage("./assets/traffic/greenVan.png")	},
		{ src: loadImage("./assets/traffic/redCar.png")		},
		{ src: loadImage("./assets/traffic/redTruck.png")	},
		{ src: loadImage("./assets/traffic/yellowCar.png")	},
		{ src: loadImage("./assets/obstacles/manhole.png")	},
		{ src: loadImage("./assets/obstacles/oilSpill.png")	},
		{ src: loadImage("./assets/obstacles/roadWorks.png")},
		{ src: loadImage("./assets/collectables/fuel.png")	},
		{ src: loadImage("./assets/collectables/time.png")	}
	]
}

function setup() {
	bkgndSize = [600, 900],
	createCanvas(600, 900)
}	

function draw() {
	backgrounds.draw()
	player.draw()
	// x refers to array of x values within the lane position array. The value must be 
	// drawn randomly and reflect the number of lanes present on screen
	 x = laneArray[Math.floor(Math.floor(Math.random() * 4))]
	if (backgrounds.currentBkgnd3 === backgrounds.bkgMedium) {
		x = laneArray[Math.floor(Math.floor(Math.random() * 3 + 1))]
	} else if (backgrounds.currentBkgnd3 === backgrounds.bkgHard) {
		x = laneArray[Math.floor(Math.floor(Math.random() * 2 + 1))]}
	
	// bring in cars

		if (backgrounds.speed > 5 && frameCount % 120 === 0) {
		trafficArr.push(new Traffic(x, backgrounds.speed, trafficPics))
	}
	 trafficArr.forEach(function(trafficUnit){
		trafficUnit.speed = backgrounds.speed
		trafficUnit.draw()	
		// traffic.collision(player, trafficUnit)
	});
	// bring in blocks

	if (backgrounds.speed > 10 && frameCount % 250 === 0) {
		blockArr.push(new Block(x, backgrounds.speed, trafficPics))
	}
	blockArr.forEach(function(blockUnit){
		blockUnit.speed = backgrounds.speed
		blockUnit.draw()	
		// traffic.collision(player, blockUnit)
	});
	// bring in assisstors

	if (backgrounds.speed > 10 && frameCount % 500 === 0) {
		assistorArr.push(new Assistor(x, backgrounds.speed, trafficPics))
	}
	assistorArr.forEach(function(assistUnit){
		assistUnit.speed = backgrounds.speed
		assistUnit.draw()	
		// traffic.collision(player, assistUnit)
	});
		
	

	trafficArr = trafficArr.filter(trafficUnit => trafficUnit.y < 2000)

	
    
	if (keyIsDown(LEFT_ARROW)) {
		player.goLeft()
	  }

	if (keyIsDown(RIGHT_ARROW)) {
		player.goRight()
	  }

	if (keyIsDown(UP_ARROW)) {
		backgrounds.goFast()
	  }

	  if (keyIsDown(DOWN_ARROW)) {
		backgrounds.slowDown()
	  }

	  if (keyIsDown(32)) {
		backgrounds.handBrake()
	  }
	
	}
