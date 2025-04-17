import { createClient, EntrySkeletonType, Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

// Initialize the Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Preview client for draft content
const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

// Helper function to determine which client to use
const getClient = (preview: boolean) => (preview ? previewClient : client);

// Types for content models
export interface FeaturedWork extends EntrySkeletonType {
  fields: {
    title: string;
    description?: string;
    content?: Document; // Rich text content
    date?: string;
  };
  contentTypeId: "featuredWork";
}

export interface Introduction extends EntrySkeletonType {
  fields: {
    title: string;
    content?: Document; // Rich text content
  };
  contentTypeId: "introduction";
}

export interface Hero extends EntrySkeletonType {
  fields: {
    title: string;
    content?: Document; // Rich text content
  };
  contentTypeId: "hero";
}

export interface Screenshot extends EntrySkeletonType {
  fields: {
    title: string;
    image?: Asset; // Asset reference
    description?: string;
    relatedWork?: Entry<FeaturedWork>; // Reference to a work item
  };
  contentTypeId: "screenshot";
}

// Function to fetch all featured work
export async function getFeaturedWork(preview = false) {
  const response = await getClient(preview).getEntries<FeaturedWork>({
    content_type: "featuredWork",
    order: ["-sys.createdAt"],
  });

  return response.items;
}

// Function to fetch introduction content
export async function getIntroduction(preview = false) {
  const response = await getClient(preview).getEntries<Introduction>({
    content_type: "introduction",
    limit: 1,
  });

  return response.items[0];
}

// Function to fetch hero content
export async function getHero(preview = false) {
  const response = await getClient(preview).getEntries<Hero>({
    content_type: "hero",
    limit: 1,
  });

  return response.items[0];
}

// Function to fetch screenshots for a specific work
export async function getScreenshots(workId: string, preview = false) {
  // We need to use a type assertion here because Contentful's TypeScript definitions
  // don't fully capture all possible query parameters
  const response = await getClient(preview).getEntries<Screenshot>({
    content_type: "screenshot",
    "fields.relatedWork.sys.id": workId,
    order: ["sys.createdAt"],
  } as any);

  return response.items;
}

// Export the clients if needed elsewhere
export { client, previewClient };

// Types for your content models
export interface PortfolioFields {
  title: string;
  description: string;
  slug: string;
  content?: any;
  featuredImage?: any;
  tags?: string[];
  date?: string;
  isFeatured?: boolean;
  isPasswordProtected?: boolean;
  accessPassword?: string;
}

export interface Portfolio {
  fields: PortfolioFields;
  sys: {
    id: string;
    createdAt: string;
  };
  contentTypeId: string;
}

// Function to fetch all portfolio items
export async function getAllProjects(preview = false) {
  const response = await getClient(preview).getEntries<Portfolio>({
    content_type: "portfolioWork",
    order: ["-sys.createdAt"],
  });

  return response.items;
}

// Function to fetch a single portfolio item by slug
export async function getProjectBySlug(slug: string, preview = false) {
  const response = await getClient(preview).getEntries<Portfolio>({
    content_type: "portfolioWork",
    "fields.slug": slug,
    limit: 1,
  } as any);

  return response.items[0];
}

// Fetch all portfolio items
export async function getPortfolioEntries() {
  const entries = await getClient(false).getEntries({
    content_type: "portfolioWork",
    order: ["-fields.date"], // Sort by date in descending order
  });

  return entries.items;
}

// Fetch a specific portfolio item by slug
export async function getPortfolioBySlug(slug: string) {
  const entries = await getClient(false).getEntries({
    content_type: "portfolioWork",
    "fields.slug": slug,
  });

  return entries.items[0] || null;
}

// Fetch about page content
export async function getAboutContent() {
  const entries = await getClient(false).getEntries({
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
