class languages{
    //All the declaration will happened inside the construction
    constructor(){
        this.name=name;
        this.country=country;
    }
    greet=()=>{return `Say Hai to ${this.name} ${this.country}`};
}
let france=new language("France","French");

france.greet()
'Say hi to France from French'//op