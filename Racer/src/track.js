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
	StartPos: 3
}

var grid = [2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,
			2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,
			2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,
			2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,
			1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,
			1,0,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0,1,
			1,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,1,
			1,0,3,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,1,
			1,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,1,
			1,0,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0,1,
			1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,
			2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,
			2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,
			2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,
			2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2];

var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var grassPic = document.createElement("img");

function Track() {
	LoadImg(roadPic, "img/tile_road.png");
	LoadImg(wallPic, "img/tile_wall.png");
	LoadImg(grassPic, "img/tile_grass.png");
}

function TileAt(col, row){
	return trackCols * row + col;
}

function WallAt(col, row){
	if(col >= 0 && col < trackCols && row >= 0 && row < trackRows){
		return(grid[TileAt(col, row)] == Tile.Wall);
	}
	return false;
}

function DrawGrid() {
	for(var i = 0; i < trackCols; i++){
		for(var j = 0; j < trackRows; j++){
			
			var pic;

			switch(grid[TileAt(i,j)]){
				case Tile.Road:
					pic = roadPic;
					break;

				case Tile.Wall:
					pic = wallPic;
					break;

				case Tile.Grass:
					pic = grassPic;
					break;

				default:
				break;							
			}
			DrawTile(pic, i*trackWidth, j * trackHeight);
		}
	}
}

// function CheckCarCollisionTrack(index){
// 	var col = index % trackCols;
// 	var row = Math.floor(index / trackCols);

// 	return CheckCircleIntersectRect(col * trackWidth, row * trackHeight, trackWidth - trackPaddingX, trackHeight - trackPaddingY, carPosX, carPosY, carRadius);
// }