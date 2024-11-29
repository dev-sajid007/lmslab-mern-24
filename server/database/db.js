import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected!");
  } catch (error) {
    console.log("There Was An Error!");
  }
}

export default connectDB;