
// Consider n coins aligned in a row. Each coin is showing heads at the beginning.
// 1 2 3 4 5 6 7 8 9 10
// Then, n people turn over corresponding coins as follows. Person i reverses coins with numbers
// that are multiples of i. That is, person i flips coins i, 2 · i, 3 · i, . . . until no more appropriate
// coins remain. The goal is to count the number of coins showing tails. In the above example,
// the final configuration is:
// 1 2 3 4 5 6 7 8 9 10 (1,4, and 9 selected)
// Solution O(n log n): We can simulate the results of each person reversing coins.

var reversingCoins = function(n){
    var result = 0; 
    var coin = []; 
    for (var i =0; i<=n; i++){
        coin[i] = 0; 
    }
    
    for(var i =1; i<=n; i++){
        var k =i;
        
        while(k<=n){
            coin[k] = ((coin[k] + 1)%2);
            k+=i;
        }
        result+= coin[i];
        
    }
    return result; 
}

reversingCoins(10);

