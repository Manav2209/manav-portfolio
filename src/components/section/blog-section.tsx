
import { allPosts } from "content-collections";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  const mdxPosts = allPosts.map((post) => ({
    title: post.title,
    summary: post.summary,
    publishedAt: post.publishedAt,
    href: `/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    external: false,
  }));

  const externalPosts = BLOG_POSTS.map((post) => ({
    ...post,
    external: true,
  }));

  const posts = [...mdxPosts, ...externalPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

  return (
    <section id="blog" className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <Heading className="text-2xl font-semibold tracking-tight">
          Blog
        </Heading>
        <p className="text-sm text-muted-foreground">
          My writing on backend systems and software engineering.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            target={post.external ? "_blank" : undefined}
            rel={post.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/50"
          >
            <div className="text-xs text-muted-foreground">
              {new Date(
                `${post.publishedAt}T00:00:00Z`
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              })}
              {" · "}
              {post.external ? "Article on X" : "Blog"}
            </div>

            <h3 className="flex items-start justify-between gap-3 text-lg font-medium tracking-tight">
              {post.title}
              <ArrowUpRight className="mt-1 size-4 shrink-0" />
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {post.summary}
            </p>

            <span className="text-sm font-medium">
              {post.external ? "Read article on X" : "Read article"} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
