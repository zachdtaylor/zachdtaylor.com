import type { MetaFunction, LinksFunction } from "remix";

import Component, {
  attributes,
} from "../content/blog/stable-forms-in-remix.mdx";

import BlogPost, { styles } from "~/components/blog-post";

export let meta: MetaFunction = () => {
  return attributes.meta;
};

export let links: LinksFunction = () => {
  return styles;
};

export default function () {
  return <BlogPost Component={Component} meta={attributes.meta} />;
}
