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


function HashTable(){
	this.table = new Array(137); 
	this.simpleHash = simpleHash; 
	this.showDistro = showDistro; 
	this.betterHash = betterHash;
	this.put = put; 


}

function put(data){
	var pos = this.betterHash(data); 
	this.table[pos] = data;
}

function showDistro(){
	var n = 0; 
	for(var i =0; i<this.table.length; i++){
		if(this.table[i] != undefined){
			console.log(i + ": " + this.table[i]);
		}
	}
}

function simpleHash(data){
	var total = 0; 
	for(var i=0; i<data.length; i++){
		total += data.charCodeAt(i); 
	}
	return total % this.table.length
}


function betterHash(string){ 
var H=31;
var total = 0;
for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
total = total % this.table.length; if(total<0){
total += this.table.length-1; }
return parseInt(total); 
}


var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 

var hTable = new HashTable();

for (var i = 0; i < someNames.length; ++i){ 
	hTable.put(someNames[i]);
}






