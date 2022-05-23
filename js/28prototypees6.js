class geo{
    conssructor(){
        this.lat=72.22;
        this.long=88.09;
    }
}


class language extends geo{
    //All the declaration will happened inside the construction
    constructor(name,country){
        super()//extend keyword
        this.name=name;
        this.country=country;
    }
    greet=()=>{return `Say Hai to ${this.name} ${this.country}`};
}
let france=new language('france','french')
console.log(france)
console.log(france)
language {name: 'france', country: 'french', greet: ƒ}