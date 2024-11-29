import { Schema } from "mongoose";
import { model } from "mongoose";

const RoleSchema =  new Schema({
  role: String,
});

export default model("role", RoleSchema);
  