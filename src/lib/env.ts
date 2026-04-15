/**
 * Server-side environment helpers.
 * Add OPENAI_API_KEY to `.env.local` before enabling AI routes.
 */
export function getOpenAIApiKey(): string | undefined {
  return process.env.OPENAI_API_KEY;
}

export function isOpenAIConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}
