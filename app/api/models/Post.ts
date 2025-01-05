import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: 3,
    },
    description: {
      type: String,
      trim: true,
      minLength: 3,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model("Post", PostSchema);
