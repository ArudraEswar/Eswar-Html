function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function Divide(num1, num2){
    return num1 / num2;
}
function calculator(Operation, num1, num2){
    var result= Operation(num1, num2)
    console.log(result);
}

calculator(add, 2,3);
calculator(subtract, 3,1);
calculator(multiply, 8,7);
calculator(Divide, 9, 3);