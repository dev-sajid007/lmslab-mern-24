import express from "express";
import { getUserProfile, login, logout, register, updateProfile } from "../controllers/UserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import upload from "../utils/multer.js";

const UserRouter = express.Router();

UserRouter.route("/register").post(register);
UserRouter.route("/login").post(login);
UserRouter.route("/logout").get(logout);
UserRouter.route("/profile").get(isAuthenticated,getUserProfile);
UserRouter.route("/profile/update").put(isAuthenticated,upload.single("profilePhoto"),updateProfile);

export default UserRouter;