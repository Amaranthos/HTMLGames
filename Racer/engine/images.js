var imgsRemaining = 0;

function LoadImg(img, path){
	img.onload = function(){
		imgsRemaining--;
		console.log("Image: " + path + " loaded!");

		if(imgsRemaining == 0){
			StartGameLoop();
		}
	}

	img.src = "img/" + path;
}

function DrawImg(img, dX, dY, rot){
	canvasContext.save();
	canvasContext.translate(dX, dY);
	canvasContext.rotate(rot);
	canvasContext.drawImage(img, -img.width/2, -img.height/2);
	canvasContext.restore();
}

function DrawImgNoRot(img, dX, dY){
	canvasContext.drawImage(img, dX, dY);
}