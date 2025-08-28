import mongoose from "mongoose";
import { DATABASE_URL } from "./env.js";
export const connectDB = async () => {
  try {
    console.log(DATABASE_URL);

    await mongoose.connect(DATABASE_URL);
    console.log("Connect to mongoDB successfully");
  } catch (error) {
    console.log("Error connecting to mongoDB", error);

    process.exit(1);
  }
};
