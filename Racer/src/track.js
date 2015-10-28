// Track Members
const trackWidth = 40;
const trackHeight = 40;
const trackCols = 20;
const trackRows = 15;
const trackPaddingX = 2;
const trackPaddingY = 2;

const trackColour= "blue";

const Tile = {
	Road: 0,
	Wall: 1,
	Grass: 2,
	Trees: 3,
	Flag: 4,
	StartPos: 5,
}

var ovalMap = [
				2,2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,2,3,2,2,
				2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,
				2,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,2,
				2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,
				1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,
				1,0,0,0,0,1,2,2,3,2,2,2,2,3,1,0,0,0,0,1,
				1,5,0,5,1,2,2,2,2,2,3,2,2,2,2,1,0,0,0,1,
				1,4,4,4,1,2,2,3,2,2,2,2,3,2,2,1,0,0,0,1,
				1,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,1,
				1,0,0,0,0,1,2,2,2,2,3,2,2,2,1,0,0,0,0,1,
				1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,
				2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,
				2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,
				3,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,2,
				2,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2
			];


function TileAt(col, row){
	return trackCols * row + col;
}

function TileTypeAt(col, row){
	if(col >= 0 && col < trackCols && row >= 0 && row < trackRows){
		return(currentGrid[TileAt(col, row)]);
	}
	return Tile.Wall;
}

function DrawGrid() {
	for(var i = 0; i < trackCols; i++){
		for(var j = 0; j < trackRows; j++){
			DrawImgNoRot(tileImgs[currentGrid[TileAt(i,j)]], i*trackWidth, j * trackHeight);
		}
	}
}

function LoadTile(tile, path){
	tileImgs[tile] = document.createElement("img");
	LoadImg(tileImgs[tile], path);
}