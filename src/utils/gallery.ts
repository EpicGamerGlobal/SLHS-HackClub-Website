import { parseMarkdown } from './markdown';
import type { RawGalleryItem } from '../types';

const galleryFiles = import.meta.glob('/src/data/galleries/*.md', { as: 'raw' });



export async function getAllGalleryItems(): Promise<RawGalleryItem[]> {
  const items: RawGalleryItem[] = [];

  for (const path in galleryFiles) {
    const markdown = await galleryFiles[path]();
    const { frontmatter, contentHtml } = await parseMarkdown(markdown);
    items.push({
      ...frontmatter,
      contentHtml,
      slug: path.split('/').pop()?.replace('.md', ''),
    });
  }

  return items;
}

