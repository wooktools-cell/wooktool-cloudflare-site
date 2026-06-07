const cmsBlogModules = import.meta.glob("./cms/blog/*.md", { eager: true });

const slugFromPath = (path) => path.split("/").pop().replace(/\.md$/, "");

export const cmsBlogPosts = Object.entries(cmsBlogModules)
  .map(([path, module]) => {
    const slug = module.frontmatter.slug || slugFromPath(path);
    return {
      title: module.frontmatter.title,
      href: `/blog/${slug}/`,
      description: module.frontmatter.description,
      date: module.frontmatter.date || "",
      order: module.frontmatter.order || 999
    };
  })
  .filter((post) => post.title)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.order - b.order);
