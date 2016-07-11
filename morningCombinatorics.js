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