var firstName="Satheesh";//globalscope
var lastName="M";
let SayHi={//enclouser
    firstName:"joe",
    lastName:"clarke",//localscope
    greet:function(){
        return `Say Hai to ${firstName} ${lastName}` 
    }
}
console.log(SayHi.greet())
Say Hai to Satheesh M//it always look at the global value

///local scope
let SayHi={//enclouser
    firstName:"joe",
    lastName:"clarke",//localscope
    greet:function(){
        return `Say Hai to ${this.firstName} ${this.lastName}` //localscope
    }
}
console.log(SayHi.greet())
Say Hai to joe clarke