// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/posts' && req.method === 'GET') {
//     const filePath = path.join(__dirname, 'post.json');
//     console.log(filePath);

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//       console.log(data);

//       res.writeHead(200, {
//         "name" : "ritesh"
//       })
//       res.end(JSON.stringify(data)); //req-res cycle end here
    
//     });
//   } else if (req.url === '/task' && req.method === 'GET') {
//     res.end('hello');
//   }
// });
// //listener
// server.on('request',(req)=>{
//   console.log('request hit')
// })

// server.on('connection' , ()=>{
//     console.log('tcp connection made')
// })
// // console.log('hello')

// server.listen(3000, () => {
//   console.log('Server is running on 5000');
// });

// //req.method
// //req.url
// //req.headers

// //task 1 get the post list


// //restaurent  
// // tables 
// // menu 
// // orders 
// // users




// // client => /posts => tcp connection => request hit



// //two type of events => automaticallly events can be trigger 
// //2nd i can create my own event 'sale'
// //3nd orderplace 

//post req

//post req => client data share => server get db save 

const http = require('http') ;

const server = http.createServer((req,res)=>{

  if(req.method == "GET" && req.url === '/products'){
   const url = new URL(req.url) ;
   console.log(url.searchParams.get('category'))
  }
if(req.method === 'POST' && req.url === '/login'){
  //ui user fill form email and password 
  let data = ' '  ;

  req.on('data' , (chunk)=>{
  data +=  chunk.toString()
  })

  req.on('end', ()=>{
    res.end(
      'login success'
    )
  })
}
})

server.listen(3000,()=>{
  console.log('server is running')
})

server.on('request', (req,res)=>{
  console.log(req.url)
})

//https://localhost:3000/products?category='electronics'

const url  = new URL('https://localhost:3000/movies?search=haq');
//query params check if any ? mark and key value pair exist in the url
const newurl  = new URL("https://localhost:3000/product?minPrice=2000&&maxPrice=5000")
//params
const userurl = new URL("https://localhost:3000/users/50")
console.log(userurl.pathname.split('/')[2]) //in url class (req.params)
console.log(url.searchParams.get('search'))
console.log(newurl.searchParams.get('minPrice'))
console.log(newurl.searchParams.get('maxPrice'))

