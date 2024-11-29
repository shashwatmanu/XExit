import { Schema } from "mongoose";
import { model } from "mongoose";

const QuestionnaireSchema =  new Schema({
  questionText: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
});

export default model("questionnaire", QuestionnaireSchema)