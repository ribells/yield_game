var seed = [ 
	//major, minor, gestation, yield, drought, flood, p1, p2, p3, p4, d1, d2, d3, d4, experience, use, stopped, 
	[0,0,130,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0], //rice
	[1,0,100,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0], //corn
	[2,0,220,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0], //root
	[3,0,30,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],  //wheat
	[4,0,70,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],  //vegetable
	[0,1,130,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[1,1,100,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[2,1,220,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[3,1,30,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[4,1,70,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[0,2,130,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[1,2,100,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[2,2,220,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[3,2,30,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[4,2,70,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[0,3,130,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[1,3,100,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[2,3,220,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[3,3,30,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0],
	[4,3,70,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,.1,0,0,0,0]
];

var max_id = [3,3,3,3,3];

function createLevelDialogue() {
	var ef = document.getElementById('exp_frame');
	var d_string = "<div style='background:white;padding:20px;position:relative;left:-30px;top:5px'><b>Choose Level of Play:</b><br/><select id='choice' onchange='chooseLevel();'><option value='-1'>...</option><option value='labs'>Beginner</option>";
	d_string += "<option value='labs'>Intermediate</option><option value='labs'>Expert</option></select></div>";
	ef.innerHTML = d_string;
	document.getElementById('choice').value = "-1";
	ef.style.left = (40) + "px";
	ef.style.top = (15) + "px";
	ef.style.visibility = "visible";
}

function createLabDialogue(which_exp) {
	var type="None";
	if(experiments[which_exp][1]=="1") {
		type="Intraspecies";
	} else if(experiments[which_exp][1]=="2") {
		type="Interspecies";
	} else if(experiments[which_exp][1]=="3") {
		type="Seed Filter";
	} else if(experiments[which_exp][1]=="4") {
		type="Genetic Mod";
	} else if(experiments[which_exp][1]=="5") {
		type="Mutation";
	}
	var crop="Rice";
	if(seed[experiments[which_exp][3]][0]==1) {
		crop="Corn";
	} else if(seed[experiments[which_exp][3]][0]==2) {
		crop="Carrot";
	} else if(seed[experiments[which_exp][3]][0]==3) {
		crop="Wheat";
	} else if(seed[experiments[which_exp][3]][0]==4) {
		crop="Cabbage";
	}
	var d_string = '<div style="background:transparent;background-image:url(images/experiment.png);width:350px;height:265px;position:relative;left:-60px;top:-60px"><div style="background:transparent;position:relative;top:60px;left:140px"><b>Current: </b><span id="seed_type">' + type + '</span><br/><b>Type: </b><span id="plant1">' + crop + '</span><br/><b>Seed 1 ID: </b><span id="plant1">' + seed[experiments[parseInt(which_exp)][1]][0] + '</span><br/><b>Seed 2 ID: </b><span id="plant2">' + seed[experiments[parseInt(which_exp)][2]][0] + '</span><br/><br/>';
	d_string += '&nbsp;<br/><i>UPDATE EXPERIMENT</i><br/><b>Method: </b><select id="lab_exp" name="lab_exp"><option value="-1">...</option><option value="1">Intraspecies</option><option value="2">Interspecies</option><option value="3">Seed Filter</option><option value="4">Genetic Mod</option><option value="5">Mutation</option></select><br/>';
	d_string += "<b>Crop: </b><select id='seed_exp' name='seed_exp' onchange='fillSeeds(2)'><option value='-1'>...</option><option value='0'>Rice</option><option value='1'>Corn</option><option value='2'>Carrot</option><option value='3'>Wheat</option><option value='4'>Cabbage</option><select>";
	d_string += "<br/><b>Seed 1:</b><select id='seed_det' name='seed_det'>";
	d_string += "<option value='-1'>...</option>";
	d_string += "</select>";	
	d_string += "<b>Seed 2:</b><select id='seed_det2' name='seed_det2'>";
	d_string += "<option value='-1'>...</option>";
	d_string += "</select><br/>";	
	d_string += '<input type="submit" value="OK" onclick="chooseExperiment();" /></div></div>';
	return d_string;
}

function createSeedDialogue(which_plant) {
	var type = "Rice";
	if(seed[plants[which_plant][1]][0]==1) {
		type = "Corn";
	} else if(seed[plants[which_plant][1]][0]==2) {
		type = "Carrot";
	} else if(seed[plants[which_plant][1]][0]==3) {
		type = "Wheat";
	} else if(seed[plants[which_plant][1]][0]==4) {
		type = "Cabbage";
	}
	var light_val = light[Math.floor(parseInt(which_plant)/360)][4];
	var soil_val = getSoilName(soil[Math.floor(parseInt(which_plant)/360)][4]);
	var offset = Math.floor((parseInt(which_plant)%60)/6);
	var water_val = water[offset][4];
	var d_string = '<div style="background:transparent;background-image:url(images/bed.png);width:350px;height:400px;position:relative;left:0px;top:0px"><div style="background:transparent;position:relative;top:20px;left:130px"><br/><br/><b>Location: </b><span id="seed_type">' + which_plant + '</span><br/><b>Type: </b><span id="seed_id">' + type + '</span><br/><b>Seed ID: </b><span id="seed_type">' + seed[plants[which_plant][1]][1] + '</span><br/><b>Light: </b><span id="water">' + light_val + '</span><br/><b>Water: </b><span id="water">' + water_val + '</span><br/><b>Soil: </b><span id="water">' + soil_val + '</span>&nbsp;&nbsp;<input type="button" value="Get" onclick="getGardenBeds();" /><br/>';
	d_string += "<div style='float:none'><canvas id='bcanvas' width='300' height='140' style='position:relative;background-color:transparent;display:block'></canvas></div>";
	d_string += "<div style='float:none'><i>PLANT NEW SEED</i><br/><b>Seed: </b>";
	d_string += "<select id='seed_exp' name='seed_exp' onchange='fillSeeds(1)'><option value='-1'>...</option><option value='0'>Rice</option><option value='1'>Corn</option><option value='2'>Carrot</option><option value='3'>Wheat</option><option value='4'>Cabbage</option><select>";
	d_string += "<select id='seed_det' name='seed_det'>";
	d_string += "<option value='-1'>...</option>";
	d_string += "</select><br/><b>#x: </b><input id='x_count' style='height:10px;font-size:10px;width:20px' value='1' /><b>#y: </b><input id='y_count' style='height:10px;font-size:10px;width:20px' value='1' />";
	d_string += "<input type='submit' value='OK' onclick='updatePlants();' /></div></div></div>";
	return d_string;
}

function createCropDialogue(which_lat, which_lon) {
	var which_crop=-1;
	var seed_id = -1;
	for(i=0;i<crops.length;i++) {
		if(crops[i][2]==which_lat && crops[i][1]==which_lon) {
			which_crop=crops[i][0];
		}
	}
	if(which_crop < 0) {
		type = "No crop";
		seed_id = "None";
	} else {
		var type = "Rice";
		if(seed[crops[which_crop][4]][0]==1) {
			type = "Corn";
		} else if(seed[crops[which_crop][4]][0]==2) {
			type = "Carrot";
		} else if(seed[crops[which_crop][4]][0]==3) {
			type = "Wheat";
		} else if(seed[crops[which_crop][4]][0]==4) {
			type = "Cabbage";
		}
		seed_id = seed[crops[which_crop][4]][1];
	}
	var d_string = '<div style="background:transparent;background-image:url(images/field.png);width:320px;height:265px;position:relative;left:0px;top:0px"><div style="background:transparent;position:relative;top:50px;left:30px"><b>Latitude: </b><span id="seed_type">' + which_lat + '</span><br/><b>Longitude: </b><span id="seed_type2">' + which_lon + '</span><br/><b>Elevation: </b><span id="elevation">' + dem[which_lat*668+which_lon] + ' meters</span><br/><b>Slope: </b><span id="slope">' + getDEMSlope(which_lat,which_lon) + '</span><br/><b>Type: </b><span id="seed_type">' + type + '</span><br/><b>Seed ID: </b><span id="seed_id">' + seed_id + '</span><br/><br/>';
	d_string += '&nbsp;<br/><i>PLANT NEW SEED</i><br/><b>Seed: </b>';
	d_string += "<select id='seed_exp' name='seed_exp' onchange='fillSeeds(1)'><option value='-1'>...</option><option value='0'>Rice</option><option value='1'>Corn</option><option value='2'>Carrot</option><option value='3'>Wheat</option><option value='4'>Cabbage</option><select>";
	d_string += "<select id='seed_det' name='seed_det'>";
	d_string += "<option value='-1'>...</option>";
	d_string += "</select><br/><b>#x: </b><input id='x_count' style='height:10px;font-size:10px;width:20px' value='1' /><b>#y: </b><input id='y_count' style='height:10px;font-size:10px;width:20px' value='1' />";
	d_string += "<input type='submit' value='OK' onclick='updateCrops();' /></div></div>";
	return d_string;
}

function chooseLevel() {
	//TO BE CODED
	document.getElementById('exp_frame').style.visibility="hidden";
}

function fillSeeds(count) {
	choices_str = "<option value='-1'>...</option>";
	for(i=0;i<seed.length;i++) {
		if(seed[i][0]==parseInt(document.getElementById('seed_exp').value)) {
			choices_str+="<option value='" + i + "'>" + seed[i][1] + "</option>";
		}
	}
	document.getElementById('seed_det').innerHTML = choices_str;
	if(count>1) {
		document.getElementById('seed_det2').innerHTML = choices_str;
	}
}

function getGardenBeds() {
	for(i=0;i<36;i++) {
		var canvas=document.getElementById('bcanvas');
		var context=canvas.getContext('2d');
		context.beginPath(); 
		if (seed[(plants[i][1])][0] == 0) {
			context.fillStyle = "rgb(0,255,255)";
		} else if (seed[(plants[i][1])][0] == 1) {
			context.fillStyle = "rgb(255,255,0)";
		} else if (seed[(plants[i][1])][0] == 2) {
			context.fillStyle = "rgb(120,20,120)";
		} else if (seed[(plants[i][1])][0] == 3) {
			context.fillStyle = "rgb(140,140,80)";
		} else if (seed[(plants[i][1])][0] == 4) {
			context.fillStyle = "rgb(0,128,0)";
		}
    	context.rect(Math.floor(i/6)*30, i%6*15 + 30, 26, 12);
		context.fill();
	}
}

