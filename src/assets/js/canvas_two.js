
var canvas = () => { 
      
    let canvas_1 = document.getElementById("My_canvas");
	var ctx = canvas_1.getContext("2d");
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.strokeStyle  = '#F9FC50';
	ctx.moveTo(300, 0);
	ctx.lineTo(0, 150);
	ctx.moveTo(0, 0);
	ctx.lineTo(360, 180);
	ctx.closePath();
    ctx.stroke()
    


    
};





export default canvas;

