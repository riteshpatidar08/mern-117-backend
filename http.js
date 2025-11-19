//http =>  hypertext transfer protocol ;

const http = require('http');

//step 1 server => 24*7 => localhost:3000
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.headers)
  console.log(res.headers)
  if (req.url === '/orders' && req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('name' , 'ritesh')
    res.end('order list');
  } else {
    res.statusCode = 404
    res.end('not found')
  }
});

server.listen(3000, () => {
  console.log('server is running on 3000');
});
// client => product data
// client => requrest =>  server => localhost:5000
// localhost:5000/product //client will hit this url
// localhost:5000/Users

//restaurent qr

// admin => login => orders

// homepageload => http://localhost:3000/orders
// client => browser => request
// server => req listen => url k according data provide

// req client => server response

//req method

//fetch movie list   //GET
//login / sign up  //data => server //POST
//profile update  //put //patch
//profile delete //delete

//restaurent qr
//login => post data => server
//tables => GET
//tables edit => put and patch
//table delete


//restaurent qr => 
    // resources api

//users //tables //orders // menu 

//status code 201
//users //tables create //order creawte //menu create 




//request => url , method 
//response => data  , headers 
// headers