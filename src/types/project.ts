// Base type for all projects
export type BaseProject = {
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  tags: string[];
  isPasswordProtected: boolean;
};

// Type for password-protected projects
export type ProtectedProject = BaseProject & {
  isPasswordProtected: true;
  password: string;
};

// Type for public (non-password-protected) projects
export type PublicProject = BaseProject & {
  isPasswordProtected: false;
};

// Union type for all project types
export type Project = PublicProject | ProtectedProject;
