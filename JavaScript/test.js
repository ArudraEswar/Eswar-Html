const amount=1000;
if(amount>100){
    console.log("I will purchase silk chocolate")
}

if(amount<100){
    console.log("I will purchase dairy milk chocolate")
}

const cost=100;
if(cost>=150){
    console.log("I will purchase chocobar chocolate")
}else if(cost>101) {
  console.log("I will purchase milkybar chocolate")
}else{
  console.log("I will purchase silk chocolate")
}

const calculator=(num1,num2,operator)=> {
 if(operator=="+"){
    console.log(num1+num2);
} else if(operator=="-"){
    console.log(num1-num2);
}else{
   console.log(num1*num2)
}
}

calculator(34,44,"*")

const calculator=(num1,num2,operator)=> {
  if(operator=="+"){
    return num1+num2;
} else if(operator=="-"){
    return num1-num2;
}else{
    return num1*num2;
}
}
    
const output = calculator(34,44,"*")
console.log(output);

const calculator=(num1,num2,operator)=> {
 if(operator=="+"){
 return num1+num2;
} else if(operator=="-"){
     return num1-num2;
}else{
  return num1*num2;
}
}
    
 const output = calculator(34,44,"+")
 console.log(output);


const name = "rakesh";
const std = 6;
if((name =="rakesh") & (std>5)){
   console.log("give him entry pass");
}

const uniform = "green";
const stdy = 4;
if((uniform=="green") | (stdy>6)){
   console.log("give him school bag")
}

const array1 = ["rajesh", "rakesh",22,33];
array1.push("suresh");
array1.push("maneesh");
array1.pop();
array1.shift();
array1.unshift(23);
array1[2] = "manish" ;
console.log(array1[2]);
console.log(array1);
console.log(array1);
const string1 = "Arudra Eswar";
console.log(string1);
console.log(string1[1]);

const string2 = "Robin Singh";
console.log(string2);

let text = "Please visit Microsoft";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText);

let text = "Please visit microsoft and every one has to follow microsoft website";
let newText = text.replace(/Microsoft/ig, "W3Schools");

console.log(newText);

const name1 = "js string exercises";
const firstletter = name1[0]. toUpperCase();
console.log("firstletter", firstletter);
const newName = firstletter + name1.slice(1);
console.log(newName);





