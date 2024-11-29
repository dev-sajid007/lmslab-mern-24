import express from "express";
import { login, register } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.route("/register").post(register);
UserRouter.route("/login").post(login);

export default UserRouter;