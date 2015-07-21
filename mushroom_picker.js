// A mushroom picker is at spot number k on the road and should perform m moves. In
// one move she moves to an adjacent spot. She collects all the mushrooms growing on spots
// she visits. The goal is to calculate the maximum number of mushrooms that the mushroom
// picker can collect in m moves.
// For example, consider array A such that:
// 2 3 7 5 1 3 9
// 0 1 2 3 4 5 6
// The mushroom picker starts at spot k = 4 and should perform m = 6 moves. She might
// move to spots 3, 2, 3, 4, 5, 6 and thereby collect 1 + 5 + 7 + 3 + 9 = 25 mushrooms. This is the
// maximal number of mushrooms she can collect.

// Write a function to maximize her mushrooms. 

prefix_sums = function(A){
    var length = A.length; 
    var prefix = Array.apply(null, Array(length)).map(Number.prototype.valueOf,0);
    for(k =1; k<=A.length; k++){
        prefix[k] = prefix[k-1] + A[k-1];
    }
    return prefix; 
}

count_total = function(Prefix,start,end ){
    return Prefix[end+1] - Prefix[start]; 
}

mushrooms = function(Array, start, moves){
    
    var length = Array.length; 
    var result = 0; 
    pref = prefix_sums(Array);
    
    for(var i =0; i<Math.min(start,moves)+1; i++){
        
        var left_pos = start - i; 
        var right_pos = Math.min(length-1, Math.max(start, start+moves-2*i)); 
        result = Math.max(result, count_total(pref,left_pos, right_pos));
    }
    
    for(var i=0; i<Math.min(moves+1,length-start); i++){
        
        var right_pos = start + i;
        var left_pos = Math.max(0,Math.min(start,start-(moves-2*i))); 
        result = Math.max(result, count_total(pref, left_pos, right_pos)); 
            
    }    
    return result; 
}

test = [2,3,7,5,1,3,9];
mushrooms(test,4,6); 