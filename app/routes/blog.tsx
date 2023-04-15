import type { BlogPost } from "~/content/blog";

import { ThinLayout } from "~/components/layout";
import { ItemPreview } from "~/components/lib";
import posts from "~/content/blog";
import { useLoaderData } from "@remix-run/react";

export function meta() {
  return {
    title: "Blog",
    description: "Read Zach Taylor's blog.",
  };
}

export function loader() {
  return posts;
}

export default function Blog() {
  const posts = useLoaderData<typeof loader>();
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">Blog</h1>
      <ul>
        {posts.map((post) => (
          <ItemPreview key={post.slug} to={post.slug} {...post} />
        ))}
      </ul>
    </ThinLayout>
  );
}
