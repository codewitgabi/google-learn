import dbConnect from "@/db/config";
import User from "@/db/models/User";
import { NextRequest, NextResponse } from "next/server";
import { createUserSchema } from "../schemas/user.schemas";

export async function POST(req: NextRequest) {
  await dbConnect(); // Connect to database

  // Get request body

  const body = await req.json();

  // Validate request body

  const { error, data, success } = createUserSchema.safeParse(body);

  if (!success) {
    return NextResponse.json(
      {
        status: 400,
        message: "Invalid request body",
        data: error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Create user

  const user = await User.create(data);

  return NextResponse.json(
    {
      status: 201,
      message: "User created successfully",
      data: user,
    },
    { status: 201 }
  );
}

export async function GET() {
  await dbConnect();

  const users = await User.find({});

  return NextResponse.json({
    status: 200,
    message: "users fetched successfully",
    data: users,
  });
}
