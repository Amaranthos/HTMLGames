const clearColour = "black";
const fps = 30;

var canvas, canvasContext;
var tileImgs = [];

var blueCar = new Car();
var redCar = new Car();

var currentGrid;

window.onload = function() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext('2d');

	DrawLoadingScreen();

	LoadResources();	
}

function LoadResources(){
	LoadImgs();

	blueCar.name = "Blue Car";
	redCar.name = "Red Car";
}

function LoadLevel(level) {
	currentGrid = level.slice();
}

function StartGameLoop(){
	setInterval(GameLoop, 1000/fps);
	AddListeners();
	ResetLevel();
}

function GameLoop() {
	Update();
	Draw();
}

function Update() {
	blueCar.Update();
	redCar.Update();
}

function Wins(car){
	blueCar.canMove = false;
	redCar.canMove = false;

	DrawText(car.name + " wins!", canvas.width/2, canvas.height/2, "black", true);

	setTimeout(ResetLevel, 3000);
}

function Draw() {
	ClearCanvas();

	DrawGrid();
	blueCar.Draw();
	redCar.Draw();
}

function ResetLevel() {
	LoadLevel(ovalMap);
	blueCar.Reset();
	redCar.Reset();
}

function DrawLoadingScreen() {
	ClearCanvas();
	DrawText("Loading...", canvas.width/2, canvas.height/2, "white", true);

}

function ClearCanvas() {
	DrawRect(0, 0, canvas.width, canvas.height, clearColour);
}

function LoadImgs() {
	var imgSet = [
		{img: blueCar.img, path: "car_blue.png"},
		{img: redCar.img, path: "car_red.png"},

		{tile: Tile.Road, path: "tile_road.png"},
		{tile: Tile.Wall, path: "tile_wall.png"},
		{tile: Tile.Grass, path: "tile_grass.png"},
		{tile: Tile.Trees, path: "tile_trees.png"},
		{tile: Tile.Flag, path: "tile_flag.png"}
	];

	imgsRemaining = imgSet.length;

	for(var i = 0;  i < imgSet.length; i++){
		if(imgSet[i].img != undefined){
			LoadImg(imgSet[i].img, imgSet[i].path);
		} else if(imgSet[i].tile != undefined){
			LoadTile(imgSet[i].tile, imgSet[i].path);
		}
	}
}