import express from "express";
import cors from "cors";
import userRouter from "./router/auth.router.js";
import connection from "./config/db.js";
import productRouter from "./router/products.router.js";
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const Port = process.env.PORT || 8080;

app.get('/', (req, res)=>{
  res.send("hello flipkart backend")
})

app.use('/auth', userRouter);
app.use('/products', productRouter)

await connection()

app.listen(Port, () => {
  console.log(`server is running at http://localhost:${Port}`);
});