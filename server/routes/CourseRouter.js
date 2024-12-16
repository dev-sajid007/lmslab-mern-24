import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  createCourse,
  editCourse,
  getCreatorCourses,
  updateCourse,
} from "../controllers/CourseController.js";
import upload from "../utils/multer.js";

const CourseRouter = express.Router();

CourseRouter.route("/").post(isAuthenticated, createCourse);
CourseRouter.route("/").get(isAuthenticated, getCreatorCourses);
CourseRouter.route("/:courseId").put(
    isAuthenticated,
    upload.single("thumbnail"),
    updateCourse
);
CourseRouter.route("/:courseId").get(isAuthenticated, editCourse);

export default CourseRouter;
