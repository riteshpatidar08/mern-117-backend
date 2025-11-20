const eventEmitter = require('events') ;
const { fstat } = require('fs');

const events = new eventEmitter() ;

console.log(events)

//listener 
events.on('sale' , (greet)=>{
    console.log('sale has been started' , greet)
})
//event emit 
const time = '12:30' ;
if(time === '12:30'){
    events.emit('sale', 'hello')
}

//notification => user register => event emit ("newUser") => ui => data share => deepak have been registred

events.on('new-order', (itemname)=>{
    console.log(`your order is successfully placed of ${itemname}`)
})

events.emit('new-order' , 'shirt') ;

// const http = require('http') ;

// const server = http.createServer((req,res)=>{
//     if(req.method === 'POST') {
//         events.on("POST-REQUEST",()=>{
//             fs.writeFile("postlog.txt" , 
//                 'post request hit '
//             )
//         })
//         events.emit('POST-REQUEST')
//     }
// })