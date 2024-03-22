var water = [
0,1,376,170,1.0,
1,1,376,210,0.45,
2,0,376,240,1.0,
3,0,376,270,1.0,
4,0,376,300,0.67,
5,0,376,330,1.0,
6,1,376,370,1.0,
7,1,376,410,0.5,
8,1,376,450,1.0,
9,1,376,490,0.72
];

function drawWaters() {
	for(i=0;i<water.length;i=i+5) {
		var c=document.getElementById("mycanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,0,255," + water[i+4] + ")";
		ctx.rect(water[i+2]-5, water[i+3]-5, 10, 10);
		ctx.fill();
		ctx.stroke();
	}
}

function checkWaterClicks(x, y) {
	for(i=0;i<water.length;i=i+5) {
		if(x>water[i+2]-5 && x<water[i+2]+5 && y>water[i+3]-5 && y<water[i+3]+5) {
			alert("You clicked on Water " + Math.floor(i/5));
			return Math.floor(i/5);
		}
	}
	return -1;
}