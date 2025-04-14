// Type definition file for components
declare module "@/components/PasswordProtected" {
  import { ReactNode } from "react";

  type BaseProject = {
    title: string;
    description: string;
    imageUrl: string;
    content: string;
    tags: string[];
    isPasswordProtected: boolean;
  };

  type ProtectedProject = BaseProject & {
    isPasswordProtected: true;
    password: string;
  };

  type Props = {
    project: ProtectedProject;
  };

  export default function PasswordProtected(props: Props): ReactNode;
}

declare module "@/components/WorkContent" {
  import { ReactNode } from "react";

  type BaseProject = {
    title: string;
    description: string;
    imageUrl: string;
    content: string;
    tags: string[];
    isPasswordProtected: boolean;
  };

  type Project = BaseProject & {
    isPasswordProtected: boolean;
    password?: string;
  };

  type WorkContentProps = {
    work: Project;
  };

  export default function WorkContent(props: WorkContentProps): ReactNode;
}

declare module "@/components/CodeBlock" {
  import { ReactNode } from "react";

  type CodeBlockProps = {
    code: string;
    language?: string;
  };

  export default function CodeBlock(props: CodeBlockProps): ReactNode;
}
