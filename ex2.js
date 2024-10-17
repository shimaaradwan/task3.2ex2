function getLargestNumber(arr) {
    let largest = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; 
      }
    }
  
    return largest;
  }
  
  const numbers = [10, 45, 6, 89, 23, 67];
  const largestNumber = getLargestNumber(numbers);
  document.getElementById("demo").innerHTML = getLargestNumber(numbers);
