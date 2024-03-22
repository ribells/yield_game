function Game(image, data, name) {
	// members
	this.image = image;
	this.data = data;
	this.name = name;
	//initialization
	//methods
	this.getData = function() {
		return data;
	}
}

var day = 0;
var month = 0;
var avg_growth = 0.0;
var prev_growth = 20.0;
var population = 1.0;

function startGame() {
	for(i=0;i<experiments.length;i++) {
		experiments[i][4] = Math.floor(Math.random()*30 + 20);
		for(j=3;j<14;j++) {
			seed[experiments[i][2]][j]+=Math.random()*0.1-0.05;
		}
	}
	setTimeout(function(){timeStep()}, 100);
}

function timeStep() {
	avg_growth = 0.0;
	for(i=0;i<plants.length-2;i++) {
		plants[i][3]++;
		if(plants[i][3] > (seed[(plants[i][1])][2] + 2)) { //Two days to replant
			plants[i][3]=0;
		}
		avg_growth+=plants[i][3];
		redrawAPlant(i, seed[(plants[i][1])][0], day);
	}
	for(i=0;i<crops.length;i++) {
		crops[i][5]++;
		//alert(seed[(crops[i][4])][2]);
		if(crops[i][5] > (seed[(crops[i][4])][2] + 2)) { //Two days to replant
			crops[i][5]=0;
		}
		redrawACrop(i, crops[i][3], day);
	}
	avg_growth/=plants.length-2;
	//alert(day);
	day++;
	if(day%30 == 0) {
		//day=0;
		month++;
		calculateGrowth();
		//drawGraphs(month);
	}
	performExperiments();
	drawGraphs(day);
	setTimeout(function(){timeStep()}, 1000);
}

function drawGraphs(month) {
	  var canvas = document.getElementById('mycanvas');
      var context = canvas.getContext('2d');
      drawSeeds();
      /*
      //Draw Population
      context.strokeStyle = "#a00000";
      context.beginPath();
      context.moveTo(100 + (month-1)*6, 800 - population);
      population = population * (1 + Math.random()*.10);
      context.lineTo(100 + month*6, 800 - population);
      context.stroke();
      //Draw Yield
      context.strokeStyle = "#000000";
      context.beginPath();
      context.moveTo(100 + (month-1)*6, 640 + prev_growth);
      prev_growth = avg_growth + Math.random()*50;
      context.lineTo(100 + month*6, 640 + prev_growth);
      context.stroke();
      //Draw Experiments
      for(i=0;i<max_id.length;i++) {
      	  context.strokeStyle = "#0000" + i + "0";
      	  context.beginPath();
      	  context.moveTo(100, 600 + i*10);
      	  context.lineTo(100 + max_id[i], 600 + i*10);
      	  context.stroke();
      }
      */  
}

function drawSeeds() {
	var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    var h_spacing = 0;
    var v_spacing = 0;
    context.fillStyle = "rgba(124,106,88,1.0)";
	context.rect(12, 610, 1440, 400);
	context.fill();
    for(i=0; i<seed.length; i++) {
    	if (seed[i][0] == 0) {
			context.fillStyle = "rgba(160,255,0,1.0)";
		} else if (seed[i][0] == 1) {
			context.fillStyle = "rgba(60,255,0,1.0)";
		} else if (seed[i][0] == 2) {
			context.fillStyle = "rgba(20,255,20,1.0)";
		} else if (seed[i][0] == 3) {
			context.fillStyle = "rgba(0,255,60,1.0)";
		} else if (seed[i][0] == 4) {
			context.fillStyle = "rgba(0,255,160,1.0)";
		}
		var width=Math.floor(264.0/(max_id[seed[i][0]]+1));
		var total_value=seed[i][3]*3;
		for(j=4;j<14;j++) {
			total_value += seed[i][j];
		}
		context.beginPath();
	    context.rect(Math.floor(seed[i][0]*264.0) + seed[i][1] * width + 40 + h_spacing, 626, 4, 4);
		context.fill();
		context.fillStyle = "rgba(0,0,0,1.0)";
		context.font = "10px Arial";
		context.fillText("" + seed[i][1], Math.floor(seed[i][0]*264.0) + seed[i][1] * width + 40 + h_spacing, 640);
		//context.fillText("" + total_value.toFixed(1), Math.floor(seed[i][0]*264.0) + seed[i][1] * width + 40 + h_spacing, 654);
		context.fillText("" + seed[i][14], Math.floor(seed[i][0]*264.0) + seed[i][1] * width + 40 + h_spacing, 654);
		var y_start=664;
		for(j=4;j<14;j++) {
			context.beginPath();
			if(j%2==0) {
				context.fillStyle = "rgba(255,255,255,1.0)";
			} else {
				context.fillStyle = "rgba(0,0,0,1.0)";
			}
			context.rect(Math.floor(seed[i][0]*264.0) + seed[i][1] * width + 40 + h_spacing, y_start, 4, Math.floor(160.0*seed[i][j]/total_value));
			y_start=y_start+Math.floor(160.0*seed[i][j]/total_value);
			context.fill();
		}
		context.beginPath();
		context.fillStyle = "rgba(160,160,160,1.0)";
		context.rect(Math.floor(seed[i][0]*264.0) + seed[i][1] * width + 40 + h_spacing, y_start, 4, Math.floor(300.0*seed[i][3]));
		context.fill();
	}
}

function calculateGrowth() {
	var tot_yield = 0.0;
	for (i=0; i<crops.length; i++) {
		tot_yield += seed[0][3];
	}
	//alert(tot_yield);
}

function performExperiments() {
	for(i=0;i<experiments.length;i++) {
		if(experiments[i][1]==1) {
			//update seed data
			if(day%experiments[i][4]==0) {
				for(j=4;j<14;j++) {
					seed[experiments[i][2]][j]+=Math.random()*0.1-0.05;
					if(seed[experiments[i][2]][j]<0.0) {
						seed[experiments[i][2]][j]=0.0;
					}
				}
				seed[experiments[i][2]][14]++;
				experiments[i][4] = Math.floor(Math.random()*30 + 20);
			}
		} else if(experiments[i][1]==2) {
			//update seed data
			if(day%experiments[i][4]==0) {
				max_id[seed[experiments[i][2]][0]]++;
				seed.push([seed[experiments[i][2]][0],max_id[seed[experiments[i][2]][0]],70,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0]);
				for(j=3;j<14;j++) {
					seed[seed.length-1][j]+=Math.random()*0.1-0.05;
					if(seed[seed.length-1][j]<0.0) {
						seed[seed.length-1][j]=0.0;
					}
				}
				experiments[i][4] = Math.floor(Math.random()*30 + 20);
			}
		}
	}
	//alert(max_id[0] + max_id[1] + max_id[2] + max_id[3] + max_id[4]);
}

