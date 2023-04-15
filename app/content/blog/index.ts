import * as inheritanceInJavascript from "./inheritance-in-javascript.mdx";
import * as stableFormsInRemix from "./stable-forms-in-remix.mdx";
import * as improvingReactCustomHooks from "./improving-react-custom-hooks.mdx";
import * as djangoInheritance from "./django-inheritance.mdx";
import * as introToHTMLForms from "./intro-to-html-forms.mdx";
import * as buildingASimpleSearchUIWithRemix from "./building-a-simple-search-ui-with-remix.mdx";
import * as progressiveEnhancementInDjangoVsRemix from "./progressive-enhancement-in-django-vs-remix.mdx";
import * as someThoughtsOnServerStateInRemix from "./some-thoughts-on-server-state-in-remix.mdx";
// import * as gradientDescent from "./gradient-descent.mdx";

type ModuleBlogPost = {
  filename: string;
  attributes: {
    meta: {
      title: string;
      date: string;
      description: string;
      isJupyter?: boolean;
    };
  };
};

const posts: Array<ModuleBlogPost> = [
  {
    filename: "leading-order-behavior",
    attributes: {
      meta: {
        title: "Leading Order Behavior",
        date: "April 14, 2023",
        description:
          "In this post, I discuss why it's worth paying attention to the leading order behavior of your algorithms.",
        isJupyter: true,
      },
    },
  },
  someThoughtsOnServerStateInRemix,
  progressiveEnhancementInDjangoVsRemix,
  introToHTMLForms,
  stableFormsInRemix,
  buildingASimpleSearchUIWithRemix,
  improvingReactCustomHooks,
  inheritanceInJavascript,
  djangoInheritance,
  // gradientDescent,
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
  isJupyter?: boolean;
};

const transformedPosts = posts.map(postFromModule);

export default transformedPosts;
