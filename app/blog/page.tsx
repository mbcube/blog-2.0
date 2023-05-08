import type { Metadata } from "next";
import Link from "next/link";
// import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import { createClient } from "contentful";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

type Props = {
  posts: any;
};

export async function getBlogPosts() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const postsResponse = await client.getEntries({ content_type: "blogPost" });

  return postsResponse.items
    .map((item: any) => ({
      ...item.fields,
      id: item.sys.id,
    }))
    .sort(
      (first, second) =>
        (new Date(Date.parse(second.publishDate)) as any) -
        (new Date(Date.parse(first.publishDate)) as any)
    );
}

export default async function BlogPage() {
  const allBlogs = await getBlogPosts();

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        // .sort((a, b) => {
        //   if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        //     return -1;
        //   }
        //   return 1;
        // })
        .map((post) => (
          <Link
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.id}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                {new Date(Date.parse(post.publishDate)).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric" }
                )}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
