import mongoose from "mongoose";

export const connectDB = async () => {

  try {
    await mongoose.connect("mongodb://localhost/login_DB");
    console.log(">>>>> Conectado a 'login_DB' <<<<< ");
  } 
  catch (error) {
    console.log(error);
  }
};