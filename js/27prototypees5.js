//it is called as inheritence reference file==>Accesing the property of other things
function human(name,city){
    this.name=name;
    this.city=city;
}
function robot(name){
    this.name=name;
    this.legs=2;
    this.age=10;

}
var john=new human('john','delhi');

john
human {name: 'john', city: 'delhi'}
var paer=new robot;
undefined
paer
robot {name: undefined, legs: 2, age: 10}
paer.city
undefined

//inheritense
human.prototype=new robot();
var hari=new human('hari','cbe');
human.prototype=new robot();//because of using prototype we can access the properties of robot whith humans
var hari=new human('hari','cbe');
robot {name: undefined, legs: 2, age: 10}
hari
human {name: 'hari', city: 'cbe'}
hari.legs
2
hari.age
10
robot.prototype=new human;//es5
robot.city
delhi