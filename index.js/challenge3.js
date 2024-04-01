
function isPrimeNumber(numbers){
    //if the number is less than 2
    if (num < 2) return false;
  for (let i = 2; i <=numbers; i++) {
    //if the number is divisible by any nmber it is not prime
    if (num % i === 0) return false;
  }
  return true;
}

function filterisPrimenumber(numbers) {
  return numbers.filter(isPrimeNumber);
}
const numbers =[,2,3,4,5,6,7,8,9,10]

console.log(isPrimeNumber(1,2,3,4,5,6,7,8,9,10));



