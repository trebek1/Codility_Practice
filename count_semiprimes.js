var prework = function(n){
    
    var semis = []; // store for semiprimes
    var sieve = [false, false]; // make position 0 and 1 false
    
    // create sieve 
    for(var i =2; i<n+1; i++){
    sieve[i] = true;     // make rest of entries up to max size true 
    }
    
    var i = 2; 
    while(i*i<=n){
        if(sieve[i]===true){
            for(var j =i*i; j<n+1; j+=i){ // make squared prime multiples false (cant be semi)
                sieve[j] = false; 
            }
        }
        i+=1; 
    }
    var i = 2; 
    
    while(i*i<=n){
        if(sieve[i]===true){
            for(var j =i*i; j<n+1; j+=i){ // if you can divide by i and find a prime then we have a semiprime so push to the list of semiprimes! 
                if(sieve[j/i] === true){
                    semis.push(j); 
                }
                
            }
        }
        i+=1; 
    }
    
    return semis; 
}

var solution = function(N,P,Q){
    
    var problem_semis = prework(N); // list of semiprimes based on the largest length 
    var prefix = []; 
    var length = Math.max.apply(null,Q) + 1; // length is max of largest number in upper bound + 1 (zero is part of the list but our numbers are n length)
    
    prefix.push(0,0,0,0,1); // base semiprime information
   
    for(var x =5; x<length; x++ ){ // loop through rest of possible values needed to generate rest of prefix list 
        if(problem_semis.indexOf(x)!== -1){
            prefix.push(1); // if the number is not not found (found), add 1 to list 
        }
        else{
            prefix.push(0); // else it is not found so add zero
        }
    }
    var cumulative = []; 
    for(var i=0; i<length; i++){ // simply create a cumulative function for all semis up to the number you are at. 
        if(i===0){
            cumulative[i] = 0; 
        }
        else{
            cumulative[i] = cumulative[i-1] + prefix[i]; 
        }
    }
    var final = []; 

    for(var i =0; i<Q.length; i++){ // differece of cumulative range endpoints leaves us with the total number of semiprimes in the range. Lower-1 so we include the endpoint
        final.push(cumulative[Q[i]]-cumulative[P[i]-1])
    }
    return final; 
}

N = 26; 
P = [1,4,16];
Q = [26,10,20]; 

solution(N,P,Q);

// should be [10,4,0]





