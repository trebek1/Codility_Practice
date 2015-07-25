// var a = {a:10,b:20}


// get = function(a){
//     return ('a' in a); 
// }

// get(a);

var Dictionary = function (){
    this.items = {};
    return this; 
}

Dictionary.prototype.has = function(key){
    return key in this.items;
};

Dictionary.prototype.set = function(key, value){
    this.items[key] = value; //{1}
};

Dictionary.prototype.remove = function(key){
    if (this.has(key)){
        delete this.items[key];
        return true;
    }
    return false;
};

Dictionary.prototype.get = function(key) {
    return this.has(key) ? this.items[key] : undefined;
};

Dictionary.prototype.values = function(){
    var values = [];
    for (var k in items) { //{1}
        if (this.has(k)) {
            this.values.push(items[k]); //{2}
        }
    }
    return values;
};

Dictionary.prototype.getItems = function(){
    return this.items;
}

var Graph = function() {
    this.vertices = []; //{1}
    this.adjList = new Dictionary(); //{2}
    return this; 
}


Graph.prototype.addVertex = function(v){
    this.vertices.push(v); //{3}
    this.adjList.set(v, []); //{4}
    
};

Graph.prototype.addEdge = function(v, w){
    this.adjList.get(v).push(w); //{5}
    this.adjList.get(w).push(v); //{6}
};


var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}

for (var i=0; i<myVertices.length; i++){ //{8}
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

Graph.prototype.toString = function(){
    var s = '';
    for (var i=0; i<this.vertices.length; i++){ //{10}
        s += this.vertices[i] + ' -> ';
        var neighbors = this.adjList.get(this.vertices[i]); //{11}
        for (var j=0; j<neighbors.length; j++){ //{12}
            s += neighbors[j] + ' ';
        }
        s += '\n'; //{13}
    }
    return s;
};

console.log(graph.toString());

Graph.prototype.initializeColor = function(){
    var color = [];
    for (var i=0; i<this.vertices.length; i++){
        color[this.vertices[i]] = 'white'; //{1}
    }
    return color;
};

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

Graph.prototype.bfs = function(v, callback){

    var color = this.initializeColor(), 
        queue = new Queue();       
    queue.enqueue(v);              

    while (!queue.isEmpty()){      
        var u = queue.dequeue(),        
            neighbors = this.adjList.get(u); 
        color[u] = 'grey';                      
        for (var i=0; i<neighbors.length; i++){ 
            var w = neighbors[i];               
            if (color[w] === 'white'){      
                color[w] = 'grey';          
                queue.enqueue(w);               
            }
        }
        color[u] = 'black'; 
        if (callback) {     
            callback(u);
        }
    }
};


function printNode(value){ 
    console.log('Visited vertex: ' + value); 
}



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

Graph.prototype.dfs = function(callback){
    var color = this.initializeColor(); //{1}

    for (var i=0; i<this.vertices.length; i++){ //{2}
        if (color[this.vertices[i]] === 'white'){ //{3}
            this.dfsVisit(this.vertices[i], color, callback); //{4}
        }
    }
};

Graph.prototype.dfsVisit = function(u, color, callback){
    color[u] = 'grey'; //{5}
    if (callback) {    //{6}
        callback(u);
    }
    var neighbors = this.adjList.get(u);         //{7}
    for (var i=0; i<neighbors.length; i++){ //{8}
        var w = neighbors[i];               //{9}
        if (color[w] === 'white'){          //{10}
            this.dfsVisit(w, color, callback);   //{11}
        }
    }
    color[u] = 'black'; //{12}
};

console.log("BFS"); 
graph.bfs(this.myVertices[0], printNode); 
console.log(" ");
console.log("DFS");
graph.dfs(printNode);


