var arr = [];
while(arr.length < 9){
    var r = Math.floor(Math.random() * 899) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

console.log(arr);
function findSecondLargestElem(arr){
    let first = -1 , second = -1;
    var smallest = arr[0]; 
		var secondSmallest = arr[1]; 


    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
         
            second = arr[i];
        }
    }
    console.log("Second Largest Number :" +second);
  
}
findSecondLargestElem(arr);
   
function findsecondSmallest(arr){

        var smallest = arr[0]; 
		var secondSmallest = arr[1]; 

        for(let i = 0; i <= arr.length-1; i++){
            if(arr[i] < smallest) {  
                smallest = arr[i];  
            }  
    
            if(arr[i] > smallest && arr[i] < secondSmallest ) { 
                secondSmallest = arr[i]; 
            } 
        } 
        
        console.log("Second smallest Number :" +secondSmallest);
       
    }        
    findsecondSmallest(arr)
