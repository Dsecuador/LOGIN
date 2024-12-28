import mongoose from "mongoose";
import { errorMessages } from "vue/compiler-sfc";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log(">>>>> BD Mongo Conectada ");
  } catch (error) {
    console.log(error);
  }
};
