var arr = [2,10,5,3,1,7,2,1,3];
// BubbleSort

function bubble(arr){
	
	for(var k = 0; k<arr.length; k++){
		for(var i = 1; i<arr.length - k; i++){
			if(arr[i-1] > arr[i]){
				var temp = arr[i-1];
					arr[i-1] = arr[i];
					arr[i] = temp;
			}
		}	
	}
	return arr; 
}

//bubble(arr);
// selection Sort

function selectionSort(arr){
  var minIdx, temp;
      
  for(var i = 0; i < arr.length; i++){
    minIdx = i;
    for(var  j = i+1; j<arr.length; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
        
//selectionSort(arr);

function insertionSort(arr){
  var i, el, k;

  for(i = 1; i<arr.length; i++){
    el = arr[i];
    k = i;

    while(k>0 && arr[k-1]>el){
      arr[k] = arr[k-1];
      k--;
   }

   arr[k] = el;
  }

  return arr;
}

//insertionSort(arr);

function mergeSort(arr){
   if(arr.length <2)
      return arr;
   var mid = Math.floor(arr.length/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   //console.log("this is left and right ", left, right)
   return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
        
//console.log(mergeSort(arr));

function quickSort(arr, left, right){

  if(left < right){
    var pivot = right,
      partitionIndex = partition(arr, pivot, left, right);
    
    quickSort(arr,left, partitionIndex -1);
    quickSort(arr, partitionIndex + 1, right);    
  }

  return arr; 

  function partition(arr,pivot,left,right){

    var pivotValue = arr[pivot],
        partitionIndex = left; 

    for(var i = left; i<right; i++){
      if(arr[i] < pivotValue){
        swap(arr,i,partitionIndex);
        partitionIndex++; 
      }
    }
    swap(arr,right, partitionIndex); 

    return partitionIndex; 
  }

  function swap(arr,i,j){
    var temp = arr[i]; 
    arr[i] = arr[j]; 
    arr[j] = temp; 
  }

}



















