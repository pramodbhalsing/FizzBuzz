var number=[];
var count=1;

function fizzBuzz(){

 if(count%3==0){
     if(count%5==0){
     number.push("FizzBuzz");     
      }
      else{
          number.push("Fizz");
      }
     
       }
  else if(count%5==0){
      number.push("Buzz");
      }  

     else
    {

number.push(count);   
 } 
  
  count++;
 console.log(number);
  
}

 
    