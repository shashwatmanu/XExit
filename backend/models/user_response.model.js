import { Schema } from "mongoose";
import { model } from "mongoose";

const UserResponseSchema =  new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId, 
      ref: "user", 
      required: true
    },
    responses: [
      {
        questionText: {
          type: String,
          required: true
        },
        response: {
          type: String,
          required: true
        },
      },
    ],
  },
  {
    timestamps: true
  }
);

export default model("userresponse", UserResponseSchema)
