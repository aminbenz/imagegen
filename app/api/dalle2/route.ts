import { NextResponse as Response } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(req: Request, res: Response) {
  const { prompt, n, size } = await req.json();
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY,
  });

  const openai = new OpenAIApi(configuration);

  if (!prompt.trim()) {
    return Response.json({ msg: "Please provide description!", status: 200 });
  }

  try {
    const response = await openai.createImage({
      prompt,
      n: n ?? 3,
      size: size || "1024x1024",
    });

    return Response.json({ result: response.data.data, status: 200 });
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
