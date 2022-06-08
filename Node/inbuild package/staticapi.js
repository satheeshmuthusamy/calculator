//static api means it is not connected with data base
//if its connected with database it is known as responsive api or global api
let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => { //req,res are two keywords
    fs.readFile('db.json',
        'utf-8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();

        }
    )
})
server.listen(8900, () => {
        console.log('server is running on port 8900')
    }) //call back function
    //control+c ==>to stop the server
    //to run the server open cmdprompt open inbuild file
    //and enter npm init enter
    //give all datas and enter into
    //give yes and run=>it will create package.json  inbuild file
    //open package.jsonin scripts-- edit text to start
    //and edit inner text into the required file to open(or) start + filename
    //then in cmdprompt give npm start and it will work


//problem in static api==>single route only==>ex==>single pagedatas only
//we cannot make multiple routes
//so we sould need use the EXPRESS
//express is not an inbuild frameworl of node js,its a third party framework
//so we need to create express folder