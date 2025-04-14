import { createClient } from "contentful";

// This client is used for fetching published content
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// This client is used for fetching draft content in preview mode
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || "",
  host: "preview.contentful.com",
});

// Helper function to get the correct client based on preview mode
export const getClient = (preview: boolean = false) => {
  return preview ? previewClient : contentfulClient;
};

// Fetch all portfolio items
export async function getPortfolioEntries() {
  const entries = await getClient().getEntries({
    content_type: "portfolioWork",
    order: ["-fields.date"], // Sort by date in descending order
  });

  return entries.items;
}

// Fetch a specific portfolio item by slug
export async function getPortfolioBySlug(slug: string) {
  const entries = await getClient().getEntries({
    content_type: "portfolioWork",
    "fields.slug": slug,
  });

  return entries.items[0] || null;
}

// Fetch about page content
export async function getAboutContent() {
  const entries = await getClient().getEntries({
    content_type: "about",
  });

  return entries.items[0] || null;
}

// Types for TS
export interface PortfolioItem {
  title: string;
  slug: string;
  description: string;
  content: any; // Rich text content
  featuredImage: any;
  tags: string[];
  date: string;
  isFeatured: boolean;
  isPasswordProtected: boolean;
  accessPassword?: string; // Optional password field
}
