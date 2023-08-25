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

const name4 = "Arudra Eswar";
const firstLEtter = name4[0].toLowerCase();
const NewName = firstLEtter + name4.slice(1);
console.log(NewName);

const mobi = "9030841291";
const first4digit = mobi.slice(4);
const hidemobi = first4digit.padStart(10,"*");
console.log(hidemobi);

const dad = "9490552626";
const last4digit = dad.slice(-4);
const Newdad = last4digit.padStart(10,".");
console.log(Newdad);

const mom = "7702055365";
const hide2digits = mom.slice(-2);
const momnum = hide2digits.padStart(10,"!");
console.log(momnum);


const emailID = "lavanyalahari23@gmail.com";
const splitID = emailID.split("@");
console.log(splitID);
const hideID = splitID[0].slice(0,4)+"...@"+splitID[1];
console.log(hideID);

const emailID1 = "javahar_nehru.256@gmail.com";
const splitEID = emailID1.split("@");
const hideEm = `${splitEID[0].slice(0,4)}......@${splitEID[1]}`;
console.log(hideEm);


