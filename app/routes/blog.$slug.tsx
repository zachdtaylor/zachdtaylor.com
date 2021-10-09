import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Blog post",
    description: "Welcome to remix!",
  };
};

export default function BlogPost() {
  return <div>Hello there</div>;
}
