export interface NavItem {
  name: string;
  href: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  category: string;
  specifications?: Record<string, string>;
  imageUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AccordionItem {
  id: string;
  trigger: string;
  content: string;
}
