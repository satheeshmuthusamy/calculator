//by default function
var a=10;
var b=20;
console.log(add(a,b));
function add(a,b){
    return a+b;
}
var a;
//output
30//js compiles the same code in linear way
//it do's all the  declaration and starts the assignments
var a;
a=10;
var b=20;
console.log(add(a,b));
function add(a,b){
    return a+b;
}//this concept is called as a hoisting concept