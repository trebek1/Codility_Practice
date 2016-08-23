
function BinaryTreeLCA(strArr) { 
var tree = strArr[0].replace(/[#]/g, '"#"'),
	num1 = JSON.parse(strArr[1]),
	num2 = JSON.parse(strArr[2]),
	tree = JSON.parse(tree),
	ind1 = tree.indexOf(num1) + 1, 
	ind2 = tree.indexOf(num2) + 1, 
	max = Math.max(ind1,ind2),
	min = Math.min(ind1,ind2);
	
	while(Math.trunc(Math.log2(max)) !== Math.trunc(Math.log2(min))){
    	max = Math.trunc(max / 2);
    }
    
    while(max !== min) {
      max = Math.trunc(max / 2);
      min = Math.trunc(min / 2);
    }
	
	return tree[max -1];
}
   

// keep this function call here 

BinaryTreeLCA(["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"]);               




function ShortestPath(strArr) { 
    
    var start = strArr[1];
    var nodes = parseInt(strArr[0]); 
    var end = strArr[nodes];
    var potentials = []; 
    var answer = -1; 
    
    // must start at first node. Find paths with first node in it 
    for(var i = nodes + 1; i<strArr.length; i++){
        if(start === strArr[i].slice(0,strArr[i].indexOf('-'))){
            potentials.push(strArr[i]);
        }
    }
    
    for (var i = 0; i<potentials.length; i++){
    		var test = process(strArr,potentials[i], '',answer);
    			console.log("this is test ", test);
    			if(test !== -1){
    				test = test.replace(/[-]/g,'');	
    			}
    	    	
    		
        if(typeof(test) === 'undefined'){
       
        }
        else if(answer === -1){
        	answer = test; 
        }else{
        	if(test.length < answer.length){
        		answer = test; 
        	}
        }
    }
	if(answer === -1){
		return -1;
	}else{
		return answer.split('').join('-');		
	}
         
}

function process(strArr, po, possible,answer){
	
	var nodes = parseInt(strArr[0]); 
    var end = strArr[nodes];
    
	possible += po;
	if(strArr.indexOf(po) !== nodes){
		
		for(var i = nodes + 1; i< strArr.length; i++){
			//(function(i){
				if(strArr[i].slice(0,strArr[i].indexOf('-')) === po.slice(po.indexOf('-') + 1)){
					console.log("what is this ",strArr[i].slice(strArr[i].indexOf('-') + 1))
					 process(strArr, strArr[i].slice(strArr[i].indexOf('-') + 1), possible, answer);
				}
				
			//})(i)
		}
	}
	if(possible.indexOf(end) !== -1){
		console.log('winner', possible)
		return possible; 	
	}else{
		//console.log("?")	
		return -1;
	}		
	
	
	
}
   
   
// keep this function call here 
ShortestPath(["6","A","B","C","Z","Y","Q","B-C","A-B","A-Z","C-Y","Z-Y","C-Q"]);                            





