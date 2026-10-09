import { BLOG_POSTS } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id="blog" className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <Heading
          className={
            headingLevel === "h1"
              ? "text-2xl font-semibold tracking-tight"
              : "text-xl font-bold"
          }
        >
          Blog
        </Heading>
        <p className="text-sm text-muted-foreground">
          My writing on backend systems and software engineering.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={post.publishedAt}>
                {new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }
                )}
              </time>
              <span aria-hidden>·</span>
              <span>Article on X</span>
            </div>
            <h3 className="flex items-start justify-between gap-3 text-lg font-medium tracking-tight">
              {post.title}
              <ArrowUpRight
                className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {post.summary}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium">
              Read article on X
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
