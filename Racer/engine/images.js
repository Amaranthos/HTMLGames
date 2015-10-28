var imgsRemaining = 0;

function LoadImgs() {
	LoadImg(carPic,"img/car.png");
	LoadImg(roadPic, "img/tile_road.png");
	LoadImg(wallPic, "img/tile_wall.png");
	LoadImg(grassPic, "img/tile_grass.png");
}

function LoadImg(img, path){
	imgsRemaining++;

	img.onload = function(){
		imgsRemaining--;
		console.log("Image: " + path + " loaded!");

		if(imgsRemaining == 0){
			StartGameLoop();
		}
	}

	img.src = path;
}

function DrawImg(img, dX, dY, rot){
	canvasContext.save();
	canvasContext.translate(dX, dY);
	canvasContext.rotate(rot);
	canvasContext.drawImage(img, -img.width/2, -img.height/2);
	canvasContext.restore();
}

function DrawTile(img, dX, dY){
	canvasContext.drawImage(img, dX, dY);
}