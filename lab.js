function Lab(data) {
	// members
	this.data = data;
	//initialization

	//methods
	this.distance = function(x0,x1,y0,y1) {
		return (Math.sqrt((x0-x1)*(x0-x1) + (y0-y1)*(y0-y1)));
	}
	
	this.drawLab = function(canvas) {
		var canvas=document.getElementById(canvas);
		var context=canvas.getContext('2d');
		for(i=0;i<data.length;i++) {
			context.beginPath();
			if (data[i][1] < 1.5) {
				context.fillStyle = "rgb(255,0,0)";
			} else if (data[i][1] < 2.5) {
				context.fillStyle = "rgb(0,255,0)";
			} else if (data[i][1] < 3.5) {
				context.fillStyle = "rgb(0,0,255)";
			} else if (data[i][1] < 4.5) {
				context.fillStyle = "rgb(255,255,0)";
			} else {
				context.fillStyle = "rgb(120,20,120)";
			}
			context.beginPath();
      		context.rect(Math.floor(data[i][0]/6) * 30 + 30, data[i][0]%6 * 20 + 12, 20, 12);
      		context.fill();
      		context.lineWidth = 3;
      		context.strokeStyle = 'black';
      		context.stroke();
		}
	}
}

redrawALab = function(which, value) {
	var canvas=document.getElementById('mycanvas');
	var context=canvas.getContext('2d');
	context.beginPath();
	if (value < 1.5) {
		context.fillStyle = "rgb(255,0,0)";
	} else if (value < 2.5) {
		context.fillStyle = "rgb(0,255,0)";
	} else if (value < 3.5) {
		context.fillStyle = "rgb(0,0,255)";
	} else if (value < 4.5) {
		context.fillStyle = "rgb(255,255,0)";
	} else {
		context.fillStyle = "rgb(120,20,120)";
	}
	context.beginPath();
	context.rect(Math.floor(which/6) * 30 + 30, which%6 * 20 + 12, 20, 12);
	context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.stroke();
}

getLabX = function(index) {
	return (Math.floor(index/6) * 30 + 30);
}

getLabY = function(index) {
	return (index%6 * 20 + 12);
}


