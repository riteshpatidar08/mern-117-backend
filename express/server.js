import express from 'express' ;


const app = express() ;

//NOTE Middleware1
app.use((req,res,next)=>{
req.body = {
    name : "ritesh"
}
res.send('this is response is send by middleware 1')

})

app.use((req,res,next)=>{
console.log('middleware2')
next()
})
//req => middleware1 next() => middleware2 next() => /home

//middleware functions have access of req,and res
app.get('/home' ,(req,res)=>{
    console.log(req.body)
res.send('homepage')
})

app.listen(3000,()=>{
    console.log('server is running on the port 3000')
})

//client req => middleware 1 next() => middleware 2 next() => 3 next() => /home


//login nhi ho => /movies => 