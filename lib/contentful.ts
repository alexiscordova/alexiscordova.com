import { createClient, EntryCollection } from "contentful";

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

// Type for your content models
export interface ProjectFields {
  title: string;
  description: string;
  slug: string;
  // Add other fields as needed
}

export interface Project {
  fields: ProjectFields;
  contentTypeId: string;
}

// Example function to fetch all projects
export async function getAllProjects(preview = false) {
  const response = await getClient(preview).getEntries<Project>({
    content_type: "project",
    order: ["-sys.createdAt"],
  });

  return response.items;
}

// Example function to fetch a single project by slug
export async function getProjectBySlug(slug: string, preview = false) {
  const response = await getClient(preview).getEntries<Project>({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  } as any); // Type assertion needed due to Contentful's type definitions

  return response.items[0];
}

// Export the clients if needed elsewhere
export { client, previewClient };
