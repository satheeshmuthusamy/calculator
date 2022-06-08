let fs = require('fs'); //to access the datails abour all the files 
// fs.writeFile('mycode.text', 'This is node app with latest update', () => {
//     console.log('task completed');
// }); //callbackfunction==>iffi=>immediately invokable function or noname function
// //it creates one file with the given input
// //problem with writefile is if we change the text it will overwrite
// fs.writeFile('file.text', 'second file', () => {
//     console.log('task is done');
// })
// fs.appendFile('file.text', `${Math.floor(Math.random()*1000)} new file is created\n`, () => {
//         console.log('task is done');
//     }) //run as many timesyou want
//buffering happens in terminal so use utf-8
// fs.readFile('db.json', 'utf-8', (err, data) => {
//         if (err) throw err //Error handling
//         console.log(data)
//     }) //to readfiles fs.js is used

//file rename==>to rename the file
// fs.rename('file.text', 'file1.text', (err) => {
//     if (err) throw err
//     console.log('file renamed')

// })

//unlink or delete files
fs.unlink('fie.text', 'file1.text', (err) => {
    if (err) throw err
    console.log('file renamed')
})