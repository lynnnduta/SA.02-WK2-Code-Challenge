function generateArray(start, end) {
    const result = [];
  
    // Iterate from the start to the end number
    for (let i = start; i <= end; i++) {
            result.push(i);
    }
  
    // Return the result
    return result;
  }
  
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7));