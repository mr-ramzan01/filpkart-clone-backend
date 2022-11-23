import express from "express";
import cors from "cors";
// import productRouter from "./router/products.router.js";
import userRouter from "./router/auth.router.js";
import connection from "./config/db.js";

const Port = 8080

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', userRouter);


app.listen(Port, () => {
  connection();
  console.log(`server is running at http://localhost:${Port}`);
});
