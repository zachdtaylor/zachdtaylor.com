import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Talks",
    description: "Watch talks by Zach Taylor.",
  };
};

export default function Talks() {
  return <div></div>;
}
