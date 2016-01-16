
var integers = process.argv.slice(2);

console.log(integers);

function sumOfIntegers() {
  var sum = 0;
  var sumsArray = [];

  for( i = 0; i < integers.length; i++){    //nested for loop for index
    sum = 0;  
    for ( j = 0; j < integers.length; j++) {

     //if index is equal to j, ignore j and sum up the rest
      if ( i === j ){
        continue;
      } 
      sum += parseInt(integers[j]);
    }
    
    sumsArray.push(sum);
    console.log(sumsArray);
  }
}

sumOfIntegers();