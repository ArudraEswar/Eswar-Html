// Time of Day Greeting:

let a = new Date();
let time = a.getHours();

if(time > 6 && time < 11){
    console.log("Good Morning!");
}
if(time > 12 && time < 17){
    console.log("Good Afternoon!");
}
if(time >18 && time < 23){
    console.log("Good Evening!");
}

// Leap Year

let year = 2020;
if ((year%4==0 && year%100!=0) || year%400==0){
    console.log("leap year")
}
else{
    console.log("not leap year")
}

let year1 = 2023;
if ((year1%4==0 && year1%100!=0) || year1%400==0){
    console.log("leap year")
}
else{
    console.log("not leap year")
}

// Positive, Negative or Zero

function num_p_n_z(x){
    if(x>0){
        return "positive";
    }
    else if(x<0){
        return "negative";
    }
    else{
        return "zero";
    }
}
let x = 2;
console.log(num_p_n_z(x));

// // Calculator Grade

// let score =70;
// if(score >= 90){
//     return "A";
// }
// else if(score <= 89 && score >= 80){
//     return "B";
// }
// else if(score <= 79 && score >= 70){
//     return "C";
// }
// else if(score <= 69 && score >= 60){
//     return "D";
// }
// else{
//     return "F";    
// }

// console.log(calculateGrade(score));

