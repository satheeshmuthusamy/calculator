function alert(){
   console.log("Welcome to js");
}
function calc(opt){
    let a = document.getElementById("first").value;//.value is to store the value
     let b = document.getElementById("second").value;
     let out;
     if((opt=='add')){
         out=`sum of two number is ${Number(a)+Number(b)}`;
     } else if((opt=='sub')){
        out=`sub of two number is ${Number(a)-Number(b)}`; 
     }
     else if(opt=='mul'){
        out=`Multiplication of two number is ${Number(a)*Number(b)}`;  
     }else if(opt=='div'){
        out=`Division of two number is ${Number(a)/Number(b)}`;   
     }
     else{
         out="error";
     }
     document.getElementsByClassName('output')[0].innerText=out;
}


// function add(){
//     let a = document.getElementById("first").value;//.value is to store the value
//     let b = document.getElementById("second").value;
//     let out=Number(a)+Number(b);
//     document.getElementsByClassName('output')[0].innerHTML=`sum of two number is ${out}`;
// }
// function sub(){
//     let a = document.getElementById("first").value;//.value is to store the value
//     let b = document.getElementById("second").value;
//     let out=Number(a)-Number(b);
//     document.getElementsByClassName('output')[0].innerHTML=`subract of two number is ${out}`;
// }
// function mul(){
//     let a = document.getElementById("first").value;//.value is to store the value
//     let b = document.getElementById("second").value;
//     let out=Number(a)*Number(b);
//     document.getElementsByClassName('output')[0].innerHTML=`Multiply of two number is ${out}`;
// }
// function div(){
//     let a = document.getElementById("first").value;//.value is to store the value
//     let b = document.getElementById("second").value;
//     let out=Number(a)/Number(b);
//     document.getElementsByClassName('output')[0].innerHTML=`Division of two number is ${out}`;
// }