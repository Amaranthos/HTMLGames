function Car() {
	this.acceleration = 0.3;
	this.turnRate = 0.05;
	this.drag = 0.96;
	this.minTurnSpeed = 0.4;

	this.posX = 0; 
	this.posY = 0;
	this.rot = 0;
	this.speed = 0;

	this.img = document.createElement("img");

	this.name = "car";

	this.canMove = true;

	this.KeyHeld = {
		Accelerate: false,
		Reverse: false,
		Brake: false,
		TurnLeft: false,
		TurnRIght: false
	}

	this.KeyCode = {};

	this.Car = function(name){
		this.name = name;
	}

	this.Controls = function(up, down, left, right, brake){
		this.KeyCode = {
			Accelerate: up,
			Reverse: down,
			TurnLeft: left,
			TurnRight: right,
			Brake: brake
		}
	}

	this.KeyHeld = function(event, isHeld){
		if(this.canMove){
			if(event.keyCode == this.KeyCode.TurnLeft){
				this.KeyHeld.TurnLeft = isHeld;
			}
			if(event.keyCode == this.KeyCode.TurnRight){
				this.KeyHeld.TurnRight = isHeld;
			}
			if(event.keyCode ==this.KeyCode.Accelerate){
				this.KeyHeld.Accelerate = isHeld;
			}
			if(event.keyCode == this.KeyCode.Reverse){
				this.KeyHeld.Reverse = isHeld;
			}
			if(event.keyCode == this.KeyCode.Brake){
				this.KeyHeld.Brake = isHeld;
			}
		}
	}

	this.Update = function() {
		this.Move();
		this.TileIntersect();
	}

	this.Move = function() {	
		this.speed *= this.drag;

		if(this.KeyHeld.Accelerate){
			this.speed += this.acceleration;
		}

		if(this.KeyHeld.Reverse){
			this.speed -= this.acceleration/2;
		}

		if(Math.abs(this.speed) > this.minTurnSpeed){
			if(this.KeyHeld.TurnLeft){
				this.rot -= this.turnRate;
			}

			if(this.KeyHeld.TurnRight){
				this.rot += this.turnRate;
			}
		}

		if(this.KeyHeld.Brake){
			if(this.speed != 0.0){
				this.speed -= Math.sign(this.speed) * this.acceleration;
			}
		}

		this.posX += Math.cos(this.rot) * this.speed;
		this.posY += Math.sin(this.rot) * this.speed;
	}

	this.TileIntersect = function() {
		var col = Math.floor(this.posX / trackWidth);
		var row = Math.floor(this.posY / trackHeight);

		var tile = TileTypeAt(col, row);

		switch(tile){
			case 0:
				break;

			case 1:
				this.Collide();
				break;

			case 2:
				break;

			case 3:
				this.Collide();
				break;

			case 4:
				this.Lap();

			default:
				break;
		}
	}

	this.Collide = function() {
		this.posX -= Math.cos(this.rot) * this.speed;
		this.posY -= Math.sin(this.rot) * this.speed;

		this.speed *= -0.5;
	}

	this.Lap = function() {
		if(this.speed == 0.0 || !this.canMove){
			return;
		}

		while(this.rot< 0){
			this.rot += 2 * Math.PI;
		}

		var dir = this.rot;
		if(this.speed < 0){
			dir += Math.PI;
		}
		dir = Math.abs(dir) % (2 * Math.PI);

		(dir < Math.PI)? this.Collide():Wins(this);
	}

	this.Reset = function() {
		this.canMove = true;

		for(var i = 0; i < trackRows; i++){
			for(var j = 0; j < trackCols; j++){
				var index = TileAt(j, i);

				if(currentGrid[index] == Tile.StartPos){
					currentGrid[index] = Tile.Road;

					this.rot = -Math.PI/2.0;

					this.posX = j * trackWidth + trackWidth/2;
					this.posY = i * trackHeight + trackHeight/2;

					return;
				}
			}	
		}
	}

	this.Draw = function() {
		DrawImg(this.img, this.posX, this.posY, this.rot);
	}
}