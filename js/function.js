let a =20;
let b= 30;
a+b;
50;
//function adds the reusability
syntax
function functionname(parameters){
    return output;
}
function add(a,b){
    return(a+b);//a,b parameters
}
add(11,2)
13
add("Hi","javascript")
'Hijavascript'///we can use any datatype;


function add(a,b,c){
    return(a+b+c);
}
add(4,5,6)
15
add(8,-9,-7)
-8

odd ir even 

function oddoreven(userInput){
    if(userInput%2==0)
    {
        console.log(`The given number ${userInput} is even `);
    }else{
        console.log(`The given number ${userInput}is odd `);
    }
}
oddoreven(5);
The given number 5is odd //op
oddoreven(33);
VM202:6 The given number 33is odd//function in es5
function add(a,b){
    return(a+b)
}//es5 syntax

ES6;
let add=(a,b)=>{return a+b}
add(1,9)
10//es6 syntax

///rest
function add(...args){//...agrs used to give n number of inputs
    let out=0;
    for(data of args){
        out+=data;
    }
    return out;
}
add(1,2,3,4,5)//it canbe used for all operations
15//out 