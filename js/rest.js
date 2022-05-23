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

//spread
var data=[1,2,3,4];
function add(...args){
    let out=0;
    for(data of args){
        out+=data;
    }
   return out
}
add(...data)//spread
10

var a=[1,2,3];
var b=['ram','raj',...a,'kane'];

(6) ['ram', 'raj', 1, 2, 3, 'kane']//we can combine a inside b with this spread method

if ... is used as function defenition is called rest
if ... is used in calling function is called spread

