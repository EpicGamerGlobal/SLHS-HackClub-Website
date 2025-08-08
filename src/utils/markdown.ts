import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function parseMarkdown(markdownString: string) {
  const { data, content } = matter(markdownString);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    frontmatter: data,
    contentHtml,
  };
}

