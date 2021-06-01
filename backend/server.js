import express from 'express'
//static data
// import products from './data/products.js'
import  dbFile from "./db.js";

import dotenv from "dotenv";

import colors from "colors";
//rouets

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();


app.get('/', (req, res) => {
    res.send("API is Runnig....")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
