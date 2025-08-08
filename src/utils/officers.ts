import { parseMarkdown } from './markdown';
import type {RawOfficerItem} from '../types';
const officerFiles = import.meta.glob('/src/data/officers/*.md', { as: 'raw' });

export async function getAllOfficers(): Promise<RawOfficerItem[]> {
  const officers = [];

  for (const path in officerFiles) {
    const markdown = await officerFiles[path]();
    const { frontmatter, contentHtml } = await parseMarkdown(markdown); 
    officers.push({
      ...frontmatter,
      contentHtml,
      slug: path.split('/').pop()?.replace('.md', ''),
    });
  }

  return officers;
}

