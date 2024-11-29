import { Schema } from "mongoose";
import { model } from "mongoose";

const UserSchema =  new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("user", UserSchema);
