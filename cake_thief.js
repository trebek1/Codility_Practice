

// Unbound Knapsack Problem!!!!
// steal as much value as possible with capacity limit and unlimited cakes of each type 

var cake_tuples = [[7, 160], [3, 90], [2, 15]]
// Think [weight, value]
var capacity    = 20

var max_duffel_bag_value = function(cake_tuples, capacity){
    // Make an array size capacity +1 to hold optimal weights for each capacity 0 through Capacity
    var final = [0]; 
    for(var i =0; i<=capacity; i++){
        final[i] = 0; 
    }
    // Go through each capacity from 0 to Capacity 
    for(var i=0; i<final.length; i++){
        // Go through each cake in cake tuple array 
        for(var j=0; j<cake_tuples.length; j++){
            // if the cake weight is less than the knapsack capacity,test to see if it can be used to maximize the value  
            if(cake_tuples[j][0] <= i){
                // divide (capacity/cake weight)*cake value to get value using max number of new cakes 
                var cake = (Math.floor(i/cake_tuples[j][0]))*cake_tuples[j][1];
             // find the remaining capacity in the sack after using the new cake
                var remainder = (i-(Math.floor(i/cake_tuples[j][0]))*cake_tuples[j][0])||0;
                // lookup remaining capacity in the sack and use the optimal capacity that we found for this amount before 
                var remainder_lookup = final[remainder];
                // max value is the value of using the cakes + the remainder optimized with previous optimal amount
                var max_value_using_cake = cake + remainder_lookup; 
              // the new position is the max of using the new cake or the capacity before (i-1) + a cake of 1 if it exists, or a final value defined with an earlier cake in the cake_tuple array this pass. final[1] || 0 in case final[1] is not defined 
                final[i] = Math.max(max_value_using_cake, (final[i-1] + final[1] || 0), final[i]); 
                
            }
        }
    }
        // we just care about the whole sack so we return the final capacity number 
    return final[capacity]
}

max_duffel_bag_value(cake_tuples, capacity)

// answer should be 555