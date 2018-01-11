var china = document.getElementById('china');
var ctx=china.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;

//中国
function drawChina() {
	ctx.save();
	ctx.fillStyle="red";
	ctx.fillRect(0, 0, width, height);
}
//drawChina();

//五角星
function star() {
	ctx.save();
	ctx.beginPath();
	ctx.arc(width/2, height/2, height/2-5, 0, 2*Math.PI, false);
	ctx.stroke();
}
star();