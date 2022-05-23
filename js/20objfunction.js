//literal notation
//object adds the reusability
//function inside the object is known as objfunction
let calc={
    sum: function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(3,4)
7
calc.sub(90,9)
81//reuse

let bdquery={//method
    find: function(table){return `Select * from ${table}`},
    insert: function(table,data){return `insert into${table}name,city ${data.name},${data.city}`}
}
dbquery.find('student')
`Select * from student`
dbquery.insert('employee',{name:`Satheesh`,city:`cbe`})

function language(name,country){
    this.name=name;
    this.country=country;
    this.greet=()=>{return `Say hi to ${name} from ${country}`}
}

//constructor notation of object
let Hindi=new language('Hinndi','India')//create many objects
Hindi.greet()
'Say hi to Hinndi from India
Hindi
language {name: 'Hinndi', country: 'India', greet: ƒ}
