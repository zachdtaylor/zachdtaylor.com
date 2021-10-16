import { ThinLayout } from "./layout";
import jsHighlightsUrl from "~/styles/js-highlights.css";
import blogPostUrl from "~/styles/blog-post.css";

type BlogPostProps = {
  Component: Function;
  meta: {
    title: string;
    date: string;
  };
};

export default function BlogPost({ Component, meta }: BlogPostProps) {
  return (
    <ThinLayout>
      <div className="py-16">
        <h1 className="text-4xl md:mx-16">{meta.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{meta.date}</p>
      </div>
      <Component />
    </ThinLayout>
  );
}

export const styles = [
  { rel: "stylesheet", href: jsHighlightsUrl },
  { rel: "stylesheet", href: blogPostUrl },
];
