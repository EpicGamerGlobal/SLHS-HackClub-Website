export interface Officer {
  name: string;
  role: string;
  email: string;
  avatar: string;
}

export interface RawOfficerItem {
  name?: string;
  role?: string;
  email?: string;
  avatar?: string;
  contentHtml: string;
  slug?: string;
}

export interface Event {
  title: string;
  date: string;
  description: string;
}

export interface RawEventItem {
  title?: string;
  date?: string;
  description?: string;
  contentHtml: string;
  slug?: string;
}

export interface Project {
  title: string;
  tech: string;
  description: string;
}

export interface RawProject {
  title?: string;
  tech?: string;
  description?: string;
  contentHtml: string;
  slug?: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  description: string;
}

export interface RawGalleryItem {
  title?: string;
  image?: string;
  description?: string;
  contentHtml: string;
  slug?: string;
}


export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export interface Position {
  x: number;
  y: number;
}
