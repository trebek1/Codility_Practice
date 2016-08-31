// var table = {}; 

// table.a = "alex"; 
// table.n = "nick";
// table.d = 'david';
// table.y = 'yuriy'; 

// console.log("This is table ", table);

// for(key in table){
// 	console.log(table[key])
// }

// var t = new Map(); 

// t.set('v', 'victor'); 

// console.log("new table ", t); 


// function HashTable(){
// 	this.table = new Array(137); 
// 	this.simpleHash = simpleHash; 
// 	this.showDistro = showDistro; 
// 	this.betterHash = betterHash;
// 	this.put = put; 


// }

// function put(data){
// 	var pos = this.betterHash(data); 
// 	this.table[pos] = data;
// }

// function showDistro(){
// 	var n = 0; 
// 	for(var i =0; i<this.table.length; i++){
// 		if(this.table[i] != undefined){
// 			console.log(i + ": " + this.table[i]);
// 		}
// 	}
// }

// function simpleHash(data){
// 	var total = 0; 
// 	for(var i=0; i<data.length; i++){
// 		total += data.charCodeAt(i); 
// 	}
// 	return total % this.table.length
// }


// function betterHash(string){ 
// var H=31;
// var total = 0;
// for (var i = 0; i < string.length; ++i) {
//       total += H * total + string.charCodeAt(i);
//    }
// total = total % this.table.length; if(total<0){
// total += this.table.length-1; }
// return parseInt(total); 
// }


// var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 

// var hTable = new HashTable();

// for (var i = 0; i < someNames.length; ++i){ 
// 	hTable.put(someNames[i]);
// }

//MY IMPLEMENTATION OF HASH TABLE 

var HashTable = function(){
	this.table = Array(137); 	
};

HashTable.prototype.add = function(val){
	var entry = this.hashFunction(val); 
	this.table[entry] = val; 
	
};

HashTable.prototype.hashFunction = function(val){
	var sum = 0,
		H = 31; 
		
	for(var i = 0; i<val.length; i++){
		sum += H*sum + val[i].charCodeAt(); 
	}
	
	return sum % this.table.length;
};

HashTable.prototype.show = function(){
	var count = 0; 
	for(var i = 0; i<this.table.length; i++){
		if(this.table[i] !== undefined){
			console.log("key ---> value ", i, " ---> ", this.table[i]); 
			count++; 
		}		
	}
	return count; 
};

var a = new HashTable(); 

var people = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 

for(var i = 0; i<people.length; i++){
	a.add(people[i]);
}

a.show(); 







