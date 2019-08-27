function sum (...number){

 let sum = 0;
 for(let i=0; i < number.length; i++) 
 {
     sum += number[i];
 }
     return sum;
}

function avg (...numbers) {

   return sum(...numbers) / numbers.length; 
};


export default avg;