export async function GET() {
  return Response.json({
    user: { id: 1, username: "codewitgabi", image: null, age: 15 },
  });
}
