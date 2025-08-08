import { parseMarkdown } from './markdown';

const officerFiles = import.meta.glob('/src/data/officers/*.md', { as: 'raw' });

export async function getAllOfficers() {
  const officers = [];

  for (const path in officerFiles) {
    const markdown = await officerFiles[path]();
    const { frontmatter } = await parseMarkdown(markdown);
    officers.push({
      ...frontmatter,
      slug: path.split('/').pop()?.replace('.md', ''),
    });
  }

  return officers;
}

