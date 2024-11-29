import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";

const UserRoleSchema = new Schema({
  userId: {
    type: mongoose.ObjectId,
    ref: "User",
  },
  roleId: {
    type: mongoose.ObjectId,
    ref: "Role",
  },
});

export default model("userRole", UserRoleSchema);
