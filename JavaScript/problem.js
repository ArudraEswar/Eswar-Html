
function evenarray(arr){
    let evens = arr.filter(x=> x % 2 === 0);
    return evens;
}
let arr = [1, 2, 3, 4,5];
console.log(evenarray(arr));


