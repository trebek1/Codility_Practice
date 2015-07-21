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