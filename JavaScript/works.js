const emailID = "eeswar117@gmail.com";
console.log(emailID);
const splitEmail = emailID.split("@");
console.log(splitEmail);
const hideEmail = splitEmail[0].slice(0,3)+"....@"+splitEmail[1];
console.log(hideEmail);

const emailID2 = "raga.sudha905@gmail.com";
console.log(emailID2);
const splitEmail1 = emailID2.split("@");
console.log(splitEmail1);
const hideEmail1 = splitEmail1[0].slice(0,5)+"....@"+splitEmail1[1];
console.log(hideEmail1);

let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
console.log(text);

let data = [];
for (let j = 5; j > 0; j--){
    data += j ;
} for (let j = 4; j >0; j--){
    data += j;
}
console.log(data);

