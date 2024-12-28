import mongoose from "mongoose";

const userSquema = new mongoose.Schema(
  {
    username: {
      type: String,
      requiered: true,
      trim: true,
    },
    email: {
      type: String,
      requiered: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      requiered: true,
    }
  },{
    timestamps: true,
  })

export default mongoose.model('User', userSquema)
