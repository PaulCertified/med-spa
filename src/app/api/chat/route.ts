import { NextResponse } from "next/server";
import { isOpenAIConfigured } from "@/lib/env";

/**
 * POST /api/chat — placeholder for OpenAI-backed assistant.
 * Replace the body with `openai.chat.completions.create` (or Responses API) when ready.
 */
export async function POST() {
  if (!isOpenAIConfigured()) {
    return NextResponse.json(
      {
        error:
          "OpenAI is not configured. Add OPENAI_API_KEY to .env.local and restart the dev server.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json(
    {
      error:
        "Chat handler not implemented yet. Wire the OpenAI SDK here and call this route from the assistant UI.",
    },
    { status: 501 },
  );
}
