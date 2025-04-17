export const env = {
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || "",
  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  CONTENTFUL_PREVIEW_ACCESS_TOKEN:
    process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || "",
} as const;

// Validate environment variables
Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});
