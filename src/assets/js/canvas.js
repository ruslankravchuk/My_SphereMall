
var canvas = () => { 
    let canvas = document.getElementById("My_canvas_one");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.strokeStyle  = 'black';
	ctx.moveTo(300, 0);
	ctx.lineTo(0, 150);
	ctx.moveTo(0, 0);
	ctx.lineTo(360, 180);
	ctx.closePath();
    ctx.stroke();

     
};





export default canvas;

