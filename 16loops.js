types of loops

for loop
while
do while 
for of 
for in(object)

//for loop ==>iterate over the arary and can generate the series of values
syntax 
for(i=0;i<n;i++){
    console.log(i);
}
let a=10;
undefined
for(i=0;i<=a;i++){
    console.log(i);
}
0
1
2
3
4
5
6
7
8
9
10

//for loop over array
let city =["hai","hellp","doller","money"];
for(i=0;i<city.length;i++){
    console.log(city[i]);
}
VM3127:3 hai
VM3127:3 hellp
VM3127:3 doller
VM3127:3 money

/// nested array prints
let myarray=["dubai","Mumbai",["red","yellow","green","blue"],"london","venice"];
for(i=0;i<myarray.length;i++){
    if(Array.isArray(myarray[i])){
        for(j=0;j<myarray[i].length;j++){
            console.log(myarray[i][j]);
        }
    }else{
        console.log(myarray[i]);
    }
}
dubai//output
Mumbai
red
yellow
green
blue
london
venice

//while loop
syntax
while(condition){
    console.log();//statements
}
ex;
var i=0;
while(i<=5){
    console.log(i);
    i++;
}
0
 1
 2
 3
 4
 5
 5

 //do while loop
 var a=5;
 var i=0;
 do{
     console.log(i);
     i++;
 }
 while(i<=a)

 //for of==>use for iteration purpose
var city=["chennai","coimbatore","mumbai","delhi"];
for(mycity of city){
    console.log(mycity);//mycity variable name
}
chennai
coimbatore
mumbai
delhi
//to print the values