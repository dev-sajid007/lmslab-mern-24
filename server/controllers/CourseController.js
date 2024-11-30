import { Course } from "../models/CourseModel.js";

export const createCourse = async (req, res) => {
  try {
    const { title, category } = req.body;
    if (!title || !category) {
      return res.status(400).json({
        message: "Course title and category is required.",
      });
    }

    const course = await Course.create({
      title,
      category,
      creator: req.id,
    });

    return res.status(201).json({
      success: true,
      course,
      message: "Course created.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Course Create Failed.",
    });
  }
};
