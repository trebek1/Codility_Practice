var tree = function(leafs) {
    var branches = [];      
    if( leafs.length == 1 ) return leafs;       
    for( var k in leafs ) {
        var leaf = leafs[k];
        tree(leafs.join('').replace(leaf,'').split('')).concat("").map(function(subtree) {
            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
};
console.log(tree("abc".split('')).map(function(str){return str.join('')}))

// OR 

var combinations = function (string)
{
    var result = [];

    var loop = function (start,depth,prefix)
    {
        for(var i=start; i<string.length; i++)
        {
            var next = prefix+string[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }

    for(var i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
}

// Modified to maintain the test length 

var tree = function(leafs) {
    var branches = [];      
    if( leafs.length == 1 ) return leafs;       
    for( var k in leafs ) {
        var leaf = leafs[k];
        tree(leafs.join('').replace(leaf,'').split('')).concat("").map(function(subtree) {
            branches.push([leaf].concat(subtree));
        });
    }
  
    return branches;
};

var finalstring = tree(test.split('')).map(function(str){return str.join('')})

var test = "abcdef"; 

var f = []; 
for(var i =0; i<finalstring.length; i++){
      
      if(finalstring[i].length===6){
          
          f.push(finalstring[i]);
      }
  }

console.log(f); 
console.log(f.length)



