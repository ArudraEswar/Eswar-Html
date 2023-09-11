// Write a program to find the largest element in an array using a `for` loop.

const numbers = [7, 2, 9, 1, 5];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest); 

const number = [10, 12, 11, 5, 50];
let largest1 = number[0];
for (let j = 1; j < number.length; j++){
    if (number[j] > largest1) {
        largest1 = number[j];
    }
}
console.log(largest1);

const numbers1 = [10, 15, 17, 58, 64];
let largest2 = numbers1[0];
for (let k = 1; k < numbers.length; k ++){
  if (numbers1[1] = largest2){
    largest2 = numbers1[k];
  }
}
console.log(largest2);
