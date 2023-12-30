import { ThinLayout } from "./layout";
import jsHighlightsUrl from "~/styles/js-highlights.css";
import blogPostUrl from "~/styles/blog-post.css";
import { BackArrowIcon } from "./icons";
import { Link } from "@remix-run/react";

type BlogPostProps = {
  Component: () => JSX.Element;
  meta: {
    title: string;
    date: string;
  };
};

export default function BlogPost({ Component, meta }: BlogPostProps) {
  return (
    <ThinLayout>
      <div className="py-16">
        <h1 className="text-4xl">{meta.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{meta.date}</p>
      </div>
      <Component />
      <div className="pt-16">
        <Link to="/blog" className="flex text-2xl">
          <BackArrowIcon className="my-auto" />{" "}
          <span className="pl-4">Back to Blog</span>
        </Link>
      </div>
    </ThinLayout>
  );
}

export const styles = [
  { rel: "stylesheet", href: jsHighlightsUrl },
  { rel: "stylesheet", href: blogPostUrl },
];
