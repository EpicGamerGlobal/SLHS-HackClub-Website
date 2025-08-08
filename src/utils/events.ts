import { parseMarkdown } from './markdown';
import type { RawEventItem } from '../types';
const eventFiles = import.meta.glob('/src/data/events/*.md', { as: 'raw' });

export async function getAllEvents(): Promise<RawEventItem[]> {
  const events = [];

  for (const path in eventFiles) {
    const markdown = await eventFiles[path]();
    const { frontmatter, contentHtml } = await parseMarkdown(markdown);
    events.push({
      ...frontmatter,
      contentHtml,
      slug: path.split('/').pop()?.replace('.md', ''),
    });
  }

  return events;
}

