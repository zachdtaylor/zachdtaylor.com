import { convertToMetaTags } from "~/utils";
import Component, { attributes } from "../content/blog/django-inheritance.mdx";

import BlogPost, { styles } from "~/components/blog-post";

export function meta() {
  return convertToMetaTags(attributes.meta);
}

export function links() {
  return styles;
}

export default function () {
  return <BlogPost Component={Component} meta={attributes.meta} />;
}
