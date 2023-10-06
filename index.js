import express from "express";
import "./DB/server.js";
import accountsRouter from "./routes/accountsRouter.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/accounts", accountsRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port:${port}`));
