import type { StaticImageData } from "next/image";

export type ResumeIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
    details?: readonly string[];
  }>;
  work: Array<{
    company: string;
    link: string;
    badges: string[];
    title: string;
    location: string;
    start: string;
    end: string | null;
    description: string;
    highlights?: readonly string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  publications: Array<{
    title: string;
    authors: string;
    venue: string;
    year: string;
    note?: string;
    link?: string;
  }>;
  domesticPublications: Array<{
    title: string;
    authors: string;
    venue: string;
    year: string;
  }>;
  patents: Array<{
    title: string;
    authors: string;
    patentNumber: string;
    year: string;
  }>;
  awards: Array<{
    title: string;
    organization: string;
    date: string;
    location: string;
  }>;
  grants: Array<{
    title: string;
    organization: string;
    date: string;
    location: string;
  }>;
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
}
