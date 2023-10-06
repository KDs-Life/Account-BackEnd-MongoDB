import express from "express";
import * as accountController from "../controllers/accountController.js";

const accountsRouter = express.Router();

accountsRouter
.route("/")
.get(accountController.getAllAccounts)
.post(accountController.addAccount);

accountsRouter
.route("/:id")
.get(accountController.getAccountById)
.put(accountController.updateAccount)
.delete(accountController.deleteAccount);

accountsRouter.patch("/id/addTag", accountController.addAccount);

export default accountsRouter;
