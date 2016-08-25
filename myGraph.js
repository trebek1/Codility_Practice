var Graph = function(){
	this.vertexList = [], 
	this.edgeList = new Map(); 
	return this; 
};

Graph.prototype.addVertex = function(v){
	this.vertexList.push(v); 
	this.edgeList[v] = []; 
};

Graph.prototype.addEdge = function(v1,v2){
	this.edgeList[v1].push(v2); 
	this.edgeList[v2].push(v1); 
};

Graph.prototype.color = function(){
	var color = []; 
	
	for(var i = 0; i<this.vertexList.length; i++){
		var v = this.vertexList[i]; 
		color[v] = 'white';
	}
	
	return color;
};

//Lets Build a Graph 

// **start**

// build a Graph
var graph = new Graph(); 

//Add some verticies 
var verticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for(var i = 0; i<verticies.length; i++){
	var v = verticies[i];
	graph.addVertex(v);
}

// add some edges 
graph.addEdge('A','B'); 
graph.addEdge('A','C'); 
graph.addEdge('A','D'); 
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('C','D'); 
graph.addEdge('C','G'); 
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('E','I'); 

//Print the graph to see if everything is working 

Graph.prototype.print = function(){
	var verticies = this.vertexList,
		s = "";
	
	for(var i = 0; i<verticies.length; i++){
		var v = verticies[i],
			neighbors = this.edgeList[v]; 
		s+= v + ' ---> '; 
		for(var k = 0; k<neighbors.length; k++){
			s+= neighbors[k] + ' '; 
		}
		s+= '\n'; 
	}
	
	return s; 
};

console.log(graph.print()); 

//BFS 

Graph.prototype.bfs = function(){
	var vert = this.vertexList[0],
		color = this.color(), 
		queue = []; 
		
	queue.push(vert);
	
	while(queue.length > 0 ){
		var v = queue.shift(); 
		color[v] = 'grey'; 
		console.log(v);
		
		var neighbors = this.edgeList[v]; 
		
		for(var i = 0; i<neighbors.length; i++){
			var n = neighbors[i]; 
			if(color[n] === 'white'){
				queue.push(n); 
				color[n] = 'grey'; 
			}
		}
		color[v] = 'black'; 
	}

	
};

console.log(' ');
graph.bfs(); 
console.log(' '); 

Graph.prototype.dfs = function(){
	var color = this.color(); 
	
	for(var i = 0; i<this.vertexList.length; i++){
		var v = this.vertexList[i];
		if(color[v] === 'white'){
			this.dfsVisit(v,color);
		}
	}
};

Graph.prototype.dfsVisit = function(v,color){
	color[v] = 'grey'; 
	console.log(v);
	var neighbors = this.edgeList[v]; 
	
	for(var i = 0; i<neighbors.length; i++){
		var n = neighbors[i]; 
		if(color[n] === 'white'){
			this.dfsVisit(n, color); 
		}
	}
	
};

graph.dfs(); 










