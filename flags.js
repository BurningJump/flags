var china = document.getElementById('china');
var ctx=china.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;

//中国
function drawChina() {
	
	ctx.save();
	ctx.fillStyle="red";
	ctx.fillRect(0, 0, width, height);

	//大五角星
	//外接圆半径
	R = width/10;
	//内接圆半径
	r = R * Math.sin(18*2*Math.PI/360)/Math.sin(126*2*Math.PI/360);
	x = width/6;
	y = height/4;
	star(ctx, R, r, x, y, 0);

	//小五角星
	//外接圆半径
	sR = width/30;
	//内接圆半径
	sr = sR * Math.sin(18*2*Math.PI/360)/Math.sin(126*2*Math.PI/360);
	star(ctx, sR, sr, width/3, height/10, -Math.atan(5/3)*180/Math.PI);
	star(ctx, sR, sr, width*2/5, height/5, -Math.atan(7)*180/Math.PI);
	star(ctx, sR, sr, width*2/5, height*7/20, 0);
	star(ctx, sR, sr, width/3, height*9/20, -Math.atan(5/4)*180/Math.PI);
}
drawChina();

//五角星
function star( ctx, R, r, x, y, rotate) {
	ctx.save();
	ctx.beginPath();
	for(var i = 0; i < 5; i++) {
		ctx.lineTo(Math.cos((18+i*72-rotate)/180*Math.PI)*R + x, -Math.sin((18+i*72-rotate)/180*Math.PI)*R + y);
		ctx.lineTo(Math.cos((54+i*72-rotate)/180*Math.PI)*r + x, -Math.sin((54+i*72-rotate)/180*Math.PI)*r + y);
	}
	ctx.closePath();
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.restore();
}
