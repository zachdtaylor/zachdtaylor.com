import type { MetaFunction, LoaderFunction } from "remix";
import type { BlogPost } from "~/content/blog";
import { useLoaderData } from "remix";

import { ThinLayout } from "~/components/layout";
import { ItemPreview } from "~/components/lib";
import posts from "~/content/blog";

export let meta: MetaFunction = () => {
  return {
    title: "Blog",
    description: "Read Zach Taylor's blog.",
  };
};

export let loader: LoaderFunction = () => {
  return posts;
};

export default function Blog() {
  const posts = useLoaderData<Array<BlogPost>>();
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
