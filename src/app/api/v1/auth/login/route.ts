import dbConnect from "@/db/config";
import User from "@/db/models/User";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  await dbConnect();

  const { email, password } = await req.json();

  // Check if user exists and password matches

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "User with email does not exist",
        errors: { email: ["User with email does not exist"] },
      },
      { status: 400 }
    );
  }

  // Check for password

  const verifiedPassword = bcrypt.compareSync(password, user.password);

  if (!verifiedPassword) {
    return NextResponse.json(
      {
        success: false,
        message: "Incorrect password",
        errors: { password: ["Password is incorrect"] },
      },
      { status: 400 }
    );
  }

  // Generate jwt token for user;

  const accessToken = jwt.sign({ id: user._id, email: user.email }, "ssh");
  const userObject = user.toObject();

  delete userObject.password; // Remove password from returned 

  return NextResponse.json({
    success: true,
    message: "Login successful",
    data: {
      accessToken,
      user: userObject,
    },
  });
}
