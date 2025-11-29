import express from 'express'
import { createOrder, deleteOrder, getOrders ,getSingleOrder} from './controllers/orderController.js';
import { getUsers } from './controllers/userController.js';
import orderRoutes from './routes/orderRoutes.js'

const app = express() ;
app.use(express.json())
//API => REST API'S => CLIENT AND SERVER COMMUNICATION
//API => url endpoints => client  (/orders)
//HTTP METHODS => GET , POST , PUT , PATCH , DELETE 
//HTTP STATUS 200 success , 400 client , 500 server
//CONTROLLER FUNCTION 
//100 api's  //products //users //orders
//orders



// app.get('/orders',getOrders)
// app.delete('/orders/:id', deleteOrder)
// app.get('/orders/:id',getSingleOrder)
// // app.post('/orders', createOrder)
// app.route('/orders').get(getOrders).post(createOrder)
// //users

app.use('/api/v1' , orderRoutes)
// app.use('/api/v1', studentRoutes)
// app.use('/api/v1' , userRoutes)

app.get('/users',getUsers)

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON THE PORT 3000")
})


//resource => routes group 
//products => routes group 
//order => routes group