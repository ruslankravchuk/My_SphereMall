  
  import canvas from './canvas'
  function top_form() { 
    
        
	let body = document.querySelector('body');
	
	let button = document.querySelector('.block_whith_form a');

        button.addEventListener('click', (e)=>{show(e)}); 
	
	function show (e) {  e.preventDefault();
		               let fragment = document.querySelector('.one_form').content.cloneNode(true);
		               body.appendChild(fragment); 
		               canvas();
	                   document.querySelector('#My_canvas_one').addEventListener('click', remuve)
						};
						
	function remuve() { let wrap_form = document.querySelector('.wrap_one');
						wrap_form.remove() };


		let my_event = new Event('click');				 
						setTimeout(() => {
							button.dispatchEvent(my_event)
						}, 2000);
						


    						
   


	  
	}

export default top_form