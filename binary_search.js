var binarySearch = function(array, key){
    
    var low = 0;
    var high = array.length; 
    var mid;
    
    while(high>=low){
        
        var mid = Math.floor((high+low)/2); 
        
        if(array[mid]< key){
            low = mid + 1; 
        }        
        else if (array[mid] > key){
            high = mid -1; 
        }
        else
        return mid; 
        
    }
        return -1 ;
};
    
    

var x = [5,10,15,20,45,50,777];

var key = 777; 

binarySearch(x,key);

