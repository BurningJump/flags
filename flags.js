var flag = document.getElementById('flag');
var ctx=flag.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;

//正五角星
function star( ctx, R, r, x, y, rotate, color) {
	ctx.save();
	ctx.beginPath();
	for(var i = 0; i < 5; i++) {
		ctx.lineTo(Math.cos((18+i*72-rotate)/180*Math.PI)*R + x, -Math.sin((18+i*72-rotate)/180*Math.PI)*R + y);
		ctx.lineTo(Math.cos((54+i*72-rotate)/180*Math.PI)*r + x, -Math.sin((54+i*72-rotate)/180*Math.PI)*r + y);
	}
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
	ctx.restore();
}

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
	star(ctx, R, r, x, y, 0, 'yellow');

	//小五角星
	//外接圆半径
	sR = width/30;
	//内接圆半径
	sr = sR * Math.sin(18*2*Math.PI/360)/Math.sin(126*2*Math.PI/360, 'yellow');
	star(ctx, sR, sr, width/3, height/10, -Math.atan(5/3)*180/Math.PI, 'yellow');
	star(ctx, sR, sr, width*2/5, height/5, -Math.atan(7)*180/Math.PI, 'yellow');
	star(ctx, sR, sr, width*2/5, height*7/20, 0, 'yellow');
	star(ctx, sR, sr, width/3, height*9/20, -Math.atan(5/4)*180/Math.PI, 'yellow');
}
//drawChina();

//日本
function drawJapan() {
	ctx.save();
	ctx.fillStyle="#fff";
	ctx.fillRect(0, 0, width, height);
	//ctx.translate(width/2, height/2);
	ctx.arc(width/2, height/2, .3*height, 0, 2*Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.restore();
}
//drawJapan();

//印度尼西亚共和国
function drawIndonesia() {
	ctx.save();
	ctx.fillStyle="red";
	ctx.fillRect(0, 0, width, height/2);
	ctx.fillStyle="#fff";
	ctx.fillRect(0, height/2, width, height);
	ctx.restore();
}
//drawIndonesia();

//阿拉伯叙利亚共和国
function drawSyrian() {
	ctx.save();
	ctx.fillStyle="red";
	ctx.fillRect(0, 0, width, height/3);
	ctx.fillStyle="#fff";
	ctx.fillRect(0, height/3, width, height/3);
	ctx.fillStyle="#000";
	ctx.fillRect(0, height/3*2, width, height/3);
	ctx.restore();

	//五角星尺寸和位置不确定
	R = height/10;
	r = R * Math.sin(18*2*Math.PI/360)/Math.sin(126*2*Math.PI/360);
	star(ctx, R, r, width/4, height/2, 0, 'green');
	star(ctx, R, r, width/4*3, height/2, 0, 'green');
}
//drawSyrian();

//法国
function drawFrance() {
	ctx.save();
	ctx.fillStyle="blue";
	ctx.fillRect(0, 0, .3*width, height);
	ctx.fillStyle="#fff";
	ctx.fillRect(.3*width, 0, .33*width, height);
	ctx.fillStyle="red";
	ctx.fillRect(.63*width, 0, .37*width, height);
	ctx.restore();
}
//drawFrance();


//越南
function drawVietnam() {
	ctx.save();
	ctx.fillStyle="red";
	ctx.fillRect(0, 0, width, height);

	//大五角星
	//外接圆半径
	R = height/3;
	//内接圆半径
	r = R * Math.sin(18*2*Math.PI/360)/Math.sin(126*2*Math.PI/360);
	x = width/2;
	y = height/2;
	star(ctx, R, r, x, y, 0, 'yellow');
}
//drawVietnam();

//德国
function drawGerman() {
	ctx.save();
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height/3);
	ctx.fillStyle = "red";
	ctx.fillRect(0, height/3, width, height/3);
	ctx.fillStyle = "gold";
	ctx.fillRect(0, height/3*2, width, height/3);
	ctx.restore();
}
//drawGerman();

//美国
function drawUSA(argument) {
	ctx.save();
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, width, height);
	for(var i = 0; i < 7; i++){
		ctx.fillStyle = 'rgb(196, 30, 58)';
		ctx.fillRect(0, i*2*height/13, width, height/13);
	}
	ctx.fillStyle = 'rgb(0, 43, 127)';
	ctx.fillRect(0, 0, .4*width, 7/13*height);

	var R = 0.0616/2*height;
	r = R * Math.sin(18*2*Math.PI/360)/Math.sin(126*2*Math.PI/360);

	//奇数行
	for( var j = 0; j < 6; j++){
		for( var k = 0; k < 5; k++ ){
			x = width*.4*(1+2*j)/12;
			y = height*7/13*(1+2*k)/10
			star(ctx, R, r, x, y, 0, '#fff');
		}
	}
	//偶数行
	for( var m = 0; m < 5; m++){
		for( var n = 0; n < 4; n++ ){
			x = width*.4*2*(m+1)/12
			y = height*7/13*2*(n+1)/10
			star(ctx, R, r, x, y, 0, '#fff');
		}
	}
}
//drawUSA();

//俄罗斯
function drawRussia() {
	ctx.save();
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, width, height/3);
	ctx.fillStyle = "rgb(0, 81, 186)";
	ctx.fillRect(0, height/3, width, height/3);
	ctx.fillStyle = "rgb(216, 30, 5)";
	ctx.fillRect(0, height/3*2, width, height/3);
	ctx.restore();
}
drawRussia();