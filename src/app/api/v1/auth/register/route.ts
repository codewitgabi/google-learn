import dbConnect from "@/db/config";
import User from "@/db/models/User";
import { RegisterFormSchema } from "@/schemas/auth.schemas";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  // Connect to your database

  await dbConnect();

  const body = await req.json();

  // Validate data

  const { success, error, data } = RegisterFormSchema.safeParse(body);

  if (!success) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid input",
        errors: error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Check if user already exists

  const user = await User.findOne({ email: data.email });

  if (user) {
    return NextResponse.json(
      {
        success: false,
        message: "User with email already exist",
        error: "User with email already exist",
        errors: [],
      },
      { status: 400 }
    );
  }

  // Save user to database

  const hashedPassword = bcrypt.hashSync(data.password);

  const newUser = await User.create({ ...data, password: hashedPassword });

  return NextResponse.json(
    {
      success: true,
      message: "User created successfully",
      data: newUser,
    },
    { status: 201 }
  );
}
