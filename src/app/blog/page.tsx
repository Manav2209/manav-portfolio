import BlurFade from "@/components/magicui/blur-fade";
import BlogSection from "@/components/section/blog-section";
import type { Metadata } from "next";

const description = "My writing on backend systems and software engineering.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: {
    title: "Blog",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description,
  },
};

export default function BlogPage() {
  return (
    <BlurFade delay={0.04}>
      <BlogSection headingLevel="h1" />
    </BlurFade>
  );
}
