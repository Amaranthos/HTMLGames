function CheckCircleIntersectRect(rectX, rectY, rectW, rectH, circleX, circleY, circleRadius){
	var cX, cY;

	//Find closest point on rect
	if(circleX < rectX){
		cX = rectX;
	}
	else if(circleX > rectX + rectW){
		cX = rectX + rectW;
	}
	else {
		cX = circleX;
	}

	if(circleY < rectY){
		cY = rectY;
	}
	else if(circleY > rectY + rectH){
		cY = rectY + rectH;
	}
	else {
		cY = circleY;
	}

	// If distance to closest point is less then radius, then intersect
	if(DistanceSquared(circleX, circleY, cX, cY) < circleRadius * circleRadius){
		return true;
	}

	return false;
}