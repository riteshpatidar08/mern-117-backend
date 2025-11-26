import express from 'express';

const app = express();
//route chaining :

//tables manage

//get tables
// app.get('/api/v1/tables', (req, res) => {
//   console.log('get route hit');
// });
// //create table
// app.post('/api/v1/tables', (req, res) => {
//   console.log('post route hit');
// });
const checkauth = (req, res, next) => {
  console.log(req);
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    next();
  } else {
    res.send('you are not logged in');
  }
};
app.get('/products/:id', (req, res) => {
  //NOTE req.params
  console.log(req.params.id);
  //NOTE req.query
  console.log(req.query);
  //NOTE req.body
  //NOTE req.headers
  console.log(req.headers);
  //res.send
  //NOTE  res.status(400).send({name : "ritesh"})
  //res.json() ;
  //NOTE  res.json({
  //     message : "success",
  //     data : "data"
  // })
  //NOTE res.redirect('https://www.google.com')
  //NOTE res.download('../index.txt')
});
//localhost:3000/products/3
http: app
  .route('/api/v1/tables')
  .get((req, res) => {
    console.log('get method hit for tables');
  })
  .post((req, res) => {
    console.log('post method hit');
  });
//put , delete , get single table  /api/v1/table/:id
app
  .route('/api/v1/table/:id')
  .put(() => {})
  .delete(() => {})
  .get(() => {});

app.listen(3000, () => {
  console.log('server is running on the port 3000');
});


//mongodb => 
    //folder structure  server.js 50 api X routes // controller  //crud with file  //crud  //job => create , read , update , delete //user=> create , read , update , delete create => post , read => get , update //put /path delete => delete