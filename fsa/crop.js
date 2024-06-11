function Crop(data) {
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
	
	this.drawCrop = function(canvas) {
		var canvas=document.getElementById(canvas);
		var context=canvas.getContext('2d');
		for(i=20000;i<data.length;i++) {
			context.beginPath();
			if (seed[(data[i][3])][0] == 0) {
				context.fillStyle = "rgba(160,255,0,0.5)";
			} else if (seed[(data[i][3])][0] == 1) {
				context.fillStyle = "rgba(50,80,25,0.5)";
			} else if (seed[(data[i][3])][0] == 2) {
				context.fillStyle = "rgba(20,255,20,0.5)";
			} else if (seed[(data[i][3])][0] == 3) {
				context.fillStyle = "rgba(0,255,60,0.5)";
			} else if (seed[(data[i][3])][0] == 4) {
				context.fillStyle = "rgba(0,255,160,0.5)";
			}
			context.beginPath();
      		context.rect(data[i][1] * 8 + 640, data[i][2] * 6 + 90, 8, 6);
      		context.fill();
      		context.lineWidth = 1;
      		context.strokeStyle = 'black';
      		//context.stroke();
		}
	}
}

redrawACrop = function(which, value, day) {
	//alert(crops[which][3]);
	var canvas=document.getElementById('mycanvas');
	var context=canvas.getContext('2d');
	context.beginPath();
	if (value == 0) {
		context.fillStyle = "rgba(160,255,0," + crops[which][5]/seed[(crops[which][4])][2] + ")";
	} else if (value == 1) {
		context.fillStyle = "rgba(50,80,25," + crops[which][5]/seed[(crops[which][4])][2] + ")";
	} else if (value == 2) {
		context.fillStyle = "rgba(20,255,20," + crops[which][5]/seed[(crops[which][4])][2] + ")";
	} else if (value == 3) {
		context.fillStyle = "rgba(0,255,60," + crops[which][5]/seed[(crops[which][4])][2] + ")";
	} else if (value == 4) {
		context.fillStyle = "rgba(0,255,160," + crops[which][5]/seed[(crops[which][4])][2] + ")";
	}
	if (crops[which][5]<1.5) {
		context.fillStyle = "rgb(255,255,255)";
	}
	context.beginPath();
	//alert("" + (crops[which][1] + 460) + ", " + (crops[which][2] + 60));
    context.rect(crops[which][1] + 592, crops[which][2] + 59, 5, 5);
	context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    //context.stroke();
}

plantCrops = function(lat, lon, x_seq, y_seq, value) {
	var which = -1;
	var next = -1;
	for(i=0;i<crops.length;i++) {
		if(crops[i][2]==lat && crops[i][1]==lon) {
			which=crops[i][0];
		}
	}
	if(which==-1) {
		//Plant a new plot - new farmer?
		crops.push([crops.length, lon, lat, 0, value, 0, 0, 0]);
		x_seq=1;
		y_seq=1;
		which=crops.length-1;
	}
	for(i=parseInt(which); i<(parseInt(which)+parseInt(y_seq)); i++) {
		for(j=0; j<(parseInt(x_seq)); j++) {
			next=-1;
			for(k=0;k<crops.length;k++) {
				if(crops[k][2]==lat && crops[k][1]==lon) {
					next=crops[k][0];
				}
			}
			//alert("i1: " + i + " seq " + seq);
			if(next >=0) {
				crops[next][3] = parseInt(value);
				crops[next][5] = 0;
				redrawACrop(next, parseInt(value), -1);
				//alert("i2: " + i + " seq " + seq);
			}
			lon=lon+6;
		}
		lon=lon-(6*x_seq);
		lat=lat+6;
	}
}
