// var tree = function(leafs) {
//     var branches = [];      
//     if( leafs.length == 1 ) return leafs;       
//     for( var k in leafs ) {
//         var leaf = leafs[k];
//         tree(leafs.join('').replace(leaf,'').split('')).concat("").map(function(subtree) {
//             branches.push([leaf].concat(subtree));
//         });
//     }
//     return branches;
// };
// console.log(tree("abc".split('')).map(function(str){return str.join('')}))

// OR 

var combinations = function (string)
{
    var result = [];

    var loop = function (start,depth,prefix)
    {   

        for(var i=start; i<string.length; i++)
        {
            console.log("this is i ", i);
            var next = prefix+string[i];
            console.log("This is next ", next); 
            
            if (depth > 0){
                loop(i+1,depth-1,next);
            }   
            else{

                result.push(next);
            }
        }
    }

    for(var i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
}

console.log("combinations ", combinations('abc'));

// Modified to maintain the test length 

// var tree = function(leafs) {
//     var branches = [];      
//     if( leafs.length == 1 ) return leafs;       
//     for( var k in leafs ) {
//         var leaf = leafs[k];
//         tree(leafs.join('').replace(leaf,'').split('')).concat("").map(function(subtree) {
//             branches.push([leaf].concat(subtree));
//         });
//     }
  
//     return branches;
// };

// var finalstring = tree(test.split('')).map(function(str){return str.join('')})

// var test = "abcdef"; 

// var f = []; 
// for(var i =0; i<finalstring.length; i++){
      
//       if(finalstring[i].length===6){
          
//           f.push(finalstring[i]);
//       }
//   }

// console.log(f); 
// console.log(f.length)



// function combinations(str) {
//     var fn = function(active, rest, a) {
//         if (!active && !rest)
//             return;
//         if (!rest) {
//             a.push(active);
//         } else {
//             fn(active + rest[0], rest.slice(1), a);
//             fn(active, rest.slice(1), a);
//         }
//         return a;
//     }
//     return fn("", str, []);
// }




