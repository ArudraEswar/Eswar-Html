// Write a program to check if a given number `n` is prime using a `for` loop.

const n = 7;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);


const m = 8;
let isprime = true;
for (let j = 2; j <= Math.sqrt(n); j++){
    if (m % j === 0){
        isprime = false;
        break;
    }
}
console.log(isprime);

const k = 9;
let inprime = true;
for (let l = 2; l <= Math.sqrt(k); l++){
    if (k % l === 0){
        inprime = false;
        break;
    }
}
console.log(inprime);