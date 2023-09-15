function reversestring(input){
    let reversed="";
    for(let i=input.length-1; i>=0; i--){
        reversed+=input[i];
    }
    return reversed;
}
let input="RUDRA"
console.log(reversestring(input));

function findmax(numbers){
    let largest = numbers[0];
    for (let j = 0; j <= numbers.length; j++) {
      if (numbers[j] > largest) {
        largest = numbers[j];
      }
    }
    return largest; 
    }
    const numbers = [7, 21, 59, 11, 5];
    console.log(findmax(numbers));

function countChar(str,c){
    let res = 0;
    for (let i =0; i < str.length -1; i++ ){
        if(str.charAt(i) == c)
        res++;
        }
        return res;
    }
    let str = "arudra Eswar";
    let c = "a";
    console.log(countChar(str,c));