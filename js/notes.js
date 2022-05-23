//es5-ECMA script 5
var a=20;//var is used to declare variables in es5
var b = "hi"
var c = true;
a
20
b
'hi'
c
true

typeof is used to idntify the data types
typeof(a)
'number'
typeof(b)
'string'
typeof(c)
"Boolean"


a
20
b
'hi'
c
true
typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d="10"
undefined
typeof(d)
'string'
var e='true'
undefined
typeof(e)
'string'
var f=`hello`
undefined
typeof(g)
'undefined'
typeof(f)
'string'
everything inbetween single or double quotes and backthick is string data type

var a= 10;
undefined
var b= 20;
undefined
a+b//addition
30
a-b//subraction
-10
a*b//multiplication
200
a/b//division
0.5
a%b//modules-->gives reminder
10===>if we have higher value in bottom then the modulus will be the top one which is small 
b%a
0//reminder will be zero
3%4
3
4%5
4
if we take a modulus for smaller to larger it will be always samller


var a = "hi";
undefined
var b = "javascript";
undefined
a+b
'hijavascript'//concatination
a-b//other operators will not be performed
NaN-->Not a Number
a-b
NaN
a*b
NaN
a/b
NaN
b%a
NaN
// Interview questions
string + string = string
string + number = string
number + string = string
number + number = number
adding string and numbers//interview questions
10+"20"+15//number + string = string,
'102015'
15+10+"30"
'2530'
"30"+"30"+10
'303010'
"30"+"30"+10-1//if both side of the Equal to symbol or operator if both are numerical number it will work like numbers ans give o/p
303009
"30"+"30"+10-1
303009
"10a"-1//one side string and other one is number
NaN
//except in + all other operators will work when both are in number form.+ concatinates 

//booleanExpression
var a = true;
undefined
var b = false;
undefined
a+b
1
a-b
1
var a = true;
undefined
var b = true;
undefined
a+b//  true ==>1 and false ===>0  
2
a-b
0
var d = false
undefined
20/d
Infinity//divided by false anything is infinity
10+true
11
true + true
2
var a = "hai"


undefined
var b = 13
undefined
a+b
'hai13'//then both will become string
var a = 'true'
undefined
var b = true;
undefined
a+b
'truetrue'
a-b
NaN//- will not work
20+'56'
'2056'//string + number = string
///to add or operate two string values we should use parseInt()
var a = "10"

undefined
var b = "20"
undefined
parseInt(a)+parseInt(b)
30
parseInt(a)-parseInt(b)
-10
parseInt(a)*parseInt(b)
200//we cant use parse int for decimal numbers.
var a = 12.5
undefined
var b = 33.990
undefined
parseInt(a)-parseInt(b)
-21
parseFloat(a)-parseFloat(b)//type conversion
-21.490000000000002//parseFloat for decimal numbers.
it will work for both Numerical and decimal

/// INTERVIEW QUESTIONS
var a = "123delhi"
undefined
parseFloat(a)
123//parse encounters after detecting the string after numbers
var b = "delhi234"
undefined
parseInt(b)
NaN
//TO ADD TWO STRING NUMBERS USE Number()
Ex:
var a = "5"
undefined
var b = "10"
undefined
Number(a)+Number(b)
15
var c = "Hi"
undefined
Number(c)
NaN//string in variable give op as NaN==>If it encounters any string it gives NaN as an output
//es6-ECMA script 6---->rules of writing code-->standard--->we can use both versions simultaneously
js compiles over the browser
//data types in javascript//
1-Number-1,3,2.3.4,44.99,.475
2-string-Names,words,"Hi"'hello'`help`--->``back tick key or string literal
3-Boolean-true and false


