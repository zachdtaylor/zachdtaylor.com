import Component, { attributes } from "../content/blog/intro-to-html-forms.mdx";

import BlogPost, { styles } from "~/components/blog-post";

export function meta() {
  return attributes.meta;
}

export function links() {
  return styles;
}

export default function () {
  return <BlogPost Component={Component} meta={attributes.meta} />;
}
