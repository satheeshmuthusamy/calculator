// //global scope
// //local scope
// var a=10;//global scope
// function add(){//clouser==>local scope
//     var b=20;
//     return a+b;//a is accessable anywhere
// }
// console.log(">>add>>",add())
// console.log(">>a>>",a)
// console.log(">>b>>",b);
// // >>add>> 30
// // VM66:9 >>a>> 10
// // b will not printed
// //cmd prompt >cd Desktop/path of the folder/node file name
//function by default restricts the scope
//Ex2
var a=29;
for(i=0;i<5;i++){
    var b=33;//use let to restrict
    console.log(">>add>>",a+b+i);
}
console.log('>>a>>',a);
console.log('>>b>>',b);
console.log('>>add>>',a+b);
//output
C:\Users\ELCOT\Desktop\cal C>node 25clousers.js
>>add>> 62
>>add>> 63
>>add>> 64
>>add>> 65
>>add>> 66
>>a>> 29
>>b>> 33
>>add>> 62//forloops and conditions bydefault doesnot make the clousers