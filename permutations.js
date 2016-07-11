// var permutations = [];

// function doPerm(str, arr) {
//     if (typeof (str) == 'string') str = str.split('');
//     if (str.length == 0) permutations.push(arr.join(''));
//     for (var i = 0; i < str.length; i++) {
//         var x = str.splice(i, 1);
//         arr.push(x);
//         doPerm(str, arr);
//         arr.pop();
//         str.splice(i, 0, x);
//     }
// }
// doPerm('', []);
// console.log(permutations);

// // Heaps Method of Permutations 

// function swap(chars, i, j) {
//     var tmp = chars[i];
//     chars[i] = chars[j];
//     chars[j] = tmp;
// }

// function getAnagrams(input) {
//     var counter = [],
//         anagrams = [],
//         chars = input.split(''),
//         length = chars.length,
//         i;

//     for (i = 0; i < length; i++) {
//         counter[i] = 0;
//     }

//     anagrams.push(input);
//     i = 0;
//     while (i < length) {
//         if (counter[i] < i) {
//             swap(chars, i % 2 === 1 ? counter[i] : 0, i);
//             counter[i]++;
//             i = 0;
//             anagrams.push(chars.join(''));
//         } else {
//             counter[i] = 0;
//             i++;
//         }
//     }

//     return anagrams;
// }

//====================================================
function getPermutations(str){
    //Enclosed data to be used by the internal recursive function permutate():
    var permutations = [],  //generated permutations stored here
        nextWord = [],      //next word builds up in here     
        chars = []          //collection for each recursion level
    ;
    //---------------------
    //split words or numbers into an array of characters
    if (typeof str === 'string'){
        chars = str.split('');   
    } 
    else if (typeof str === 'number') {
      str = str + ""; //convert number to string
      chars = str.split('');//convert string into char array
    }
    //============TWO Declaratives========
    
        permutate(chars);

    return permutations;
    //===========UNDER THE HOOD===========
    function permutate(letters){ //recursive: generates the permutations
        
            if(nextWord.length > 0){
                permutations.push(nextWord.join(''));                
            }
            
        
        for (var i=0; i < letters.length; i++){
            
            letters.push(letters.shift());  //rotate the characters // This removes first character and pushes it onto the back of the array 
            
            nextWord.push(letters[0]);    //use the first char in the array            
            
            permutate(letters.slice(1));  //Recurse: array-less-one-char  
            
            nextWord.pop();             //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============

console.log("This is the answer ",getPermutations('abc'));

//getPermutations('abc'); 

// if length of chars is zero -> join letters together and push result to an array

// else 

// 1) push beginning char to end of string 
// 2) push the new 0th char to a collection array 
// 3) run algorithm again with what is left in the array 


 














