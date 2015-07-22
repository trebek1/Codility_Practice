// calculate fibonacci numbers below a certain number 

var f = function(number){
    var numbers = []; 
    
    // 0 and 1 are defined by definition 
    numbers[0] = 0; 
    numbers[1] = 1; 
    
    var index = 1; 
    
    if(numbers[index]<number){
        
        while(numbers[index]<number){
           
            numbers[index+1] = numbers[index-1] + numbers[index]; 
            index++; 
        }
    }
    numbers.pop(); 
    return numbers; 
}

f(20); 