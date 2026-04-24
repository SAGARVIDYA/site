export async function POST(req) {
  const body = await req.json();
  const { email } = body;

  console.log("New Email:", email);

  return Response.json({
    message: "Email received successfully",
  });
}