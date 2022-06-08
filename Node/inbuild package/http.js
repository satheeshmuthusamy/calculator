//http is a server for our website
//ex apache==java
//node js do not require any servver==it creates its own server
//req==>we send to the server==>param,query param,forms
//res==>we get from server
//HTTP, in full HyperText Transfer Protocol, standard application-level protocol used for exchanging files on the World Wide Web.
let http = require('http')
let server = http.createServer((req, res) => {
    res.write('<h1>first http file created and changed</h1>') //to change the text we shold need to restart the server
    res.end() //to end the server
})
server.listen(6781) //port number==>any number uoto 5 digit
    //first server created& we cannot use same port number for anotherfile

//to solve restarting problem we should use nodemon http.js after installing nodemon package as an administrator