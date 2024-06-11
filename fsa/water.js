var water = [
[0,1,540,340,0.1],
[1,1,540,362,0.2],
[2,0,540,384,0.3],
[3,0,540,406,0.4],
[4,0,540,428,0.5],
[5,0,540,450,0.6],
[6,1,540,472,0.7],
[7,1,540,494,0.8],
[8,1,540,516,0.9],
[8,1,540,540,0.95],
[9,1,540,560,1.0]
];

function drawWaters() {
	for(i=0;i<water.length;i++) {
		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,0,255," + water[i][4] + ")";
		ctx.rect(water[i][2]-5, water[i][3]-5, 10, 10);
		ctx.fill();
		ctx.stroke();
	}
}

function checkWaterClicks(x, y) {
	for(i=0;i<water.length;i++) {
		if(x>water[i][2]-5 && x<water[i][2]+5 && y>water[i][3]-5 && y<water[i][3]+5) {
			createWaterDialogue(i);
		}
	}
	return -1;
}

function createWaterDialogue(index) {
	//alert("You clicked on Water " + index);
	var d_string = "<b>Water Information</b><br/><br/><b>Value: </b><span id='seed_type'>" + water[parseInt(index)][4] + "</span><br/><br/>";
	d_string += "<fieldset>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>CHANGE WATER VALUE</i><br/><b>Value: </b>";
	d_string += "<select id='water_val' name='water_val'>";
	d_string += "<option value='-1'>...</option>";
	for(i=0;i<1.05;i+=.1) {
		d_string += "<option value='" + i.toFixed(1) + "'>" + i.toFixed(1) + "</option>";
	}
	d_string += "</select>";
	d_string += "<input type='submit' value='OK' onclick='updateWaterValue(" + index + ");' /></fieldset>";
	ef = document.getElementById('exp_frame');
	ef.innerHTML = d_string;
	ef.style.left = (400) + "px";
	ef.style.top = (200) + "px";
	ef.style.visibility = "visible";
}

function updateWaterValue(index) {
	water[index][4] = document.getElementById('water_val').value;
	document.getElementById('exp_frame').style.visibility = "hidden";
}