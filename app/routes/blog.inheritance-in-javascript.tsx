import type { MetaFunction, LinksFunction } from "remix";
import Layout from "~/components/layout";

import Component, {
  attributes,
  filename,
} from "../content/blog/inheritance-in-javascript.mdx";

import jsHighlightsUrl from "~/styles/js-highlights.css";
import blogPostUrl from "~/styles/blog-post.css";

export let meta: MetaFunction = () => {
  return attributes.meta;
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: jsHighlightsUrl },
    { rel: "stylesheet", href: blogPostUrl },
  ];
};

export default function InheritanceInJavascript() {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
