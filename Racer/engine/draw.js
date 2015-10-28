function DrawCircle(x, y, r, colour){
	canvasContext.fillStyle = colour;
	canvasContext.beginPath();
	canvasContext.arc(x, y, r, 0, 2 * Math.PI, true);
	canvasContext.fill();
}

function DrawRect(x, y, w, h, colour){
	canvasContext.fillStyle = colour;
	canvasContext.fillRect(x,y,w,h);
}

function DrawText(text, textX, textY, colour){
	canvasContext.fillStyle = colour;
	canvasContext.fillText(text, textX, textY);
}