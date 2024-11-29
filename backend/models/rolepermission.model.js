import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";

const RolePermissionSchema =  new Schema({
  roleId: {
    type: mongoose.ObjectId,
    ref: "Role",
  },
  permissionId: {
    type: mongoose.ObjectId,
    ref: "Permission",
  },
});


export default model("rolePermission", RolePermissionSchema)
