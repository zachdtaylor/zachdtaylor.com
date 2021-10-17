import type { MetaFunction } from "remix";
import { ThinLayout } from "~/components/layout";

export let meta: MetaFunction = () => {
  return {
    title: "About",
    description: "Learn more about Zach Taylor.",
  };
};

export default function About() {
  return (
    <ThinLayout>
      <h1 className="text-4xl py-16">About</h1>
      <ul></ul>
    </ThinLayout>
  );
}
