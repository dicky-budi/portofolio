import type { ImageMetadata } from "astro";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imagePlaceholder: ImageMetadata;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  images: ImageAsset[];
}

export interface ImageAsset {
  src: ImageMetadata;
  alt: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: "Frontend" | "Backend" | "DevOps" | "Tools" | "Soft Skills";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: "Home" | "About" | "Projects" | "Skills";
  href: string;
}
