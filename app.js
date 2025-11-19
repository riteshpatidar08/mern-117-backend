const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'post.json');
    console.log(filePath);

    fs.readFile(filePath, 'utf-8', (err, data) => {
      console.log(data);
      res.writeHead(200, {
        "name" : "ritesh"
      })
      res.end(data); //req-res cycle end here
    
    });
  } else if (req.url === '/task' && req.method === 'GET') {
    res.end('hello');
  }
});

server.listen(5000, () => {
  console.log('Server is running on 5000');
});

//req.method
//req.url
//req.headers

//task 1 get the post list
