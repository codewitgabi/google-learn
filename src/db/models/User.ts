import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      minLength: [3, "Username must be at least 3 characters"],
    },
    fullname: {
      type: String,
      trim: true,
      minLength: [3, "Fullname must be at least 3 characters"],
    },
    city: {
      type: String,
      trim: true,
      minLength: [3, "City must be at least 3 characters"],
    },
    website: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      maxLength: [1024, "Image should not be more than 1024 characters"],
      required: false
    },
  },
  { timestamps: true, versionKey: false }
);

export default models.User || model("User", UserSchema);
