const orderData = [
  { id: 1, status: 'PENDING', amount: 20000 },
  { id: 2, status: 'DELIVERED', amount: 10000 },
  { id: 3, status: 'PENDING', amount: 5000 },
];

export const getOrders = (req, res) => {
  const { status, limit } = req.query;
  console.log(status);
  const filteredData = orderData.filter((order) => order.status === status);
  const limitData = filteredData.slice(0, Number(limit));
  res.status(200).json({
    data: limitData,
  });
};
//getorderbyid

export const deleteOrder = (req, res) => {
  const id = Number(req.params.id);
  const filteredData = orderData.filter((order) => order.id !== id);
  res.json({
    filteredData,
  });
};

export const createOrder = (req, res) => {
  const data = req.body;
  orderData.push(data);
  res.status(201).json({
    data: orderData,
  });
  //data bhjna //req.body //app.use(express.json())
};

//dropdown //pending , delivered ,
export const getSingleOrder = (req, res) => {
  const id = Number(req.params.id);
  const filterdOrder = orderData.filter((order) => order.id === id);
  res.json({
    data: filterdOrder,
  });
};
