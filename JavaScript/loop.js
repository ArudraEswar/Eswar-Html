//while loop

let a = 1;
while(a<3)
{
    console.log("a= "+ a);
    a++;
}

let b = 50;
while(b>0)
{
    console.log("b= "+ b)
    b--;
}

//Do While

let a = 0;
do{
   console.log("a="+a);
   a++;
} while(a<15);

for loop

for(a=1; a<=20; a++){
    console.log("page no is"+" "+a);
}

// jump statements

for(a=1; a<=20; a++){
    
    if(a==5){
        console.log("continue statement is occured")
        continue;
    }
        if(a==10){
            console.log("break statement is occured")
            break;
        }
        console.log("page no is"+" "+a);
}
