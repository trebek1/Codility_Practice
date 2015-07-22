// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 0.12)
    
 var max = Math.max.apply(null, A); 
  
 // generate fibonacci numbers 
 
 var fib = []; 
 fib[0] = 0; 
 fib[1] = 1; 
 
 for(var i=2; i<=max+1; i++){
  fib[i] = fib[i-1] + fib[i-2]; 
 }
 var final = []; 
 for(var i=0; i<A.length; i++){
 var mod = Math.pow(2,B[i]); 
 final[i] = fib[A[i]+1]%mod; 
 }
 return final; 
    
}