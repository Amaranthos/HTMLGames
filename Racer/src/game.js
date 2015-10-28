const clearColour = "black";
const fps = 30;

var canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext('2d');

	LoadResources();	
}

function LoadResources(){
	LoadImgs();
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
	UpdateCar();
}

function Draw() {
	ClearCanvas();

	DrawGrid();
	DrawCar();

	DrawMouseCoords();
}

function ResetLevel() {
	ResetCar();
}

function ClearCanvas() {
	DrawRect(0, 0, canvas.width, canvas.height, clearColour);
}