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

let c = 0;
do{
   console.log("c="+c);
   c++;
} while(c<15);

// for loop

for(d=1; d<=20; d++){
    console.log("page no is"+" "+d);
}

// jump statements

for(e=1; e<=20; e++){
    
    if(e==5){
        console.log("continue statement is occured")
        continue;
    }
        if(e==10){
            console.log("break statement is occured")
            break;
        }
        console.log("page no is"+" "+e);
}
