import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";

import { ThinLayout } from "~/components/layout";
import posts from "~/content/blog";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export let meta: MetaFunction = () => {
  return {
    title: "Blog",
    description: "Read Zach Taylor's blog.",
  };
};

export let loader: LoaderFunction = () => {
  return posts.map(postFromModule);
};

export default function Blog() {
  const posts = useLoaderData();
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-2xl hover:text-purple-400">
              {post.title}
            </Link>
            <p className="py-2">{post.description}</p>
          </li>
        ))}
      </ul>
    </ThinLayout>
  );
}
