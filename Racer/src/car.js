// Car Members
const carRadius = 10;
const carColour = "white";

const carAcceleration = 0.3;
const carTurnRate = 0.05;
const carDrag = 0.96;

const carStartVelX = 0;
const carStartVelY = 5;

var carPosX; 
var carPosY;
var carRot = 0;

var carSpeed = 0;

var carPic = document.createElement("img");

function Car() {
	LoadImg(carPic,"img/car.png");
}

function UpdateCar() {
	CarMove();
	CarTrackCollision();
}

function CarMove() {
	carSpeed *= carDrag;

	if(KeyHeld.Up){
		carSpeed += carAcceleration;
	}

	if(KeyHeld.Down){
		carSpeed -= carAcceleration/2;
	}

	if(KeyHeld.Left){
		carRot -= carTurnRate;
	}

	if(KeyHeld.Right){
		carRot += carTurnRate;
	}

	if(KeyHeld.Space){
		if(carSpeed != 0.0){
			carSpeed -= Math.sign(carSpeed) * carAcceleration;
		}
	}

	carPosX += Math.cos(carRot) * carSpeed;
	carPosY += Math.sin(carRot) * carSpeed;
}

function CarTrackCollision() {
	var carCol = Math.floor(carPosX / trackWidth);
	var carRow = Math.floor(carPosY / trackHeight);

	var carTrackIndex = TileAt(carCol, carRow);
	if(WallAt(carCol, carRow)){
		carPosX -= Math.cos(carRot) * carSpeed;
		carPosY -= Math.sin(carRot) * carSpeed;

		carSpeed *= -0.5;
	}
}

function ResetCar() {
	for(var i = 0; i < trackRows; i++){
		for(var j = 0; j < trackCols; j++){
			var index = TileAt(j, i);

			if(grid[index] == Tile.StartPos){
				grid[index] = Tile.Road;

				carRot = -Math.PI/2.0;

				carPosX = j * trackWidth + trackWidth/2;
				carPosY = i * trackHeight + trackHeight/2;
			}
		}	
	}
}

function DrawCar() {
	DrawImg(carPic, carPosX, carPosY, carRot);
}