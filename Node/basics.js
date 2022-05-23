//node js is the frame work of javascript
=======//properties
//its asynchronous==>several io's in the same running time
//non-blocking
==========
//single thread==thread==>processing unit
//==It contains the stack==>requests made as an one event
//response will known as call back==>function inside the function
// it is called event loop based structure
=========
//io
//directly processed
your code 
    |
the bite code

//other languages
your code
    |
Machine language
    |
byte code

//reduced one step of processing==so it works faster
// its a combination of c++ and Livu
//v8 engine used to run the code==>v8 chrome search engine

npm packages
//its a supporting library

PACKAGES REQUIRED

package.json
//main file in the app
//entry point to the app
//contains meta data==>(name,version,description)

steps to generate package.json
1.nodejs must be instaalled
2.command prompt==>cd copy file path
3.npm init
4.answer all questions
5.type yes

>local dependancy 
>global depandancy
>dev depandancy

//STEPS TO INSTALL PACKAGE.JSON//
1.nodejs must be instaalled
2.command prompt==>cd copy file path
3.npm i package name
4.dotenv//or any other package we should need to install
5.npn i express//another package==>in module folder child dependancies are created
//they internally getting used
6.package-lock.json==>it contains the child dependancies //it has not play any role we can run app without this lock file
7.create .gitignore//to the item which i dont want to push in git
if we dont have node_modules folder ==>just go to req folder and write npm i and run ==it gets all req modules
8.create new files named readme.md and Changelog.md