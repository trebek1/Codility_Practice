// Let’s check whether a sequence a0, a1, . . . , an−1 (1 ¬ ai ¬ 109
// ) contains a contiguous subsequence
// whose sum of elements equals s. For example, in the following sequence we are looking
// for a subsequence whose total equals s = 12.
// a0 a1 a2 a3 a4 a5 a6
// 6 2 7 4 1 3 6
// Each position of the caterpillar will represent a different contiguous subsequence in which
// the total of the elements is not greater than s. Let’s initially set the caterpillar on the first
// element. Next we will perform the following steps:
// • if we can, we move the right end (front) forward and increase the size of the caterpillar;
// • otherwise, we move the left end (back) forward and decrease the size of the caterpillar.
// In this way, for every position of the left end we know the longest caterpillar that covers
// elements whose total is not greater than s. If there is a subsequence whose total of elements
// equals s, then there certainly is a moment when the caterpillar covers all its elements.

var s = 12;
var elements = [6,2,7,4,1,3,6]; 

var caterpillar = function(array,num){
    var n = array.length; 
    var front = 0, total = 0;
    
    for(var i =0; i<array.length; i++){
        while (i<n && (total + array[front] <= num)){
            total+= array[front];
            front +=1;
            if(total === num){
                return true; 
            }
        }
        total-=array[i];
    }
    return false;
}

caterpillar(elements,s); 