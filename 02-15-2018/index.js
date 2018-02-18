/*
how to use library package?
const flatten = require('array-flatten');

var myArr = [
    ["Hello", "World"],
    ["Good Bye","New Paltz"]
];
var arr2=flatten(myArr)
console.log(myArr);//rray of array
console.log(arr2);//flatten array all togher

*/
/*
var http = require('http');

//create a server object:

const server = http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});
server.listen(8080); //the server object listens on port 
console.log("Listening on localhost");
*/
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(8080);