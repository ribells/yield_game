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
      		context.lineWidth = 3;
      		context.fillStyle = 'black';
      		//context.stroke();
      		var img=document.getElementById("rice");
			if(seed[experiments[i][3]][0]==1) {
				img=document.getElementById("corn");
			} else if(seed[experiments[i][3]][0]==2) {
				img=document.getElementById("root");
			} else if(seed[experiments[i][3]][0]==3) {
				img=document.getElementById("wheat");
			} else if(seed[experiments[i][3]][0]==4) {
				img=document.getElementById("vegetable");
			}
			var x_offset=1;
			var y_offset=5;
			if(experiments[i][1]==1) {
				x_offset=30; y_offset=23;
			} else if(experiments[i][1]==2) {
				x_offset=15; y_offset=32;
			} else if(experiments[i][1]==3) {
				x_offset=1; y_offset=23;
			} else if(experiments[i][1]==5) {
				x_offset=29; y_offset=5;
			}
			context.strokeStyle = 'black';
			context.font = "10px Arial";
			if(Math.floor(data[i][0]%8)%2==0) {
				context.drawImage(img, Math.floor(data[i][0]/8) * 40 + 114, Math.floor(data[i][0]%8 * 33.6) + 30, 30, 30);
				context.arc(Math.floor(data[i][0]/8) * 40 + 114 + x_offset, Math.floor(data[i][0]%8 * 33.6) + 30 + y_offset,2,0,2*Math.PI);
				context.fillText("" + data[i][2], Math.floor(data[i][0]/8) * 40 + 125, Math.floor(data[i][0]%8 * 33.6) + 33);
			} else {
				context.drawImage(img, Math.floor(data[i][0]/8) * 40 + 134, Math.floor(data[i][0]%8 * 33.6) + 30, 30, 30);
				context.arc(Math.floor(data[i][0]/8) * 40 + 134 + x_offset, Math.floor(data[i][0]%8 * 33.6) + 30 + y_offset,2,0,2*Math.PI);
				context.fillText("" + data[i][2], Math.floor(data[i][0]/8) * 40 + 145, Math.floor(data[i][0]%8 * 33.6) + 33);
			}
			context.fill();
			context.stroke();
		}
	}
}

redrawALab = function(which, value) {
	var canvas=document.getElementById('mycanvas');
	var context=canvas.getContext('2d');
	context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    //context.stroke();
    //alert("NEW CROP ID:" + seed[experiments[which][3]][0]);
    var img=document.getElementById("rice");
	if(seed[experiments[which][3]][0]==1) {
		img=document.getElementById("corn");
	} else if(seed[experiments[which][3]][0]==2) {
		img=document.getElementById("root");
	} else if(seed[experiments[which][3]][0]==3) {
		img=document.getElementById("wheat");
	} else if(seed[experiments[which][3]][0]==4) {
		img=document.getElementById("vegetable");
	}
	var x_offset=1;
	var y_offset=5;
	if(experiments[which][1]==1) {
		x_offset=30; y_offset=23;
	} else if(experiments[which][1]==2) {
		x_offset=15; y_offset=32;
	} else if(experiments[which][1]==3) {
		x_offset=1; y_offset=23;
	} else if(experiments[which][1]==5) {
		x_offset=29; y_offset=5;
	}
	context.strokeStyle = 'black';
	context.font = "10px Arial";
	if(Math.floor(which%8)%2==0) {
		context.drawImage(document.getElementById("hive"), Math.floor(which/8) * 40 + 108, Math.floor(which%8 * 33.6) + 22, 44, 49);
		context.drawImage(img, Math.floor(which/8) * 40 + 114, Math.floor(which%8 * 33.6) + 30, 30, 30);
		context.arc(Math.floor(which/8) * 40 + 114 + x_offset, Math.floor(which%8 * 33.6) + 30 + y_offset,2,0,2*Math.PI);
		context.fillText("" + seed[experiments[which][3]][0], Math.floor(which/8) * 40 + 125, Math.floor(which%8 * 33.6) + 33);
	} else {
		context.drawImage(document.getElementById("hive"), Math.floor(which/8) * 40 + 128, Math.floor(which%8 * 33.6) + 22, 44, 49);
		context.drawImage(img, Math.floor(which/8) * 40 + 134, Math.floor(which%8 * 33.6) + 30, 30, 30);
		context.arc(Math.floor(which/8) * 40 + 134 + x_offset, Math.floor(which%8 * 33.6) + 30 + y_offset,2,0,2*Math.PI);
		context.fillText("" + seed[experiments[which][3]][0], Math.floor(which/8) * 40 + 135, Math.floor(which%8 * 33.6) + 33);
	}
}

getLabX = function(index) {
	return (Math.floor(index/6) * 30 + 30);
}

getLabY = function(index) {
	return (index%6 * 20 + 12);
}