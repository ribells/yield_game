var light = [
0,1,50,144,1.0,
1,1,80,144,0.5,
2,1,120,144,1.0,
3,1,160,144,0.72,
4,1,200,144,1.0,
5,1,240,144,0.45,
6,0,280,144,1.0,
7,0,320,144,1.0,
8,0,360,144,0.67,
9,0,20,144,1.0
];

function drawLights() {
	for(i=0;i<light.length;i=i+5) {
		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		if (light[i+1]==0) {
			ctx.fillStyle = "rgba(255,255,0," + light[i+4] + ")";
		} else {
			ctx.fillStyle = "rgba(255,128,0," + light[i+4] + ")";
		}
		ctx.arc(light[i+2],light[i+3],5,0,2*Math.PI);
		ctx.fill();
		ctx.stroke();
	}
}

function checkLightClicks(x, y) {
	for(i=0;i<light.length;i=i+5) {
		if(x>light[i+2]-5 && x<light[i+2]+5 && y>light[i+3]-5 && y<light[i+3]+5) {
			alert("You clicked on Light " + Math.floor(i/5));
			return Math.floor(i/5);
		}
	}
	return -1;
}