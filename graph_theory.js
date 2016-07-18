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

// LOOP THROUGH VERTICIES ARRAY PRINTING WHITE FOR EACH ENTRY

Graph.prototype.initializeColor = function(){
    var color = [];
    for (var i=0; i<this.vertices.length; i++){
        color[this.vertices[i]] = 'white'; 
    }
    return color;
};

// QUEUE IN JS 

var Queue = function(){

    var items = [];

    this.enqueue = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length === 0;
    };

    this.clear = function(){
        items = [];
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        console.log(items.toString());
    };
}

// BFS IN JS : TAKES ROOT VERTICY IN VERTICY ARRAY IN V, CALLBACK IS FUNCTION TO PRINT OUT VISITED NODE 
Graph.prototype.bfs = function(v, callback){

    var color = this.initializeColor(), 
        queue = new Queue();       
   	// LOAD ROOT INTO QUEUE 
   	 queue.enqueue(v);              

    while (!queue.isEmpty()){      
        var u = queue.dequeue(),        
            // Looks at dictionary of Graph, if U is in graph, gets list of verticies 
            neighbors = this.adjList.get(u); 
            // color grey since they were looked at 
        color[u] = 'grey';                      
        // go through neighbors, turn grey and enqueue so that we can go through each of their neighbors if need be 
        for (var i=0; i<neighbors.length; i++){ 
            var w = neighbors[i];               
            if (color[w] === 'white'){      
                color[w] = 'grey';          
                queue.enqueue(w);               
            }
        }
        // color black and send to callback to be printed out 
        color[u] = 'black'; 
        if (callback) {     
            callback(u);
        }
    }
};

// where the vertex is printed 
function printNode(value){ 
    console.log('Visited vertex: ' + value); 
}

// implementation of a stack 

function Stack() {

    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length === 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };
}

// do a depth first search 
Graph.prototype.dfs = function(callback){
    // initialize color which sets all nodes to white 
    var color = this.initializeColor(); 
    // go through verticies, if white, (not touched yet, call dfsVisit, after looping, callback used to print)
    for (var i=0; i<this.vertices.length; i++){ 
        if (color[this.vertices[i]] === 'white'){ 
            this.dfsVisit(this.vertices[i], color, callback); 
        }
    }
};

Graph.prototype.dfsVisit = function(u, color, callback){
    // color grey for visited
    color[u] = 'grey'; 
    // callback prints to screen
    if (callback) {    
        callback(u);
    }
    // if neightbors get them
    var neighbors = this.adjList.get(u);         
    for (var i=0; i<neighbors.length; i++){ 
        var w = neighbors[i];               
    // loop through and if they havent been touched color them white 
        if (color[w] === 'white'){          
            this.dfsVisit(w, color, callback);   
        }
    }
    // after visit color them black 
    color[u] = 'black'; 
};

console.log("BFS"); 
graph.bfs(graph.vertices[0], printNode); 
console.log(" ");
console.log("DFS");
graph.dfs(printNode);


