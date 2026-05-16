import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { createClient } from "contentful";
import Post from "components/post";
import emailSubscribe from "components/email-subscribe";

export const revalidate = 3600;

async function getBlogPost(params) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const postsResponse: any = await client.getEntry(params.id);
  const assetResponse: any = await client.getAsset(
    postsResponse.fields.image.sys.id
  );

  return {
    post: postsResponse.fields,
    asset: assetResponse.fields,
  };
}

export default async function Blog({ params }) {
  const { post, asset } = await getBlogPost(params);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {new Date(Date.parse(post.publishDate)).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        {/* <ViewCounter slug={post.slug} trackView /> */}
      </div>
      {/* <Mdx code={post.body} /> */}
      <Post id={params.id} post={post} asset={asset} />
      {emailSubscribe()}
    </section>
  );
}
