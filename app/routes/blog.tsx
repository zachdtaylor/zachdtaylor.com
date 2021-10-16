import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import Layout from "~/components/layout";

export let meta: MetaFunction = () => {
  return {
    title: "Blog",
    description: "Read Zach Taylor's blog.",
  };
};

export let loader: LoaderFunction = () => {
  return [];
};

export default function Blog() {
  const posts = useLoaderData();
  return (
    <Layout>
      {posts.map((post: any) => (
        <p key={post.title}>{JSON.stringify(post)}</p>
      ))}
    </Layout>
  );
}
