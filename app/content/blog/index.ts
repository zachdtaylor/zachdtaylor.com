import * as inheritanceInJavascript from "./inheritance-in-javascript.mdx";
import * as stableFormsInRemix from "./stable-forms-in-remix.mdx";
import * as improvingReactCustomHooks from "./improving-react-custom-hooks.mdx";

type ModuleBlogPost = {
  filename: string;
  attributes: {
    meta: {
      title: string;
      date: string;
      description: string;
    };
  };
};

const posts: Array<ModuleBlogPost> = [
  stableFormsInRemix,
  improvingReactCustomHooks,
  inheritanceInJavascript,
];

function postFromModule(mod: ModuleBlogPost): BlogPost {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const transformedPosts = posts.map(postFromModule);

export default transformedPosts;
