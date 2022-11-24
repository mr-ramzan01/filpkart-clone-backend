import express from "express";
import cors from "cors";
import userRouter from "./router/auth.router.js";
import connection from "./config/db.js";
import productRouter from "./router/products.router.js";

const Port = 8080

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', userRouter);
app.use('/products', productRouter)


app.listen(Port, () => {
  connection();
  console.log(`server is running at http://localhost:${Port}`);
});
 