const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const product = require('./product');


// Impor Routes
const register = require('./routes/registerRoutes');
const login = require('./routes/loginRoutes');
const stripe = require('./routes/stripeRoutes');
const productsRoute = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const uri = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("coonect mongodb failed ", error);
  }
}
connectDB();

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});

app.get('/', (req, res) => {
  res.send("Check Conected to db...");
});

app.get("/products", (req, res) => {
  res.send(product);
});

// Usage Routes
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/stripe', stripe);
app.use('/api/product', productsRoute);