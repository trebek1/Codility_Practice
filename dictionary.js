function Dictionary(){
	this.dataStore = {}; 
	this.add = add; 
	this.find = find; 
	this.remove = remove; 
	this.showAll = showAll; 
}

function add(key,value){
	this.dataStore[key] = value; 
}

function find(key){
	return this.dataStore[key]; 
}

function remove(key){
	delete this.dataStore[key]; 
}

function showAll(){
	var keys = Object.keys(book.dataStore); 
	console.log("This is keys ", keys)
	keys.sort(); 
	console.log("This is keys ", keys)
	for(var key = 0; key<keys.length; key++){
		console.log(keys[key] + " -> " + this.dataStore[keys[key]]);
	}
}

var book = new Dictionary();

book.add('alex', 'tron'); 
book.add('john', 'williams'); 
book.add('axewell', 'ingrosso'); 
book.add('jason', 'tingley'); 
book.add('bryan', 'hockey');
book.add(1,2); 

book.showAll(); 
book.remove(1);

book.showAll(); 











