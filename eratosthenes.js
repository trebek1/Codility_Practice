// find all primes below a certain number 

// make array of all true up to n 
// make positions false if they are a multiple of the index after squaring 
// loop through array and push resulting values to a new array 
// check: there should be 168 prime numbers below 1000 

var sieve = function(n){
    
    // initialize vars 
    var nums = [], final = [], upperLimit = Math.sqrt(n); 
    
    // fill array with trues to n 
    
    for(var i =0; i<n; i++){
        nums[i] = true; 
    }
    
    // if i, remove all multiples of i starting at i^2 
    
    for(var i=2; i<upperLimit; i++){
        
        if(nums[i]){
            
            for(var j = i*i; j<n; j+=i){
                
                nums[j] = false; 
            }
            
            
        }
        
    }
    
    
    // push non false values to a new array 
    
    for( var i = 2; i<n; i++){
        
        if(nums[i]){
            
            final.push(i);
            
        }
        
    }
    console.log(final.length); // should be 168 primes below 1000
    return final; 
}

sieve(1000); 


