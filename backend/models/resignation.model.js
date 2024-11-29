import { Schema } from "mongoose";
import { model } from "mongoose";

const ResignationSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user", 
      required: true
    },
    lwd: {
      type: Date, 
      required: true
    },
    approved: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true
  }
);

export default model("resignation", ResignationSchema)