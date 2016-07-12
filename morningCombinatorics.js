// combinations 

var findCombs = function(string){
	
	var results  = []; 
	
	var loop = function(start,depth,prefix){
		for( var j = start; j<string.length; j++ ){
			var next = prefix + string[j];
			
			if(depth > 0){
				loop(j+1, depth-1, next); 
				
			}else{
				// depth = 0 
				results.push(next);
			}
		}
		
		
	}
	
	
	for(var i =0; i< string.length; i++){
		loop(0,i,'');
	}
	
	
	return results; 
}


console.log("here are the combs for abc ", findCombs('abc'))

var getPerms = function(string){
	var permutations = [], 
		newWord = [], 
		newString = string + '',
		chars = newString.split(''); 
		
		var permute = function(letters){
			if(newWord.length > 0){
				permutations.push(newWord.join());
			}	
			for(var i = 0; i<letters.length; i++){
				letters.push(letters.shift());
				newWord.push(letters[0]);
				permute(letters.slice(1)); 
				newWord.pop(); 
			}
		}
		
		permute(chars);
		
		return permutations; 
}

getPerms('123');