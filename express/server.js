import express from 'express' ;


const app = express() ;
//NOTE GLOBAL MIDDLEWARES
//NOTE Middleware1
app.use((req,res,next)=>{
req.token = null
next()

})

app.use((req,res,next)=>{
console.log('middleware2')
next()
})
//req => middleware1 next() => middleware2 next() => /home

//middleware functions have access of req,and res

// /home api hit tabhi middleware ko execute karna hain
const homeMiddleware = (req,res,next) =>{
  if(req.token){
    next()
  }else {
    res.send('please log in to access home route')
  }
}

app.get('/home' , homeMiddleware , (req,res)=>{
    console.log(req.body)
res.send('homepage')
})

app.get('/orders',(req,res)=>{
    res.send('orders')
})

app.listen(3000,()=>{
    console.log('server is running on the port 3000')
})

//client req => middleware 1 next() => middleware 2 next() => 3 next() => /home


//login nhi ho => /movies => 


    //client /home => middleware1 => middleware2 => /home => homeMiddleware => controller

    //checkrole => 'admin' => /users route access kr skta hain