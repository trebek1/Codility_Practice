// graphs 

var Graph = function(){
	
	this.verticies = []; 
	this.adjList = {}; 
	
	return this; 
}; 

Graph.prototype.addVertex = function(val){
	this.verticies.push(val); 
	this.adjList[val] = []; 
};

Graph.prototype.addEdge = function(v1,v2){
	this.adjList[v1].push(v2); 
	this.adjList[v2].push(v1); 
	
};

// create a graph 
var graph = new Graph(); 

// add verticies; 
var myVertices = ['A','B','C','D','E','F','G','H','I']; 
console.log("this is graph ", graph)
for (var i=0; i<myVertices.length; i++){ 
    graph.addVertex(myVertices[i]);
    
}
// add edges 
graph.addEdge('A', 'B'); 
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log("this is graph ", graph)

Graph.prototype.toString = function(){
	var s = ''; 
	
	for(var i = 0; i<this.verticies.length; i++){
		var v = this.verticies[i];
		s+= v + " --> ";
		var neighbors = this.adjList[v];
		
		for(var k = 0; k<neighbors.length; k++){
			s+= neighbors[k] + ' ';
		}
		s+= '\n';
	}
	
	return s; 
};

console.log(graph.toString());











