/**
 * Service-related type definitions
 */

export interface Service {
  category: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  features: string[];
  popular: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
}

export interface ServiceSummary {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>; // Lucide icon component
}

export interface Addon {
  name: string;
  price: string;
}
