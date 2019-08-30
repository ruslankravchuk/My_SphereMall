  
  import canvas from './canvas_two'
  function main_top() { 
    window.onload = () => {
		console.log("123123");
    let body = document.querySelector('body');
	document.querySelector('#contact').addEventListener('click', show); 
	
	function show () { 
		               let fragment = document.querySelector('.second_form').content.cloneNode(true);
		               body.appendChild(fragment); 
		               canvas();
	                   document.querySelector('#My_canvas').addEventListener('click', remuve)
						};
						
	function remuve() { let wrap_form = document.querySelector('.wrap_two');
						wrap_form.remove() };
						


    						
   


	  }
	}

export default main_top