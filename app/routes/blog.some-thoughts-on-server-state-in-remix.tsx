import Component, {
  attributes,
} from "../content/blog/some-thoughts-on-server-state-in-remix.mdx";

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
