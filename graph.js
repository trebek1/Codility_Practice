// var a = {a:10,b:20}


// get = function(a){
//     return ('a' in a); 
// }

// get(a);


// DICTIONARY (HASH TABLE)
var Dictionary = function (){
    this.items = {};
    return this; 
}

//has(key): This returns true if the key exists in the dictionary and false otherwise.
Dictionary.prototype.has = function(key){
    return key in this.items;
};

//set(key,value): This adds a new item to the dictionary.
Dictionary.prototype.set = function(key, value){
    this.items[key] = value; 
};

//remove(key): This removes the value from the dictionary using the key.
Dictionary.prototype.remove = function(key){
    if (this.has(key)){
        delete this.items[key];
        return true;
    }
    return false;
};

//get(key): This returns a specific value searched by the key.
Dictionary.prototype.get = function(key) {
    return this.has(key) ? this.items[key] : undefined;
};

//values(): This returns an array of all the values of the dictionary.
Dictionary.prototype.values = function(){
    var values = [];
    for (var k in items) { 
        if (this.has(k)) {
            this.values.push(items[k]); 
        }
    }
    return values;
};

// returns entire items variable 
Dictionary.prototype.getItems = function(){
    return this.items;
}

// GRAPH DATA STRUCTURE 
var Graph = function() {
    this.vertices = []; 
    this.adjList = new Dictionary(); 
    return this; 
}

// ADD A VERTEX TO THE GRAPH
Graph.prototype.addVertex = function(v){
    this.vertices.push(v); 
    this.adjList.set(v, []); 
    
};

// ADD AN EDGE TO THE GRAPH 
Graph.prototype.addEdge = function(v, w){
    this.adjList.get(v).push(w); 
    this.adjList.get(w).push(v); 
};


var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; 

for (var i=0; i<myVertices.length; i++){ 
    graph.addVertex(myVertices[i]);
}
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

// TURN THE GRAPH INTO A STRING REPRESENTATION
Graph.prototype.toString = function(){
    var s = '';
    for (var i=0; i<this.vertices.length; i++){ 
        s += this.vertices[i] + ' -> ';
        var neighbors = this.adjList.get(this.vertices[i]); 
        for (var j=0; j<neighbors.length; j++){ 
            s += neighbors[j] + ' ';
        }
        s += '\n'; 
    }
    return s;
};

// LOG THE STRING TO THE CONSOLE TO SEE THE GRAPH 
console.log(graph.toString());








