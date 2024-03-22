var soil = [
0,1,50,510,1.0,
1,1,80,510,0.5,
2,1,120,510,1.0,
3,1,160,510,0.72,
4,1,200,510,1.0,
5,1,240,510,0.45,
6,0,280,510,1.0,
7,0,320,510,1.0,
8,0,360,510,0.67,
9,0,20,510,1.0
];

function drawSoils() {
	for(i=0;i<soil.length;i=i+5) {
		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		ctx.fillStyle = "rgba(80,80,20," + soil[i+4] + ")";
		ctx.strokeStyle="#000000";
		ctx.beginPath();
		// Draw a triangle location for each corner (it will return to first point)
		ctx.moveTo(soil[i+2],soil[i+3]-2);
		ctx.lineTo(soil[i+2]+8,soil[i+3]+8);
		ctx.lineTo(soil[i+2]-8,soil[i+3]+8);
		ctx.closePath();
		ctx.fill();
		//ctx.stroke();
	}
}

function checkSoilClicks(x, y) {
	for(i=0;i<soil.length;i=i+5) {
		if(x>soil[i+2]-5 && x<soil[i+2]+5 && y>soil[i+3]-5 && y<soil[i+3]+5) {
			alert("You clicked on soil " + Math.floor(i/5));
			return Math.floor(i/5);
		}
	}
	return -1;
}