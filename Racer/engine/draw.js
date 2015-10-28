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

function DrawText(text, textX, textY, colour, centered){
	canvasContext.fillStyle = colour;
	canvasContext.fillText(text, textX - ((centered)? canvasContext.measureText(text).width/2:0), textY);
}