import { convertToMetaTags } from "~/utils";
import Component, {
  attributes,
} from "../content/blog/some-thoughts-on-server-state-in-remix.mdx";

import BlogPost, { styles } from "~/components/blog-post";

export function meta() {
  return convertToMetaTags(attributes.meta);
}

export function links() {
  return styles;
}

export default function Post() {
  return <BlogPost Component={Component} meta={attributes.meta} />;
}
