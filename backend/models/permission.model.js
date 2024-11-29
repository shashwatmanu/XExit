import { Schema, model } from "mongoose";

const PermissionSchema =  new Schema({
  subject: String,
  action: String,
});

export default model("permission", PermissionSchema)