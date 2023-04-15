import Component, {
  attributes,
} from "../content/blog/progressive-enhancement-in-django-vs-remix.mdx";

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
