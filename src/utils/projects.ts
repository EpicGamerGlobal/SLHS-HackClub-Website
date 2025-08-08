import { parseMarkdown } from './markdown';

const projectFiles = import.meta.glob('/src/data/projects/*.md', { as: 'raw' });

export async function getAllProjects() {
  const projects = [];

  for (const path in projectFiles) {
    const markdown = await projectFiles[path]();
    const { frontmatter, contentHtml } = await parseMarkdown(markdown);
    projects.push({
      ...frontmatter,
      contentHtml,
      slug: path.split('/').pop()?.replace('.md', ''),
    });
  }

  return projects;
}

