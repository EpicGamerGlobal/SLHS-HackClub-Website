import { parseMarkdown } from './markdown';

const galleryFiles = import.meta.glob('/src/data/galleries/*.md', { as: 'raw' });



export async function getAllGalleryItems() {
  const items = [];

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

