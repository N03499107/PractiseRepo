# PractiseRepo

This repository is for practise only for myself. It is related work which is taught by professor in class.

## ClassNotes on 02/12/2018:

node -v

npm -v

npm init-->package.jason

npm install bootstrap --save

npm install popper -save

Add following dependecies in package.json

	dependency:
	{
		"popper.js":"1.12.9"
		"jquery":"3.3.1"
	}
	
npm install 
--reads package.json and download libraries

npm i shortform for npm install

add script 

### Sample Example which prints "Hello World" in console.
Make index.js inside server folder
	console.log("Hello World")

## How to run Node.js
Previous folder>node server/index.js

## ClassNotes on 02/15/2018:

### How to use library package?
const flatten = require('array-flatten');
var myArr = [
    ["Hello", "World"],
    ["Good Bye","New Paltz"]
];
var arr2=flatten(myArr)
console.log(myArr);//rray of array
console.log(arr2);//flatten array all together

### Node js on browser
var http = require('http');

//create a server object:

const server = http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});
server.listen(8080); //the server object listens on port 
console.log("Listening on localhost");

### Expess js 
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(8080);
