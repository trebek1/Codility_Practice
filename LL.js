function Node(val){
	this.value = val; 
	this.next = null; 
	return this; 
}

function LL(){
	this.head = null; 

	return this; 
}
	
LL.prototype.insert = function(val){
	var node = new Node(val); 
	if(!this.head){
		this.head = node; 
	}else{
		var currentNode = this.head; 
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = node; 
	}
}

LL.prototype.insertCycle3 = function(val){
	var node = new Node(val); 

		var currentNode = this.head; 
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = node; 
		node.next = this.head.next.next.next; 
		
		
	

}

LL.prototype.insertN = function(val, pos){
	var temp;
	var count = 0; 
	var prev; 
	var currentNode = this.head; 
	var node = new Node(val); 
	// Insert at beginning of list 
	if(pos === 1){

		temp = this.head; 
		this.head = node; 
		this.head.next = temp; 

	}else{ // Insert somewhere other than beginning of list 

		while(count < pos){
			if(count = pos -1){
				prev = currentNode; 
			}
			currentNode = currentNode.next; 
			count++; 

		}
		temp = currentNode; 
		currentNode = node;
		node.next = temp; 
		prev.next = node; 

	}

	console.log(this.head); 

}

LL.prototype.delete = function(){
	
	var current, sub;
	
	current = this.head;

	while(current.next !== null){
		sub = current.next; 
		current.next = null;
		current = sub;  

	}
	this.head = null;
}


var test = new LL(); 

test.insert(5);
test.insert(7); 
test.insert(10);
test.insert(15);
test.insert(20);
test.insert(50);
test.insert(70);
test.insert(80);
test.insert(90);
test.insert(100); 
//test.insertCycle3(1337);

//console.log("This is LL ", test); 

//test.delete(); 

//console.log("new list ", test); 


LL.prototype.nthEnd = function(num){

	var count = 0; 
	var current; 

	// If there is a linked list, count the nodes in the list 
	if(this.head !== null){
		console.log("here")
		count = 1; 
		current = this.head; 

		while(current.next !== null){
			
			current = current.next; 
			//console.log("here too!")
			count++; 
		}


	}else{
		console.log("Linked List is Empty!"); 
	}

	// traverse to nth node from the end of the list 
	if(count > num){
		console.log("This is count ", count);
		var j = 0; 
		var current = this.head; 
		while(j < (count-num)){
			current = current.next; 
			j++; 
		}
		console.log("END OF SEARCH ", current.value); 

	}else{
		console.log('List is not long enough!')
	}



}


//test.nthEnd(2)

// Check for cycle 

LL.prototype.cycle = function(){

	var slow = this.head, 
		fast = this.head,
		loop; 

	while(slow && fast && fast.next && fast.next.next){
		
		slow = slow.next; 
		fast = fast.next.next; 

		if(slow === fast){
			console.log("There is a cycle! ");
			loop = 1; 
			break; 
		}

	}
	
	if(loop){

		slow = this.head; 
		while(slow !== fast){
			console.log("This is slow ", slow);
			console.log("This is fast ", fast);
		
			fast = fast.next; 
			slow = slow.next; 
		}
		console.log("winner ", slow)
		return slow; 
	}

	console.log("there is no cycle!"); 
	loop = 0; 
	return 0

}


//test.cycle(); 

//reverse a linked list 

LL.prototype.reverse = function(){
	var nextNode,
		node = this.head, 
		temp = null; 
	while(node !== null){
		
		nextNode = node.next; // save next node 
		node.next = temp; // set next node equal to temp (null for first one)
		temp = node; // set temp equal to the node you are at 
		node = nextNode; // set node that you are at to next node 
		console.log("This is node ", node);
	}

	this.head = temp; // after going through nodes, reset the head of the LL to the new head located in temp (last temp is last value)
	
	//console.log(this.head.next.next); 
	//console.log(this.head.next.next.next); 

}

console.log("This is test ", test); 

test.reverse(); 

console.log("This is the reversed List ", test.head);








