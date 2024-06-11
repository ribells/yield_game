var light = [
[0,1,40,330,0.1],
[1,1,90,330,0.2],
[2,1,140,330,0.3],
[3,1,194,330,0.4],
[4,1,250,330,0.5],
[5,1,300,330,0.6],
[6,0,350,330,0.7],
[7,0,404,330,0.8],
[8,0,460,330,0.9],
[9,0,510,330,1.0]
];

function drawLights() {
	for(i=0;i<light.length;i++) {
		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		if (light[i][1]==0) {
			ctx.fillStyle = "rgba(255,255,0," + light[i][4] + ")";
		} else {
			ctx.fillStyle = "rgba(255,128,0," + light[i][4] + ")";
		}
		ctx.arc(light[i][2],light[i][3],5,0,2*Math.PI);
		ctx.fill();
		ctx.stroke();
	}
}

function checkLightClicks(x, y) {
	for(i=0;i<light.length;i++) {
		if(x>light[i][2]-5 && x<light[i][2]+5 && y>light[i][3]-5 && y<light[i][3]+5) {
			createLightDialogue(i);
		}
	}
	return -1;
}

function createLightDialogue(index) {
	//alert("You clicked on Light " + index);
	var d_string = "<b>Light Information</b><br/><br/><b>Value: </b><span id='seed_type'>" + light[parseInt(index)][4] + "</span><br/><br/>";
	d_string += "<fieldset>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>CHANGE LIGHT VALUE</i><br/><b>Value: </b>";
	d_string += "<select id='light_val' name='light_val'>";
	d_string += "<option value='-1'>...</option>";
	for(i=0;i<1.05;i+=.1) {
		d_string += "<option value='" + i.toFixed(1) + "'>" + i.toFixed(1) + "</option>";
	}
	d_string += "</select>";
	d_string += "<input type='submit' value='OK' onclick='updateLightValue(" + index + ");' /></fieldset>";
	ef = document.getElementById('exp_frame');
	ef.innerHTML = d_string;
	ef.style.left = (400) + "px";
	ef.style.top = (200) + "px";
	ef.style.visibility = "visible";
}

function updateLightValue(index) {
	light[index][4] = document.getElementById('light_val').value;
	document.getElementById('exp_frame').style.visibility = "hidden";
}