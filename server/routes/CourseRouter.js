import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { createCourse } from "../controllers/CourseController.js";

const CourseRouter = express.Router();

CourseRouter.route("/").post(isAuthenticated,createCourse);


export default CourseRouter;