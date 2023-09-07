import { NextResponse } from "next/server";
import OpenAI from "openai";
import { AxiosResponse } from "axios";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    const aiResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Create small blog post with html tags besed on this title: ${title}`,
        },
        {
          role: "system",
          content: `${
            role || "I am a helpful assistant"
          }. Write with html tags`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(
      {
        content: aiResponse.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
