const name1 = "js string exercises";
const firstletter = name1[0]. toUpperCase();
const newName = firstletter + name1.slice(1);
console.log(newName);

const name2 = "Js string exercises";
const firstLetter = name1[0]. toLowerCase();
const newNAme = firstLetter + name1.slice(1);
console.log(newNAme);

const mobile = "8374976637";
const last3digit = mobile.slice(-3);
const mobilenumber = last3digit.padStart(10,"*");
console.log(mobilenumber);

const number = "12345678910111213141516";
const lastdigit = number.slice(-3);
const newNumber = lastdigit.padStart(20,"*");
console.log(newNumber);

const name3 = "Robin Singh";
console.log(name3.slice(0,4));
