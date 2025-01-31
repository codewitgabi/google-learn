import dbConnect from "@/db/config";
import User from "@/db/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await dbConnect(); // Connect to database

  const userId = (await params).id;
  const user = await User.findById(userId);

  if (!user) {
    return NextResponse.json(
      {
        statue: 404,
        message: "User not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: 200,
    message: "User retrieved successfully",
    data: user,
  });
}
