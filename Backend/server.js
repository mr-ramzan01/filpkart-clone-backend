import express from "express";
import cors from "cors";
import userRouter from "./router/auth.router.js";
import connection from "./config/db.js";
import logger from "./middleware/logger.js";
import { errorhandler } from "./middleware/errorhandler.js";
import { assignAuth } from "./middleware/assignAuth.js";

const Port = 8080

const app = express();

app.use(express.json());
app.use(cors());
app.use(errorhandler)
app.use(assignAuth)
app.use(logger)


app.use('/auth', userRouter);


app.listen(Port, () => {
  connection();
  console.log(`server is running at http://localhost:${Port}`);
});
