var a = 10;
var a;//declaration
a=10;//assignment
> var a = 10;//problem while using node values getting overwrite==
//==>we can redeclare and reassign
undefined
> a
10
> a= 20;
20
> a=40;
40
let a=10;
undefined
> let a=20;//to overcome overwrite problem use let for declaration
b=30;
30//we cant redeclare , can reassign
Uncaught SyntaxError: Identifier 'a' has already been declared

const==>we cannot redeclare and reassign//value can never change
const c=30;
undefined
> c=40
Uncaught TypeError: Assignment to constant variable.//
>