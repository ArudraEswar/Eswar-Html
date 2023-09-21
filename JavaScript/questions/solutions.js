// 4 
function getUnique(arr){
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];
getUnique(array);

let arr = ["ramya", "eswar", "eswar","divya",
          "maneeh", "naveen", "naveen"];
  
function removeDuplicates(arr) {
    return arr.filter((item,  index) =>
       
        arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// 3
function countChar(str,x){
    let res = 0;
    for (let i =0; i <= str.length; i++ ){
        if(str.charAt(i) == x)
    res++;
    }
    return res;
}
let str = "arudra eswar";
let x = "a";
console.log(countChar(str,x));

// 1
function reversestring(input){
    
    let reversed="";
    for(let i=input.length-1; i>=0; i--){
        reversed+=input[i];
    }
    return reversed;
}
let input="hello"
console.log(reversestring(input));

//2
function findmax(numbers){
    let largest = numbers[0];
    for (let i = 0; i <= numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest; 
    }
    const numbers = [7, 2, 9, 11, 5];
    console.log(findmax(numbers));

// 5
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

let string="madam"
const value = checkPalindrome(string);
console.log(value);

// 6
function getUniqueAfterMerge(arr1, arr2){
    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for (let i=1; i<arr.length; i++){
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
    }
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 5]
    getUniqueAfterMerge(array1, array2);

    // 7
    function capitalizeFirstLetter(str2){
        const str1=str2.charAt(0).toUpperCase()+str2.slice(1);
        return str1;
        }
        let str2 = "eswar";
        console.log(capitalizeFirstLetter(str));

// 8
function countWords(sentence){
    let  words= sentence.split(" ");
   
    let words2=words.length;
    return words2;
 
 }
 let sentence="hi am arudra eswar";
 console.log(countWords(sentence));

 // 9

function reverseWords(sentence1){
    let  words1= sentence1.split(" ");
    reversed=" ";
    for(let i= words1.length-1; i>=0;i--){
       reversed+=words1[i]+" ";
    }
    return reversed;
}
 let sentence1 ="hi am arudra eswar";
 console.log (reverseWords(sentence1));

 // 10

 function removeVowels(str3) {
    return str3.replace(/[aeiou]/gi, '');
    }

  let str3 = "apple umbrella egg ink ox";
console.log(removeVowels(str3));

// 11
function isAnagram(str10,str20){
    let x=str10.split('');
    let y=str20.split('');
    let a=x.length;
    let b=y.length;
    console.log(a);
    console.log(b);
    let x1=x.sort(); 
    console.log(x1);
    let y1=y.sort();
    console.log(y1);
 
    for (let i = 0; i < a ; i++)
    if (x1[i] != y1[i])
       return false;
    return true;
 }
    let str10="listen";
 let str20="silent";
 console.log(isAnagram(str10,str20));

 // 12
 function sumarray(arr5){
    let sum=0;
    
    for(let i=0; i<arr5.length; i++)
    sum += arr5[i];
    return sum;
}
let arr5=[6, 5, 4, 7];
console.log(arr5.length);
console.log(sumarray(arr5));

// 13
function findmin(numbers3){
    let smallest = numbers3[0];
    for (let i = 0; i <= numbers3.length; i++) {
      if (numbers3[i] < smallest) {
        smallest = numbers3[i];
      }
    }
    return smallest; 
    }
    const numbers3 = [7, 2, 9, 11, 5];
    console.log(findmin(numbers3));

// 14
function avg(numbers4){
    let sum=0;
    for (let i=0; i<numbers4.length; i++)
    {
     sum += numbers4[i];
       }
    let avg=sum/numbers4.length;
    return avg;
    }
    const numbers4=[4,10];
    console.log(avg(numbers4));

// 15
function rotatearrya1(nums,k){
    for(let i=0; i<k; i++){
       nums.unshift(nums.pop());
    }
    return nums;
 }
 let k=3;
 let nums=[1,2,3,4,5];
 console.log(rotatearrya1(nums,k));

 // 16
 function removeFalsy(Values){
    return Values
    .filter(value=> !!value);
}
let Values = [0, 1, false, true, "", "hello", undefined];
console.log(removeFalsy(Values));

//17
function findIndex(arr6){
    const  index =arr6.indexOf(i);
    return index;
    }
   let i='orange';
    let arr6=["banana","apple","orange","cherry"];
    console.log(findIndex(arr6));

// 18
function evenarray(arr7){
    let evens = arr7.filter(x=> x % 2 === 0);
    return evens;
}
let arr7 = [1, 2, 3, 4,5];
console.log(evenarray(arr7));

// 19
let arry = [1, 2, 1, 3, 4, 3, 5];

let toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
let duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);

// 20
function findIntersection(arr11,arr21){
    let intersected=
    arr11.filter(x => arr21.includes(x));
    return intersected;
}
let arr11=[1,2,3,4,5];
let arr21=[3,4,5,6,7];
console.log(findIntersection(arr11,arr21));

// 31
function findIndex(arr8){
    let n = 5;
    const  index = arr8.indexOf(n);
    return index;
    }
   let arr8 = [1,2,3,4,5,6,7,8,9];
   console.log(findIndex(arr8));

// 36
function Fn_count_Vowels(str) { 
    let count = str5.match(/[aeiou]/gi).length;
    return count;
    }
    
    let str5 = "Hello World";
    console.log( Fn_count_Vowels(str5));

// 37

function findLongestWord(string8){
    let words=string8.split(' ');
    console.log(words);
    let x=words.length;
    console.log(x);
    let longest ="";
    console.log(longest);
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest; 
    }
    const string8 ="This is a simple sentence" ;
    console.log(findLongestWord(string8));

// 41
function filterWordsByLength(strings,l){
    const result=strings.filter(strings=>strings.length==l);
    return result;
    }
    let l=6;
    let strings=['sonu','harshit','ram','writer','vinay'];
    console.log(filterWordsByLength(strings,l));

// 43
function filterOddNumbers(numbers7){
    let odds =numbers7.filter(x=> x % 2 !== 0);
    return odds;
}
let numbers7 = [1, 2, 3, 4,5];
console.log(filterOddNumbers(numbers7));




