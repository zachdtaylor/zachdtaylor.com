import { ThinLayout } from "~/components/layout";
import blogPostUrl from "~/styles/blog-post.css";
import Component from "../content/about.mdx";
import { HeadersFunction } from "@remix-run/node";

export function meta() {
  return [
    { title: "About" },
    { name: "description", content: "Learn more about Zach Taylor." },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: blogPostUrl }];
}

export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=60",
  };
};

export default function About() {
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">About</h1>
      <Component />
    </ThinLayout>
  );
}
