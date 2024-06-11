var soil = [
[0,1,40,570,0],
[1,1,90,570,1],
[2,1,140,570,2],
[3,1,194,570,3],
[4,1,250,570,4],
[5,0,300,570,5],
[6,0,350,570,6],
[7,0,404,570,7],
[8,0,460,570,8],
[9,0,510,570,9],
[10,0,40,570,10]
];

function drawSoils() {
	for(i=0;i<soil.length;i++) {
		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		ctx.fillStyle = "rgba(80,80,20," + soil[i][4] + ")";
		ctx.strokeStyle="#000000";
		ctx.beginPath();
		// Draw a triangle location for each corner (it will return to first point)
		ctx.moveTo(soil[i][2],soil[i][3]-2);
		ctx.lineTo(soil[i][2]+8,soil[i][3]+8);
		ctx.lineTo(soil[i][2]-8,soil[i][3]+8);
		ctx.closePath();
		ctx.fill();
		//ctx.stroke();
	}
}

function checkSoilClicks(x, y) {
	for(i=0;i<soil.length;i++) {
		if(x>soil[i][2]-5 && x<soil[i][2]+5 && y>soil[i][3]-5 && y<soil[i][3]+5) {
			createSoilDialogue(i);
		}
	}
	return -1;
}

function createSoilDialogue(index) {
	//alert("You clicked on soil " + index);
	var d_string = "<b>Soil Information</b><br/><br/><b>Value: </b><span id='seed_type'>" + getSoilName(soil[parseInt(index)][4]) + "</span><br/><br/>";
	d_string += "<fieldset>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>CHANGE SOIL VALUE</i><br/><b>Value: </b>";
	d_string += "<select id='soil_val' name='soil_val'>";
	d_string += "<option value='-1'>...</option>";
	for(i=0;i<10;i++) {
		d_string += "<option value='" + i + "'>" + getSoilName(i) + "</option>";
	}
	d_string += "</select>";
	d_string += "<input type='submit' value='OK' onclick='updateSoilValue(" + index + ");' /></fieldset>";
	ef = document.getElementById('exp_frame');
	ef.innerHTML = d_string;
	ef.style.left = (400) + "px";
	ef.style.top = (200) + "px";
	ef.style.visibility = "visible";
}

function updateSoilValue(index) {
	soil[index][4] = document.getElementById('soil_val').value;
	document.getElementById('exp_frame').style.visibility = "hidden";
}

function getSoilName(index) {
	if(index==0) {
		return "SAND";
	} else if(index==1) {
		return "LOAMY SAND";
	} else if(index==2) {
		return "SILTY LOAM";
	} else if(index==3) {
		return "SILT";
	} else if(index==4) {
		return "CLAY";
	} else if(index==5) {
		return "CLAY LOAM";
	} else if(index==6) {
		return "SILTY CLAY";
	} else if(index==7) {
		return "SILTY CLAY LOAM";
	} else if(index==8) {
		return "SANDY LOAM";
	} else if(index==9) {
		return "SANDY CLAY";
	}
}

/*
################################################################################	
# SOILS INFORMATION SECTION	
################################################################################	
[SOILS]                                   # Soil information	

Soil Map File	     = ./input/quilcene.soil.bin
Soil Depth File      = ./input/quilcene.soildepth.bin	

Number of Soil Types = 18                	

################ SOIL 1 #########################################################	

Soil Description       1 = SAND	
Lateral Conductivity   1 = 0.01     	
Exponential Decrease   1 = 3.0       	
Maximum Infiltration   1 = 2.0e-4      	
Surface Albedo         1 = 0.1       
Number of Soil Layers  1 = 3       
Porosity               1 =  .43 .43 .43
Pore Size Distribution 1 =  .24 .24 .24
Bubbling Pressure      1 =  .07 .07 .07 
Field Capacity         1 =  .08 .08 .08 
Wilting Point          1 =  .03 .03 .03 
Bulk Density           1 = 1492. 1492. 1492. 
Vertical Conductivity  1 = 0.01 0.01 0.01
Thermal Conductivity   1 = 7.114  6.923 6.923
Thermal Capacity       1 = 1.4e6  1.4e6 1.4e6

################ SOIL 2 #########################################################

Soil Description       2 = LOAMY SAND    
Lateral Conductivity   2 = 0.01     
Exponential Decrease   2 = 3.0       
Maximum Infiltration   2 = 6.0e-5      
Surface Albedo         2 = 0.1       
Number of Soil Layers  2 = 3       
Porosity               2 =  .42 .42 .42
Pore Size Distribution 2 =  .35 .35 .45
Bubbling Pressure      2 =  .09 .09 .09
Field Capacity         2 =  .15 .15 .15
Wilting Point          2 =  .06 .06 .06
Bulk Density           2 = 1520. 1520. 1520.
Vertical Conductivity  2 =  0.01 0.01 0.01
Thermal Conductivity   2 = 7.114  6.923 7.0
Thermal Capacity       2 = 1.4e6  1.4e6 1.4e6

################ SOIL 3 #########################################################

Soil Description       3 = SANDY LOAM      
Lateral Conductivity   3 = 0.01     
Exponential Decrease   3 = 3.0       
Maximum Infiltration   3 = 3e-5      
Surface Albedo         3 = 0.1       
Number of Soil Layers  3 = 3       
Porosity               3 =  .6 .6 .6
Pore Size Distribution 3 =  .5 .6 .7
Bubbling Pressure      3 =  .15 .15 .15
Field Capacity         3 =  .21 .21 .21
Wilting Point          3 =  .09 .09 .09
Bulk Density           3 = 1569. 1569. 1569.
Vertical Conductivity  3 = 0.01 0.01 0.01
Thermal Conductivity   3 = 7.114  6.923 7.0 
Thermal Capacity       3 = 1.4e6  1.4e6 1.4e6

################ SOIL 4 #########################################################

Soil Description       4 = SILTY LOAM   
Lateral Conductivity   4 = 0.01     
Exponential Decrease   4 = 3.0       
Maximum Infiltration   4 = 3e-5      
Surface Albedo         4 = 0.1       
Number of Soil Layers  4 = 3       
Porosity               4 =  .46 .46 .46
Pore Size Distribution 4 =  .26 .26 .26
Bubbling Pressure      4 =  .21 .21 .21
Field Capacity         4 =  .32 .32 .32
Wilting Point          4 =  .12 .12 .12
Bulk Density           4 = 1419. 1419. 1419.
Vertical Conductivity  4 =  0.01 0.01 0.01
Thermal Conductivity   4 = 7.114  6.923 7.0
Thermal Capacity       4 = 1.4e6  1.4e6 1.4e6

################ SOIL 5 #########################################################

Soil Description       5 = SILT
Lateral Conductivity   5 = 0.01     
Exponential Decrease   5 = 3.0       
Maximum Infiltration   5 = 3e-5      
Surface Albedo         5 = 0.1       
Number of Soil Layers  5 = 3       
Porosity               5 =  .52 .52 .52
Pore Size Distribution 5 =  .33 .33 .33
Bubbling Pressure      5 =  .25 .25 .25
Field Capacity         5 =  .28 .28 .28
Wilting Point          5 =  .08 .08 .08
Bulk Density           5 = 1280. 1280. 1280.
Vertical Conductivity  5 =  0.01 0.01 0.01
Thermal Conductivity   5 = 7.114  6.923 7.0
Thermal Capacity       5 = 1.4e6  1.4e6 1.4e6

################ SOIL 6 #########################################################

Soil Description       6 = LOAM     
Lateral Conductivity   6 = 0.01     
Exponential Decrease   6 = 3.0       
Maximum Infiltration   6 = 1e-5      
Surface Albedo         6 = 0.1       
Number of Soil Layers  6 = 3       
Porosity               6 =  .43 .43 .43
Pore Size Distribution 6 =  .19 .19 .19
Bubbling Pressure      6 =  .11 .11 .11
Field Capacity         6 =  .29 .29 .29
Wilting Point          6 =  .14 .14 .14
Bulk Density           6 = 1485. 1485. 1485.
Vertical Conductivity  6 = 0.01 0.01 0.01
Thermal Conductivity   6 = 7.114  6.923 7.0
Thermal Capacity       6 = 1.4e6  1.4e6 1.4e6

################ SOIL 7 #########################################################

Soil Description       7 = SANDY CLAY LOAM 
Lateral Conductivity   7 = 0.01     
Exponential Decrease   7 = 3.0       
Maximum Infiltration   7 = 1e-5      
Surface Albedo         7 = 0.1       
Number of Soil Layers  7 = 3       
Porosity               7 =  .39 .39 .39
Pore Size Distribution 7 =  .12 .12 .12
Bubbling Pressure      7 =  .29 .29 .29
Field Capacity         7 =  .27 .27 .27
Wilting Point          7 =  .17 .17 .17
Bulk Density           7 = 1600. 1600. 1600.
Vertical Conductivity  7 =  0.01 0.01 0.01
Thermal Conductivity   7 = 7.114  6.923 7.0 
Thermal Capacity       7 = 1.4e6  1.4e6 1.4e6

################ SOIL 8 #########################################################

Soil Description       8 = SILTY CLAY LOAM      
Lateral Conductivity   8 = 0.01     
Exponential Decrease   8 = 3.0       
Maximum Infiltration   8 = 3e-5      
Surface Albedo         8 = 0.1       
Number of Soil Layers  8 = 3       
Porosity               8 =  .48 .48 .48
Pore Size Distribution 8 =  .13 .13  .13
Bubbling Pressure      8 =  .34 .34 .34
Field Capacity         8 =  .36 .36 .36
Wilting Point          8 =  .21 .21 .21
Bulk Density           8 = 1381. 1381. 1381.
Vertical Conductivity  8 =  0.01 0.01 0.01
Thermal Conductivity   8 = 7.114  6.923 7.0
Thermal Capacity       8 = 1.4e6  1.4e6 1.4e6

################ SOIL 9 #########################################################

Soil Description       9 = CLAY LOAM      
Lateral Conductivity   9 = 0.01     
Exponential Decrease   9 = 3.0       
Maximum Infiltration   9 = 1e-5      
Surface Albedo         9 = 0.1       
Number of Soil Layers  9 = 3       
Porosity               9 =  .46 .46 .46
Pore Size Distribution 9 =  .12 .12 .12
Bubbling Pressure      9 =  .26 .26 .26
Field Capacity         9 =  .31 .31 .31
Wilting Point          9 =  .23 .23 .23
Bulk Density           9 = 1600. 1600. 1600.
Vertical Conductivity  9 =  0.01 0.01 0.01
Thermal Conductivity   9 = 7.114  6.923 7.0
Thermal Capacity       9 = 1.4e6  1.4e6 1.4e6

################ SOIL 10 #########################################################

Soil Description       10 = SANDY CLAY
Lateral Conductivity   10 = 0.01     
Exponential Decrease   10 = 3.0       
Maximum Infiltration   10 = 1e-5      
Surface Albedo         10 = 0.1       
Number of Soil Layers  10 = 3       
Porosity               10 =  .41 .41 .41 
Pore Size Distribution 10 =  .08 .08 .08
Bubbling Pressure      10 =  .29 .29 .29
Field Capacity         10 =  .31 .31 .31
Wilting Point          10 =  .23 .23 .23
Bulk Density           10 = 1565. 1565. 1565.
Vertical Conductivity  10 =  0.01 0.01 0.01
Thermal Conductivity   10 = 7.114  6.923 7.0
Thermal Capacity       10 = 1.4e6  1.4e6 1.4e6

################ SOIL 11 #########################################################

Soil Description       11 = SILTY CLAY  
Lateral Conductivity   11 = 0.01     
Exponential Decrease   11 = 3.0       
Maximum Infiltration   11 = 1e-5      
Surface Albedo         11 = 0.1       
Number of Soil Layers  11 = 3       
Porosity               11 =  .49 .49 .49
Pore Size Distribution 11 =  .1 .1 .1
Bubbling Pressure      11 =  .34 .34 .34
Field Capacity         11 =  .37 .37 .37
Wilting Point          11 =  .25 .25 .25
Bulk Density           11 = 1346. 1346. 1346.
Vertical Conductivity  11 =  0.01 0.01 0.01 
Thermal Conductivity   11 = 7.114  6.923 7.0
Thermal Capacity       11 = 1.4e6  1.4e6 1.4e6

################ SOIL 12 #########################################################

Soil Description       12 = CLAY
Lateral Conductivity   12 = 0.01     
Exponential Decrease   12 = 3.0       
Maximum Infiltration   12 = 1e-5      
Surface Albedo         12 = 0.1       
Number of Soil Layers  12 = 3       
Porosity               12 =  .47 .47 .47
Pore Size Distribution 12 =  .08 .08 .08
Bubbling Pressure      12 =  .37 .37 .37
Field Capacity         12 =  .36 .36 .36
Wilting Point          12 =  .27 .27 .27
Bulk Density           12 = 1394. 1394. 1394
Vertical Conductivity  12 =  0.01 0.01 0.01
Thermal Conductivity   12 = 7.114  6.923 7.0
Thermal Capacity       12 = 1.4e6  1.4e6 1.4e6

################ SOIL 13 #########################################################

Soil Description       13 = ORGANIC (as loam)
Lateral Conductivity   13 = 0.01     
Exponential Decrease   13 = 3.0       
Maximum Infiltration   13 = 1e-5      
Surface Albedo         13 = 0.1       
Number of Soil Layers  13 = 3       
Porosity               13 =  .43 .43 .43
Pore Size Distribution 13 =  .19 .19 .19
Bubbling Pressure      13 =  .11 .11 .11
Field Capacity         13 =  .29 .29 .29
Wilting Point          13 =  .14 .14 .14
Bulk Density           13 = 1485. 1485. 1485.
Vertical Conductivity  13 =  0.01 0.01 0.01 
Thermal Conductivity   13 = 7.114  6.923 7.0
Thermal Capacity       13 = 1.4e6  1.4e6 1.4e6

################ SOIL 14 #########################################################

Soil Description       14 = WATER (as clay)
Lateral Conductivity   14 = 0.01     
Exponential Decrease   14 = 3.0       
Maximum Infiltration   14 = 1e-5      
Surface Albedo         14 = 0.1       
Number of Soil Layers  14 = 3       
Porosity               14 =  .47 .47 .47
Pore Size Distribution 14 =  .08 .08 .08
Bubbling Pressure      14 =  .37 .37 .37
Field Capacity         14 =  .36 .36 .36
Wilting Point          14 =  .27 .27 .27
Bulk Density           14 = 1394. 1394. 1394.
Vertical Conductivity  14 =  0.01 0.01 0.01
Thermal Conductivity   14 = 7.114  6.923 7.0
Thermal Capacity       14 = 1.4e6  1.4e6 1.4e6

################ SOIL 15 #########################################################

Soil Description       15 = BEDROCK   
Lateral Conductivity   15 = 0.01
Exponential Decrease   15 = 3.0       
Maximum Infiltration   15 = 1e-5      
Surface Albedo         15 = 0.1       
Number of Soil Layers  15 = 3       
Porosity               15 =  .1 .1 .1
Pore Size Distribution 15 =  .08 .08 .08
Bubbling Pressure      15 =  .36 .36 .36
Field Capacity         15 =  .05 .05 .05
Wilting Point          15 =  .04 .04 .04
Bulk Density           15 = 1650. 1650. 1650.0
Vertical Conductivity  15 =  0.01 0.01 0.01
Thermal Conductivity   15 = 7.114  6.923 7.0 
Thermal Capacity       15 = 1.4e6  1.4e6 1.4e6

################ SOIL 16 #########################################################

Soil Description       16 = OTHER  (as SCL)
Lateral Conductivity   16 = 0.01     
Exponential Decrease   16 = 3.0       
Maximum Infiltration   16 = 1e-5      
Surface Albedo         16 = 0.1       
Number of Soil Layers  16 = 3       
Porosity               16 =  .39 .39 .39
Pore Size Distribution 16 =  .12 .12 .12
Bubbling Pressure      16 =  .29 .29 .29
Field Capacity         16 =  .27 .27 .27
Wilting Point          16 =  .17 .17 .17
Bulk Density           16 = 1600. 1600. 1600.
Vertical Conductivity  16 =  0.01 0.01 0.01
Thermal Conductivity   16 = 7.114  6.923 7.0
Thermal Capacity       16 = 1.4e6  1.4e6 1.4e6

################ SOIL 17 #########################################################

Soil Description       17 = MUCK  
Lateral Conductivity   17 = 0.01     
Exponential Decrease   17 = 3.0       
Maximum Infiltration   17 = 1e-5      
Surface Albedo         17 = 0.23       
Number of Soil Layers  17 = 3       
Porosity               17 =  .47 .47 .47
Pore Size Distribution 17 =  .08 .08 .08
Bubbling Pressure      17 =  .37 .37 .37
Field Capacity         17 =  .36 .36 .36
Wilting Point          17 =  .27 .27 .27
Bulk Density           17 = 1600. 1600. 1600
Vertical Conductivity  17 =  0.05 0.05 0.05
Thermal Conductivity   17 = 7.114  6.923 7.0
Thermal Capacity       17 = 1.4e6  1.4e6 1.4e6

################ SOIL 18 #########################################################

Soil Description       18 = TALUS
Lateral Conductivity   18 = 0.01     	
Exponential Decrease   18 = 3.0       	
Maximum Infiltration   18 = 2.0e-4      	
Surface Albedo         18 = 0.1       
Number of Soil Layers  18 = 3       
Porosity               18 =  .80 .80 .80
Pore Size Distribution 18 =  .65 .65 .65
Bubbling Pressure      18 =  .01 .01 .01 
Field Capacity         18 =  .03 .03 .03 
Wilting Point          18 =  .03 .03 .03 
Bulk Density           18 = 1492. 1492. 1492. 
Vertical Conductivity  18 = 0.01 0.01 0.01
Thermal Conductivity   18 = 7.114  6.923 6.923
Thermal Capacity       18 = 1.4e6  1.4e6 1.4e6

################################################################################
*/