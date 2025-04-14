import { Metadata } from "next";
import styles from "@/styles/WorkDetail.module.css";
import WorkContent from "@/components/WorkContent";
import PasswordProtected from "@/components/PasswordProtected";
import { Project, ProtectedProject, PublicProject } from "@/types/project";

// This would be replaced with actual CMS data fetching
const getWorkItem = (slug: string): Project => {
  // In a real implementation, this would fetch from your CMS
  const projects: Record<string, Project> = {
    salesforce: {
      title: "Salesforce",
      description: "Enterprise cloud computing solutions",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about Salesforce project work",
      tags: ["Enterprise", "CRM", "Cloud"],
      isPasswordProtected: false,
    },
    stubhub: {
      title: "StubHub",
      description: "Ticket exchange and resale platform",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about StubHub project work",
      tags: ["E-commerce", "Ticketing", "Marketplace"],
      isPasswordProtected: true,
      password: "stubhub123",
    },
    "web-component-playground": {
      title: "Web Component Playground",
      description:
        "An interactive playground for exploring and testing Web Components",
      imageUrl: "/placeholder.jpg",
      content: `The Web Component Playground is a developer tool I built to simplify the process of creating, testing, and sharing Web Components.

Key features include:

- Live code editing environment with real-time preview
- Custom element registry explorer showing all registered components
- Shadow DOM inspector for visualizing component structure
- HTML template builder with drag-and-drop interface
- Code sharing via URL or GitHub Gist integration
- Documentation generator that creates API reference from component code
- Performance metrics to analyze component rendering and update cycles

The project was built using vanilla JavaScript to maintain a lightweight footprint, with a focus on performance and browser compatibility. It demonstrates the power of web standards and how they can be leveraged to create reusable, encapsulated UI components.

As a side benefit, the playground itself serves as an educational tool for developers looking to learn about Web Components and modern browser APIs.`,
      tags: [
        "Web Components",
        "JavaScript",
        "Developer Tools",
        "HTML Templates",
        "Shadow DOM",
        "Custom Elements",
      ],
      isPasswordProtected: false,
    },
    saf: {
      title: "SAF",
      description: "Strategic project implementation",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about SAF project work",
      tags: ["Strategy", "Implementation", "Management"],
      isPasswordProtected: false,
    },
    sony: {
      title: "Sony",
      description: "Consumer electronics and entertainment",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about Sony project work",
      tags: ["Electronics", "Entertainment", "Technology"],
      isPasswordProtected: false,
    },
    thismoment: {
      title: "Thismoment",
      description: "Content marketing platform",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about Thismoment project work",
      tags: ["Marketing", "Content", "Digital"],
      isPasswordProtected: true,
      password: "thismoment123",
    },
    faire: {
      title: "Faire",
      description: "Wholesale marketplace for independent retailers",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about Faire project work",
      tags: ["Wholesale", "Marketplace", "Retail"],
      isPasswordProtected: false,
    },
    doordash: {
      title: "DoorDash",
      description: "Food delivery service",
      imageUrl: "/placeholder.jpg",
      content: "Detailed information about DoorDash project work",
      tags: ["Delivery", "Logistics", "Food"],
      isPasswordProtected: false,
    },
  };

  // Return the project data or a default if the slug doesn't match
  return (
    projects[slug] || {
      title: "Project Not Found",
      description: "This project could not be found",
      imageUrl: "/placeholder.jpg",
      content: "The requested project does not exist.",
      tags: ["Not Found"],
      isPasswordProtected: false,
    }
  );
};

// In a real implementation, this would fetch from Contentful
export async function generateStaticParams() {
  // This would fetch from your CMS to get all possible slugs
  return [
    { slug: "salesforce" },
    { slug: "stubhub" },
    { slug: "saf" },
    { slug: "sony" },
    { slug: "thismoment" },
    { slug: "faire" },
    { slug: "doordash" },
    { slug: "web-component-playground" },
    // You can specify which ones should be password protected
    // in the getWorkItem function
  ];
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const work = getWorkItem(params.slug);

  return {
    title: `${work.title} | Alexis Córdova`,
    description: work.description,
  };
}

export default function WorkDetail({ params }: any) {
  const work = getWorkItem(params.slug);

  if (work.isPasswordProtected) {
    return (
      <div className={styles.container}>
        <PasswordProtected project={work as ProtectedProject} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <WorkContent work={work} />
    </div>
  );
}
