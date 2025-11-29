import {
  getOrders,
  deleteOrder,
  getSingleOrder,
  createOrder,
} from '../controllers/orderController.js';

import express from 'express';

const router = express.Router();

// app.get('/orders',getOrders)
router.delete('/orders/:id', deleteOrder);
router.get('/orders/:id', getSingleOrder);
// app.post('/orders', createOrder)
router.route('/orders').get(getOrders).post(createOrder);
//users

export default router;

//controller , routes  , server

// (controller) => (routes) => server;



//students => routes setup => routes => studentRoutes => express => const router = express.Router => router.get/router.post/router.delete => export default router => import studentsRoutes => app.use('/api/v1',studentRoutes)


//tables => tableRoutes => express => express.Router => router.get/router