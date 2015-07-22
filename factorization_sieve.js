var factorization_Sieve = function(number){
    
    var array = Array.apply(null,Array(number+1)).map(Number.prototype.valueOf,0);  
    var i = 2; 
    
    while(i*i<=number){
        if(array[i]===0){ // means it is a prime 
            var k = i*i; 
        }
        while(k<=number){ // when the square of a prime is less than a number 
            if(array[k]===0){ // if a multiple of the square of a prime is zero then it is divisible by the original number!  
                array[k] = i; 
            }
            k+=i; // add an i increment to k until at the number (notice original i has not changed so we are still testing that original i with a different k)
        }
     
     i+=1;    // add i to test until i*i > number testing 
    }
    return array;
}

var factorization = function(x, preparedArray){
    var primeFactors = []; 
    while(preparedArray[x]>0){
        primeFactors.push(preparedArray[x]); // push smallest 
        x/= preparedArray[x];
        
        if(preparedArray[x]===0){
        primeFactors.push(x); 
         }
    
        
    }
    
    return primeFactors;
}

var test = 45; 

var Lemon = factorization_Sieve(test); 
factorization(test, Lemon); 

