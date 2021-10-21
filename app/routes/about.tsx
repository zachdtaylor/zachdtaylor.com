import type { MetaFunction, LinksFunction } from "remix";
import { ThinLayout } from "~/components/layout";
import blogPostUrl from "~/styles/blog-post.css";
import Component from "../content/about.mdx";

export let meta: MetaFunction = () => {
  return {
    title: "About",
    description: "Learn more about Zach Taylor.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: blogPostUrl }];
};

export default function About() {
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">About</h1>
      <Component />
    </ThinLayout>
  );
}
