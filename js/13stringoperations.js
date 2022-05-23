let city="coiMbaTore";
city.toUpperCase()//to uppercase
'COIMBATORE'
city.toLowerCase()//to lowercase
'coimbatore'
city[0]//to find the indexvalue
'c'
city.charAt(2)//another way
'I'
city.charAt(4)
'B'
city.charAt(-4)//it will not work
''
city.at(-1)//it prints from final value
'E'
city.at(-2)
'r'
//////java script is case sensitive
let a="ram";
let b="Ram";
a==b
false
//to check in these case we can use a.toUpperCase()
a.toLowerCase()==b.toLowerCase()
true
//// to remove letters from words 
let a ="roman";
undefined
a.slice(2)
'man'
a.slice(1)
'oman'
a.slice(2,4)//value between range
'ma'
a.slice(-1)//negatige value prints the letters from backwards
'n'
a.slice(-2)
'an'
////to change the words to formal words//interview question
let city="cOimBatoRe";
undefined
city.charAt(0).toUpperCase()
'C'
city.slice(1).toLowerCase()
'oimbatore'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Coimbatore'
//trim==>to remove the space;
let b="  amma ";
undefined
b
'  amma '
b.trim()
'amma'


////replace==>replacing the word with another word
let b="hello world!";
undefined
b.replace('world','Satheesh')
'hello Satheesh!'
//to change global values
let b="world hello world!";
undefined
b.replace('world','Satheesh');
'Satheesh hello world!'
b.replace(/world/g,'Satheesh');
'Satheesh hello Satheesh!'

//to replace or remove spaces betweenlet a=" Sath ees h";
undefined
a.trim(/g);
VM1523:1 Uncaught SyntaxError: Invalid regular expression: missing /
a.replace(' '/g,'');
VM1648:1 Uncaught ReferenceError: g is not defined
    at <anonymous>:1:15
(anonymous) @ VM1648:1
a.replace(/ /g,'');
'Satheesh'