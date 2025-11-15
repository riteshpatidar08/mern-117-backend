//client and server

//client => html , css and js

//client => js
//server => nodejs

//client => html + js
//server => js
//browser => node

// node index.js  //server //runtime environment
//client html + js

//NOTE client
// dom manipulation
//client => jab user interaction karega tab event occur hoga => click , form submit , mouse over

//NOTE server ?
//note file data read
//note server 24*7
//events imp

//modules =>

//client side js vs serverside js difference ?
//dom manipulation vs file handling , server
//event interaction based vs  events

//window object kya wo node main available hoga ?
// console.log(global)
// console.log(window)

//es6 module

//package.json  npm init

const figlet = require('figlet');
const {firstname,age} = require('./script.js');
const  {course }= require('./new.js');


figlet(course, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});

//common js module //es6 module
//cjs  //esm
