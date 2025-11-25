import express from 'express'

const app = express() ;
console.log(app)

//express => req,res , statusCode , headers 
//api => application programming interface => graphql , rest api , soap  client and server  
// representational state transfer
//stateless => statefull
// => session storage , localStorage
//end points => 
import fs from 'fs' ;
import path from 'path';

app.use(express.json()) //middlewares

//  => req access 
// => req => object, res => object
//  =>  req jo bhi data usko parse karna
//   => and req par body property banakar usdata to uspr set krna 

app.get('/api/v1/assignments', (req,res)=>{
const data = fs.readFileSync(path.resolve('assignment.json'),'utf-8')
res.json({
    message : true ,
    data
}) 
})

app.get('/api/v1/assignments/:id' , (req,res)=>{
const id =  Number(req.params.id)
const data = fs.readFileSync(path.resolve('assignment.json'),'utf-8')
console.log(JSON.parse(data))
})

//create a new assignment 
app.post('/api/v1/assignments',(req,res)=>{
    // req.name = 'ritesh ' ;
    
    console.log(req.name)
    console.log(req.body)
//data share client => get
})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

//restaurent qr 

//tables , menu , user  , orders =>//method post http://localhost:5000/menu

//delete => http://localhost:5000/menu/1
//put /patch => http://localhost:5000/menu/1
//version => http://localhost:5000/api/v1/menu
//version2 => http://localhost:5000/api/v2/menu
// => http://localhost:5000/api/v1/tables => orders 


//assignment => get , post , delete , put/patch , getsingleAssingment
//✔️get assignment => GET  http://localhost:5000/api/v1/assignements
//POST assignment =>POST  http://localhost:5000/api/v1/assignements
//✔️get single assignment => GET http://localhost:5000/api/v1/assignements/:id


//POST => client data receive //example login , signup , productregister => data server  


//form => name ,  subject , due date =>  {name : "nodejs", subject:"expres", due data:"fdjk"}