var a={};//;object syntax
var a=[];//array syntax
//with out using object
var movieName1="ddlj";
var movieIndustry1="bollywood";
var movieRating1=4;

var movieName2="kkhh";
var movieIndustry2="bollywood";
var movieRating2=3.9;

//with object
var movie ={//movie is the object
    Name:"DDLJ",
    Industry:"Bollywood",
    Rating:4,//all the details inside the object is known as Value of the object
}
//To access the value of the object
movie.movieName
'DDLJ'
movie.movieIndustry
'Bollywood'
movie.movieRating
4
//using square brackets
movie['Industry']
'Bollywood'
movie['Name']
'DDLJ'
//update the values
movie.Rating=5;//reassign the value
5
movie
{Name: 'DDLJ', Industry: 'Bollywood', Rating: 5}

//Changing the values
movie.Rating=5;
5
movie
{Name: 'DDLJ', Industry: 'Bollywood', Rating: 5}
delete movie.Industry
true
movie
{Name: 'DDLJ', Rating: 5}
movie.type="romance";
'romance'
movie
{Name: 'DDLJ', Rating: 5, type: 'romance'}

//only print the key values in the object
var movie ={//movie is the object
    Name:"DDLJ",
    Industry:"Bollywood",
    Rating:4,//all the details inside the object is known as Value of the object
}
undefined
for(key in movie){
    console.log(key)
}
Name
Industry
Rating//key values in object

