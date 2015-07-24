var test1 = 'abacadabra'; 
var test2 = 'penguin'; 

var words = [test1, test2]; 

var hash = function(word){
    var ob = {}; 
    for(var i =0; i<word.length; i++){
        
        for(var j =0; j<word[i].length; j++){
            // check if letter in hash
            // if not initialize to 1 
            // else add 1 to key 
            
            if(!(word[i][j] in ob)){
                ob[word[i][j]] = 1; 
            }
            else{
                ob[word[i][j]]++ 
            }
            
        }
        
    }
       var results = []; 
       
    for( var x in ob){
        console.log("This is x ", ob[x])
        if(ob[x] === 1){
            results.push(x);
        }
    }
    return results
}

hash(words); 