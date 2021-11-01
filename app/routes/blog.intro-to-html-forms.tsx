import type { MetaFunction, LinksFunction } from "remix";

import Component, { attributes } from "../content/blog/intro-to-html-forms.mdx";

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
