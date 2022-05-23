let dbObj={}
dbObj.user=[
    {
        name:"john",
        city:"chennai",
    },
    {
        name:"vijay",
        city:"cbe",
    },
]
let bdquery={//module
    find: function(table){return `Select * from ${table}`},
    insert: function(table,data){return `insert into${table}name,city ${data.name},${data.city}`}
}
//es5
module.exports=dbObj