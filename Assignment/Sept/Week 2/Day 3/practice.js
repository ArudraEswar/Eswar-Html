const n = 10;
let sum = 0;
for(let i = 0; i <= n; i++){
  sum += i;
}
console.log(sum);

const m = 15;
let add = 0;
for(let j = 0; j <= m; j++){
  add += j;
}
console.log(add);

const p = 20;
let addi = 0;
for(let k = 0; k <= p; k++){
    addi += p;
}
console.log(addi);

const l = 5;
let factorial = 1;
for (let o = 1; o <= l; o++) {
  factorial *= o;
}
console.log(factorial);

const b = 9;
let factor = 1;
for (let j = 1; j <= b; j++) {
    factor *= j;
}
console.log(factor);

const h = 7;
let first = 0, second = 1, next;
console.log(first);
console.log(second);
for(let i = 2; i < h; i++){
    next = first + second;
    console.log(next);
    first = second;
    second = first;
}

const r = 6;
for (let i = 1; i <= 10; i++){
  console.log(`${r} x ${i} = ${r * i}`)
}

const input = "ARUDRA";
let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}
console.log(reversed);

const inp = "Eswar";
let reverse = "";
for (let j = inp.length -1; j >= 0; j--) {
  reverse += inp[j];
}
console.log(reverse);

const result = "HIRA";
let rev = "";
for (let k = result.length - 1; k >= 0; k--){
    rev += result[k];
}
console.log(rev);