import express from "express";
import cors from "cors";
import userRouter from "./router/auth.router.js";
import connection from "./config/db.js";
import cartRouter from "./router/cart.router.js";

const Port = 8080

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', userRouter);
app.use('/cart', cartRouter);

const errorHandler = (err, req, res,next) => {
  if(req.headersSent) {
      return next(err);
  }
  res.status(500).send({
      error: err
  });
}
app.use(errorHandler); // default errorHandler


app.listen(Port, () => {
  connection();
  console.log(`server is running at http://localhost:${Port}`);
});
