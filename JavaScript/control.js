let a = 10, b =20;
if(a>b){
    console.log("a is big");
}
else{
    console.log("b is big"); 
}                                  //if else

let c = 100, d =20;
if(c>d){
    console.log("c is big");
}
else{
    console.log("d is big"); 
}                                    // if else
 
let e = 10, f =20; g = 30;
if(e>f){
    console.log("e is big");
}
else if(g>f){
    console.log("g is big");
}
else{
    console.log("f is big");
}                                     // if else ladder

// switch statements

switch(a){
    case 10: console.log("value is 10");
    break;
    case 20: console.log("value is 20");
}

switch(b){
    case 10: console.log("value is 10");
    break;
    case 20: console.log("value is 20");
}

switch(c){
    case 10: console.log("value is 10");
    break;
    case 20: console.log("value is 20");
    break;
    default: console.log("let's learn js no matching case");
}