import express from 'express';
import {
  createOrder,
  deleteOrder,
  getOrders,
  getSingleOrder,
} from './controllers/orderController.js';
import { getUsers } from './controllers/userController.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());

//API => REST API'S => CLIENT AND SERVER COMMUNICATION
//API => url endpoints => client  (/orders)
//HTTP METHODS => GET , POST , PUT , PATCH , DELETE
//HTTP STATUS 200 success , 400 client , 500 server
//CONTROLLER FUNCTION
//100 api's  //products //users //orders
//orders

//NOTE db-connect => resources k according => schema / model(collection jis par hum query karenge)
mongoose.connect('mongodb://localhost:27017/movies-db').then(() => {
  console.log('DB CONNECTED');
});

const UserSchema = new mongoose.Schema({});
const User = mongoose.model('User', UserSchema); //users
const data = await User.find(); //async =>
console.log(data);

app.get('/users', async (req, res) => {
  try {
    const { limit = 10, page = 2, minAge , maxAge } = req.query;
    // users.find({age : {$gte : 30 , $lte : 40}})

    let filterObject = {limit   , page } ;
  //  if minAge  filterObject.age.$gte = minAge ;
    // filterObject.age.$lte  = maxAge ;
    const userData = await User.find(filterObject)
      .limit(limit)
      .skip((page - 1) * limit);
    res.status(200).json({
      length: userData.length,
      data: userData,
    });
  } catch (error) {}
});
//connect => async => promise => then / async await
// app.get('/orders',getOrders)
// app.delete('/orders/:id', deleteOrder)
// app.get('/orders/:id',getSingleOrder)
// // app.post('/orders', createOrder)
// app.route('/orders').get(getOrders).post(createOrder)
// //users

app.use('/api/v1', orderRoutes);
// app.use('/api/v1', studentRoutes)
// app.use('/api/v1' , userRoutes)

app.get('/users', getUsers);

app.listen(3000, () => {
  console.log('SERVER IS RUNNING ON THE PORT 3000');
});

//resource => routes group
//products => routes group
//order => routes group
