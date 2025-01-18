import dbConnect from "../db";
import Post from "../models/Post";

export async function GET() {
  await dbConnect();

  // Get all books

  try {
    const posts = await Post.find({});

    return Response.json({ posts });
  } catch (e) {
    console.error(e);
    return Response.json({
      error: e,
    });
  }
}
