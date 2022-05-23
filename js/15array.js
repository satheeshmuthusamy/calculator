Array==>collection of homogeneous as well as heterogeneous type datas.
let e=["hi",3,9.99,true]
undefined
typeof(a)
'object
let a=["hi","Hello","teat"];
undefined
typeof(a)
'object'
let b=[1,2,2,55];
undefined
typeof(b)
'object'
let c=[true,false,true,true];
undefined
typeof(c)
'object'//type of array will always object
we can access any value with index value
 
let city=["cbe","chennai","mumbai"];
undefined
city.push("kolkata")//to add city name==>value added in the end of an array
4
city
(4) ['cbe', 'chennai', 'mumbai', 'kolkata']

city.pop()///it always removes the value in the end of an array
'kolkata'
city
(3) ['cbe', 'chennai', 'mumbai']
city.shift()///it remove first value of  array
unshift=>adds the first value of array

//slice
city.slice(1)//it shows the value in between the range.original array remains same
(3) ['chennai', 'cbe', 'erode']

//splice
city.splice("index number",delete count,value);
let city=["mumbai","chennai","cbe","erode"]
undefined
city.splice(2,1)//remove the value by the reference of index number.
['cbe']
city
(3) ['mumbai', 'chennai', 'erode']
city.splice(2,0,"lucknow","delhi")//it adds the details after the given index number.
[]
city
(5) ['mumbai', 'chennai', 'lucknow', 'delhi', 'erode']

/////indexOf property
let city=["mumbai","chennai","cbe","erode"]
undefined
city.indexOf('mumbai');
0
city.indexOf('cbe')
2
city.indexOf('kolkata')//if the city name is not defined in the array is shows -1.
-1

//to find the given input is an array or not
let a="hai";
undefined
let b= ["hai","hello"];
undefined
Array.isArray('a')
false
Array.isArray(b)
true

//Adding the array to the arraylet a=['a','b','c',10,22];
undefined
let b=[2,5,'f'];
undefined
a+b
'a,b,c,10,222,5,f'//wrong output
a.concat(b)//use concat for adding the array
(8) ['a', 'b', 'c', 10, 22, 2, 5, 'f']

//split
let a='javascript';
undefined
a.split()
['javascript']
a.split('');
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
let b=a.split('');
undefined
b
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

a.toString()
'javascript'
b
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
b.toString//convert the letters to string
ƒ toString() { [native code] }
b
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
b.toString().replace(/,/g,'')//replace space with none
'javascript'

///Nested array==>array inside the array.
let myarray=['hai','hello',['red',['a','b','c']],'green','blue',['audi'],'benz'];
undefined
myarray[0]
'hai'
myarray[1]
'hello'
myarray[2]
(2) ['red', Array(3)]0: "red"1: (3) ['a', 'b', 'c']length: 2[[Prototype]]: Array(0)
myarray[3]
'green'
myarray[4]
'blue'
myarray[5]
['audi']
myarray[6]
'benz'
