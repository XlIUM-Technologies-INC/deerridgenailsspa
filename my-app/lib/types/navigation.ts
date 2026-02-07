/**
 * Navigation-related type definitions
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>; // Lucide icon component
}
