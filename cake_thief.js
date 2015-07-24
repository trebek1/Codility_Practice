


var cake_tuples = [[7, 160], [3, 90], [2, 15]]
var capacity    = 20

var max_duffel_bag_value = function(cake_tuples, capacity){
    
    var final = [0]; 
    for(var i =1; i<=capacity; i++){
        final[i] = 0; 
    }
    
    for(var i=0; i<final.length; i++){
        for(var j=0; j<cake_tuples.length; j++){
            if(cake_tuples[j][0] <= i){
                var cake = (Math.floor(i/cake_tuples[j][0]))*cake_tuples[j][1];
                var remainder = (i-(Math.floor(i/cake_tuples[j][0]))*cake_tuples[j][0])||0;
                var remainder_lookup = final[remainder];
                var max_value_using_cake = cake + remainder_lookup; 
                
                final[i] = Math.max(max_value_using_cake, (final[i-1] + (final[1] || 0)), final[i]); 
                
            }
        }
    }
        
    return final[capacity]
}

max_duffel_bag_value(cake_tuples, capacity)

// answer should be 555