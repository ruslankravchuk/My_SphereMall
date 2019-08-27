function main_top() { 

	var canvas = document.getElementById("My_canvas");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.strokeStyle = '#FF0000';
	ctx.moveTo(300, 0);
	ctx.lineTo(0, 150);
	ctx.moveTo(0, 0);
	ctx.lineTo(360, 180);
	ctx.closePath();
	ctx.stroke();

	var form = document.querySelector('.form');
	var wrap_form = document.querySelector('.wrap');
	var click_on_button = document.querySelector('#My_canvas').addEventListener('click', function() 
	{
		form.classList.remove('show');
		form.classList.add('hidden');
		wrap_form.classList.remove('show');
		wrap_form.classList.add('hidden');
	});

	var contact = document.querySelector('#contact').addEventListener('click', show);

	function show () {

		form.classList.remove('hidden');
		form.classList.add('show');
		wrap_form.classList.remove('hidden');
		wrap_form.classList.add('show');

	}
}



export default main_top;



