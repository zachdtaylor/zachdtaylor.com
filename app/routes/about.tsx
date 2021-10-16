import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "About",
    description: "Learn more about Zach Taylor.",
  };
};

export default function About() {
  return <div></div>;
}
