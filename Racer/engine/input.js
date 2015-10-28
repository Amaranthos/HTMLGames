var mouseX;
var mouseY;

const KeyCode = {
	Crtl: 17,
	Space: 32,
	Left: 37,
	Up: 38,
	Right: 39,
	Down: 40,
	A: 65,
	D: 68,
	S: 83,
	W: 87
}

function AddListeners() {
	canvas.addEventListener('mousemove', UpdateMouse);

	document.addEventListener('keydown', KeyPressed);
	document.addEventListener('keyup', KeyReleased);

	blueCar.Controls(KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right, KeyCode.Space);
	redCar.Controls(KeyCode.W, KeyCode.S, KeyCode.A, KeyCode.D, KeyCode.Crtl);
}

function UpdateMouse(event){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = event.clientX - rect.left - root.scrollLeft;
	mouseY = event.clientY - rect.top - root.scrollTop;
}

function KeyPressed(event) {

	blueCar.KeyHeld(event, true);
	redCar.KeyHeld(event, true);

	event.preventDefault();
}

function KeyReleased(event){
	blueCar.KeyHeld(event, false);
	redCar.KeyHeld(event, false);
}