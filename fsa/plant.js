function Plant(data) {
	// members
	this.data = data;
	//initialization

	//methods
	this.convertLatToPixel = function(lat) {
		return 960 - Math.round((lat - 21.9) * 60.0);
	}

	this.convertLonToPixel = function(lon) {
		return Math.round((lon + 155.0) * 24.0) - 480;
	}

	this.distance = function(x0,x1,y0,y1) {
		return (Math.sqrt((x0-x1)*(x0-x1) + (y0-y1)*(y0-y1)));
	}
	
	this.drawPlant = function(canvas) {
		var canvas=document.getElementById(canvas);
		var context=canvas.getContext('2d');
		for(i=200000;i<data.length;i++) {
			context.beginPath();
			if (seed[(data[i][1])][0] == 0) {
				context.fillStyle = "rgb(255,0,0)";
			} else if (seed[(data[i][1])][0] == 1) {
				context.fillStyle = "rgb(0,255,0)";
			} else if (seed[(data[i][1])][0] == 2) {
				context.fillStyle = "rgb(0,0,255)";
			} else if (seed[(data[i][1])][0] == 3) {
				context.fillStyle = "rgb(255,255,0)";
			} else if (seed[(data[i][1])][0] == 4) {
				context.fillStyle = "rgb(120,20,120)";
			}
			context.beginPath();
			if (data[i][0]%60 < 50) {
      		context.rect(Math.floor(data[i][0]/60) * 6 + 12, data[i][0]%60 * 6 + 246, 5, 5);
      			context.fill();
      			context.lineWidth = 1;
      		}
      		//context.strokeStyle = 'black';
      		//context.stroke();
		}
	}
}

redrawAPlant = function(which, value, day) {
	//alert(plants[which][3]);
	var canvas=document.getElementById('mycanvas');
	var context=canvas.getContext('2d');
	context.beginPath();
	if (value == 0) {
		context.fillStyle = "rgba(160,255,0," + plants[which][3]/100 + ")";
	} else if (value == 1) {
		context.fillStyle = "rgba(60,255,0," + plants[which][3]/100 + ")";
	} else if (value == 2) {
		context.fillStyle = "rgba(20,255,20," + plants[which][3]/100 + ")";
	} else if (value == 3) {
		context.fillStyle = "rgba(0,255,60," + plants[which][3]/100 + ")";
	} else if (value == 4) {
		context.fillStyle = "rgba(0,255,160," + plants[which][3]/100 + ")";
	}
	if (plants[which][3]<1.5) {
		context.fillStyle = "rgb(255,255,255)";
	}
	context.beginPath();
	var h_spacing = Math.floor(Math.floor(which/36)/10)*16;
	var v_spacing = Math.floor(Math.floor(which%60)/6)*3.2;
    context.rect(Math.floor(which/60) * 6 + 15 + h_spacing, which%60 * 3 + 336 + v_spacing, 5, 3);
	context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    //context.stroke();
}

seedPlants = function(which, x_seq, y_seq, value) {
	for(i=parseInt(which); i<(parseInt(which)+parseInt(y_seq)); i++) {
		for(j=0; j<(parseInt(x_seq)); j++) {
			//alert("" + plants[parseInt(which)][1]);
			plants[i+(60*j)][1] = parseInt(value);
			plants[i+(60*j)][3] = 0;
			redrawAPlant(i+(60*j), parseInt(value), -1);
		}
	}
}


