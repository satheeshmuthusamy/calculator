>es6 operations
>used to iterate over the array
>map always returns the same lenght of output as the input 
>uesd to apply logics ==add,sum,mul,divided

var a=[1,2,33,34,55,33,45,56,66,72,80];
a.map((data)=>{return data*3})//it is called as anonymos function or data function.
//function inside the function is known as call back function.
[3, 6, 99, 102, 165, 99, 135, 168, 198, 216, 240]//ip and op array will be same lenght

var a=[2,3,4];
a.map((item)=>{return `<p>${item}</p>`})
(3) ['<p>2</p>', '<p>3</p>', '<p>4</p>']//

//filter==>is used to filter the data
//it may or maynot return the same lenght of output input data.
//it only returns those value condition or output is true
 var a=[20,30,15,50,44];
 a.filter((data)=>{return data>30})
 (2) [50, 44]//output

 //using map to see the logic
 var a=[2,3,4];
a.map((data)=>{return data>1})
(3) [true, true, true]

Interview questions
var a=[-2,-1,0,1,2,3];
a.map((data)=>{return data*2})
[-4, -2, 0, 2, 4, 6]

var a=[-2,-1,0,1,2,3];//here it multiplies with the property of truthy and falsy values
a.filter((data)=>{return data*2})
[-2, -1, 1, 2, 3]