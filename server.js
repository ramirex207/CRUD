const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoURI = 'mongodb://127.0.0.1:27017/myapp';
const port = 3000;

const userRouter = require('./routes/userRoutes');
const productRouter = require ('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
