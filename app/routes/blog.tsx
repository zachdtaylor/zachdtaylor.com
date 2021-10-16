import type { MetaFunction, LoaderFunction } from "remix";
import type { BlogPost } from "~/content/blog";
import { useLoaderData, Link } from "remix";

import { ThinLayout } from "~/components/layout";
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

type BlogItemProps = {
  post: BlogPost;
};

function BlogItem({ post }: BlogItemProps) {
  return (
    <li key={post.slug} className="py-6">
      <Link to={post.slug} className="text-2xl hover:text-purple-400">
        {post.title}
      </Link>
      <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
      <p className="py-2">{post.description}</p>
    </li>
  );
}

export default function Blog() {
  const posts = useLoaderData<Array<BlogPost>>();
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">Blog</h1>
      <ul>
        {posts.map((post) => (
          <BlogItem post={post} />
        ))}
      </ul>
    </ThinLayout>
  );
}
