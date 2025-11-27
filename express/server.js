import express from 'express'
import { getOrders } from './controllers/orderController.js';
import { getUsers } from './controllers/userController.js';

const app = express() ;

//API => REST API'S => CLIENT AND SERVER COMMUNICATION
//API => url endpoints => client  (/orders)
//HTTP METHODS => GET , POST , PUT , PATCH , DELETE 
//HTTP STATUS 200 success , 400 client , 500 server
//CONTROLLER FUNCTION 
//100 api's  //products //users //orders
//orders



app.get('/orders',getOrders)
//users
app.get('/users',getUsers)

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON THE PORT 3000")
})