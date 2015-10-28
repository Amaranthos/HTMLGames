var mouseX;
var mouseY;

const KeyCode = {
	Space: 32,
	Left: 37,
	Up: 38,
	Right: 39,
	Down: 40
}

var KeyHeld = {
	Space: false,
	Left: false,
	Up: false,
	Right: false,
	Down: false
}

function AddListeners() {
	canvas.addEventListener('mousemove', UpdateMouse);

	document.addEventListener('keydown', KeyPressed);
	document.addEventListener('keyup', KeyReleased);
}

function UpdateMouse(event){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = event.clientX - rect.left - root.scrollLeft;
	mouseY = event.clientY - rect.top - root.scrollTop;
}

function KeyPressed(event) {
	if(event.keyCode == KeyCode.Left){
		KeyHeld.Left = true;
	}
	if(event.keyCode == KeyCode.Right){
		KeyHeld.Right = true;
	}
	if(event.keyCode == KeyCode.Up){
		KeyHeld.Up = true;
	}
	if(event.keyCode == KeyCode.Down){
		KeyHeld.Down = true;
	}
	if(event.keyCode == KeyCode.Space){
		KeyHeld.Space = true;
	}

	event.preventDefault();
}

function KeyReleased(event){
	if(event.keyCode == KeyCode.Left){
		KeyHeld.Left = false;
	}
	if(event.keyCode == KeyCode.Right){
		KeyHeld.Right = false;
	}
	if(event.keyCode == KeyCode.Up){
		KeyHeld.Up = false;
	}
	if(event.keyCode == KeyCode.Down){
		KeyHeld.Down = false;
	}
	if(event.keyCode == KeyCode.Space){
		KeyHeld.Space = false;
	}
}