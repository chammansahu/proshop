import express from 'express'
//static data
// import products from './data/products.js'
import  dbFile from "./db.js";

import dotenv from "dotenv";

import colors from "colors";
//rouets
import productRoutes from './routes/productsRouter.js'

const app = express();

dotenv.config();


app.get('/', (req, res) => {
    res.send("API is Runnig....")
})

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
