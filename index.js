// //client and server

// //client => html , css and js

// //client => js
// //server => nodejs

// //client => html + js
// //server => js
// //browser => node

// // node index.js  //server //runtime environment
// //client html + js

// //NOTE client
// // dom manipulation
// //client => jab user interaction karega tab event occur hoga => click , form submit , mouse over

// //NOTE server ?
// //note file data read
// //note server 24*7
// //events imp

// //modules =>

// //client side js vs serverside js difference ?
// //dom manipulation vs file handling , server
// //event interaction based vs  events

// //window object kya wo node main available hoga ?
// // console.log(global)
// // console.log(window)

// //es6 module

// //package.json  npm init

// const figlet = require('figlet');
// const { firstname, age } = require('./script.js');
// // const  {course }= require('./new.js');

// figlet(require('./new.js'), function (err, data) {
//   if (err) {
//     console.log('Something went wrong...');
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// //common js module //es6 module
// //cjs  //esm
// console.log('hello')


// //dependencies ==> npm i/install express
// //devDendencies => npm install -D nodemon 
// //devDendencies => npm install nodemon --save-dev
// //NOTE package installation
// //nodemon ? locally => npm install nodemon ,
// //  globally  npm install -g nodemon

// // express :  5.1.2 => semantic versioning => major.minor.patch
// //patch => 5.1.3
// //minor => 5.2.3
// //major => 6.2.3

//NOTE FILE SYSTEM 

const fs = require('fs') ;

//two types of functions available in this module 

//Synchronous fn 
console.log('read file started...')
const data  = fs.readFileSync('./index.txt' , 'utf-8') ;
 console.log(data)
 console.log('read file ended...')

//asynchronous fn
console.log('async read file started')
fs.readFile('./index.txt', 'utf-8',(err,data)=>{
  console.log(data)
})
console.log('async file ended') ;

//NOTE write file 

// fs.writeFileSync('newfile.txt' , 'hello this is a write file') ;

// const student = [ {name : "ritesh"} , {name :"devesh"}] ; //json
// //json.stringify => used to convert array of object into json
// fs.writeFileSync('studentdata.json' , JSON.stringify(student))


//suppose i have one 

// fs.readFile('./post.json' , 'utf-8' , (err,data)=>{
//   // if(err) console.log(err)
//     console.log(data)
//   fs.writeFileSync('newpost.json' , data)
// })
const postdata = fs.readFileSync('./post.json' , 'utf-8') ;
fs.writeFileSync('writepost.txt', postdata) ;