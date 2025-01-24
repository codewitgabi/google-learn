import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      minLength: [3, "Username must be at least 3 characters"],
    },
    fullName: {
      type: String,
      trim: true,
      minLength: [3, "Fullname must be at least 3 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [3, "Lastname must be at least 3 characters"],
    },
    email: {
      type: String,
      trim: true,
      unique: [true, "User with email already exists"],
    },
    password: {
      type: String,
      minLength: [8, "Password must be at least 8 characters"],
      select: false,
    },
  },
  { timestamps: true, versionKey: false }
);

export default models.User || model("User", UserSchema);
