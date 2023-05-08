"use client";

import Placeholder from "components/placeholder";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post({ id, post, asset }: any) {
  if (!post) {
    return <Placeholder></Placeholder>;
  }

  return (
    <>
      <Head>
        <meta name="author" content={post.author.fields.name} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="Blog" />
        <meta
          property="og:url"
          content={"https://www.blog.mbcuebconsulting.ca/post/" + id}
        />
        <meta property="og:image" content={"https:" + asset.file.url} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={"https:" + asset.file.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert prose-pre:border-none prose-pre:p-0 ">
        <Image
          className="img"
          src={"https:" + asset.file.url}
          alt="header image"
          height={asset.file.details.image.height}
          width={asset.file.details.image.width}
        />
        <ReactMarkdown
          children={post.body}
          linkTarget="_blank"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  prop={props}
                  class="m-0"
                  style={coldarkDark}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </article>
    </>
  );
}
